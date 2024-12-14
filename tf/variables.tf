variable "region" {
  description = "The region to deploy resources"
  type        = string
  default     = "asia-east1"
}

variable "project_number" {
  description = "GCPプロジェクト番号"
  type        = number
}

variable "project_id" {
  description = "GCPプロジェクトID"
  type        = string
}

variable "microcms_service_domain" {
  description = "MICROCMS Service Domain"
  type        = string
}

variable "microcms_api_key" {
  description = "MICROCMS API Key"
  type        = string
}

variable "next_public_measurement_id" {
  description = "Next Public Measurement ID"
  type        = string
}

variable "contact_form_api_url" {
  description = "Contact Form API URL"
  type        = string
}

variable "github_app_installation_id" {
  description = "GitHub App Installation ID"
  type        = number
}

variable "github_oauth_token_secret_version" {
  description = "GitHub OAuth Token Secret Version"
  type        = string
}

variable "github_repository_remote_uri" {
  description = "GitHub Repository Remote URI"
  type        = string
}

