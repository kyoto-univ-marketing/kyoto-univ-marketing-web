resource "google_secret_manager_secret" "microcms_service_domain" {
  secret_id = "MICROCMS_SERVICE_DOMAIN"
  replication {
    auto {}
  }
}

resource "google_secret_manager_secret_version" "microcms_service_domain_version" {
  secret      = google_secret_manager_secret.microcms_service_domain.id
  secret_data = var.microcms_service_domain
}

resource "google_secret_manager_secret_iam_member" "microcms_service_domain_iam" {
  secret_id = google_secret_manager_secret.microcms_service_domain.id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${google_service_account.cloudbuild_service_account.email}"
}

resource "google_secret_manager_secret" "microcms_api_key" {
  secret_id = "MICROCMS_API_KEY"
  replication {
    auto {}
  }
}

resource "google_secret_manager_secret_version" "microcms_api_key_version" {
  secret      = google_secret_manager_secret.microcms_api_key.id
  secret_data = var.microcms_api_key
}

resource "google_secret_manager_secret_iam_member" "microcms_api_key_iam" {
  secret_id = google_secret_manager_secret.microcms_api_key.id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${google_service_account.cloudbuild_service_account.email}"
}

resource "google_secret_manager_secret" "next_public_measurement_id" {
  secret_id = "NEXT_PUBLIC_MEASUREMENT_ID"
  replication {
    auto {}
  }
}

resource "google_secret_manager_secret_version" "next_public_measurement_id_version" {
  secret      = google_secret_manager_secret.next_public_measurement_id.id
  secret_data = var.next_public_measurement_id
}

resource "google_secret_manager_secret_iam_member" "next_public_measurement_id_iam" {
  secret_id = google_secret_manager_secret.next_public_measurement_id.id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${google_service_account.cloudbuild_service_account.email}"
}

resource "google_secret_manager_secret" "contact_form_api_url" {
  secret_id = "CONTACT_FORM_API_URL"
  replication {
    auto {}
  }
}

resource "google_secret_manager_secret_version" "contact_form_api_url_version" {
  secret      = google_secret_manager_secret.contact_form_api_url.id
  secret_data = var.contact_form_api_url
}

resource "google_secret_manager_secret_iam_member" "contact_form_api_url_iam" {
  secret_id = google_secret_manager_secret.contact_form_api_url.id
  role      = "roles/secretmanager.secretAccessor"
  member    = "serviceAccount:${google_service_account.cloudbuild_service_account.email}"
}
