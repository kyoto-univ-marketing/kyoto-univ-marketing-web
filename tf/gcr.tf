resource "google_cloud_run_v2_service" "default" {
  provider = google-beta
  name     = "kyoto-univ-marketing-web"
  location = var.region
  deletion_protection = false

  template {
    containers {
      name  = "web"
      image = "${local.image}:latest"
      ports {
        container_port = 3000
      }
      env {
        name  = "MICROCMS_SERVICE_DOMAIN"
        value = var.microcms_service_domain
      }
      env {
        name  = "MICROCMS_API_KEY"
        value = var.microcms_api_key
      }
      env {
        name  = "NEXT_PUBLIC_MEASUREMENT_ID"
        value = var.next_public_measurement_id
      }
      env {
        name  = "CONTACT_FORM_API_URL"
        value = var.contact_form_api_url
      }
    }
  }
}

# 未認証のアクセスを許可する設定
data "google_iam_policy" "noauth" {
  binding {
    role    = "roles/run.invoker"
    members = ["allUsers"]
  }
}
resource "google_cloud_run_v2_service_iam_policy" "noauth" {
  location = google_cloud_run_v2_service.default.location
  project  = google_cloud_run_v2_service.default.project
  name     = google_cloud_run_v2_service.default.name

  policy_data = data.google_iam_policy.noauth.policy_data
}

