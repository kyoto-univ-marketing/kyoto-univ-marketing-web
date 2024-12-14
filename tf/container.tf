resource "google_artifact_registry_repository" "default" {
  location      = var.region
  repository_id = "web-front"
  format        = "DOCKER"
}
