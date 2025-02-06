locals {
  image_name = "web"
  image      = "${google_artifact_registry_repository.default.location}-docker.pkg.dev/${var.project_id}/${google_artifact_registry_repository.default.repository_id}/${local.image_name}"
}


resource "google_cloudbuild_trigger" "default" {
  name            = local.image_name
  location        = var.region
  project         = var.project_id
  service_account = google_service_account.cloudbuild_service_account.id

  build {
    step {
      name       = "gcr.io/cloud-builders/docker"
      env        = ["DOCKER_BUILDKIT=1"]
      args = [
        "buildx",
        "build",
        "--tag",
        "${local.image}:$SHORT_SHA",
        "--tag",
        "${local.image}:latest",
        "--cache-from",
        "${local.image}:latest",
        "-f",
        "Dockerfile",
        "--build-arg",
        "MICROCMS_SERVICE_DOMAIN=${var.microcms_service_domain}",
        "--build-arg",
        "MICROCMS_API_KEY=${var.microcms_api_key}",
        "--build-arg",
        "NEXT_PUBLIC_MEASUREMENT_ID=${var.next_public_measurement_id}",
        "--build-arg",
        "CONTACT_FORM_API_URL=${var.contact_form_api_url}",
        "--push",
        ".",
      ]
      id = "Build"
    }

    step {
      name = "gcr.io/google.com/cloudsdktool/cloud-sdk:slim"
      args = [
        "run",
        "services",
        "update",
        google_cloud_run_v2_service.default.name,
        "--platform=managed",
        "--image=${local.image}:latest",
        "--region=${var.region}",
        "--quiet",
      ]
      entrypoint = "gcloud"
      id         = "Deploy"
    }

    options {
      substitution_option = "ALLOW_LOOSE"
      logging             = "CLOUD_LOGGING_ONLY"
    }
  }

  repository_event_config {
    repository = google_cloudbuildv2_repository.github_repository.id
    push { branch = "main" }
  }
}

resource "google_cloudbuildv2_connection" "github_connection" {
  location = var.region
  name     = "github-connection"

  github_config {
    app_installation_id = var.github_app_installation_id
    authorizer_credential {
      oauth_token_secret_version = var.github_oauth_token_secret_version
    }
  }
}

resource "google_cloudbuildv2_repository" "github_repository" {
  name              = "github-repository"
  parent_connection = google_cloudbuildv2_connection.github_connection.id
  remote_uri        = var.github_repository_remote_uri
}

resource "google_service_account" "cloudbuild_service_account" {
  account_id   = "cloudbuild-sa"
  display_name = "cloudbuild-sa"
  description  = "Cloud build service account"
  project      = var.project_id
}

resource "google_project_iam_member" "cloudbuild_iam" {
  for_each = toset([
    "roles/run.admin",
    "roles/iam.serviceAccountUser",
    "roles/secretmanager.secretAccessor",
  ])
  role    = each.key
  member  = "serviceAccount:${google_service_account.cloudbuild_service_account.email}"
  project = var.project_id
}

resource "google_project_iam_member" "act_as" {
  project = var.project_id
  role    = "roles/iam.serviceAccountUser"
  member  = "serviceAccount:${google_service_account.cloudbuild_service_account.email}"
}

resource "google_project_iam_member" "logs_writer" {
  project = var.project_id
  role    = "roles/logging.logWriter"
  member  = "serviceAccount:${google_service_account.cloudbuild_service_account.email}"
}

resource "google_project_iam_member" "artifact_writer" {
  project = var.project_id
  role    = "roles/artifactregistry.writer"
  member  = "serviceAccount:${google_service_account.cloudbuild_service_account.email}"
}
