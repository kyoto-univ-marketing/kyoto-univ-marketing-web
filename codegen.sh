#! /bin/bash

eval "$(cat .env <(echo) <(declare -x))"

if [ -z "$BACKEND_BASE_URL" ]; then
  echo "BACKEND_BASE_URL is not set"
  exit 1
fi

openapi-typescript ${BACKEND_BASE_URL}api/schema/ -o ./src/api/schema.d.ts
