#!/bin/bash

HASURA_DATABASE_NAME="${HASURA_DATABASE_NAME:-default}"
HASURA_GRAPHQL_DISABLE_INTERACTIVE=true

echo "Initializing Hasura..." >&2
hasura migrate apply --database-name "$HASURA_DATABASE_NAME"
hasura seed apply --database-name "$HASURA_DATABASE_NAME"
hasura metadata apply
