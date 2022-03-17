#!/bin/bash

set -e

db_add_repo(){
    local repo="$1"

    local is_github="false"

    if [[ "$repo" =~ ^https://github.com/ ]]; then
        is_github="true"
    fi

    echo "Creating repo: $repo" >&2

    psql -c "INSERT INTO repos (repo, is_github) VALUES ('$repo', $is_github)"

    local from_repo="FROM repos WHERE repo='$repo' AND is_github=$is_github"
    local repo_id="$(psql -Atqc "SELECT id $from_repo LIMIT 1")"

    echo "Created Repo ($repo_id)" >&2
    psql -xc "SELECT * $from_repo"

    local sync_types="GIT_COMMITS GIT_COMMIT_STATS GIT_BRANCHES"

    if [ "$is_github" == "true" ]; then
        sync_types+=" GITHUB_REPO_METADATA"
    fi

    for sync_type in $sync_types; do
        echo "Adding repo sync for $sync_type"
        psql -c "INSERT INTO mergestat.repo_syncs (repo_id, sync_type) VALUES ('$repo_id', '$sync_type')"
    done
}

if [ $# -ne 0 ]; then
    if [ "$1" == "add-repo" ]; then
        shift

        db_add_repo "$@"
    else
        exec "$@"
    fi

    exit $?
fi

HASURA_DATABASE_NAME="${HASURA_DATABASE_NAME:-default}"
HASURA_GRAPHQL_DISABLE_INTERACTIVE=true

echo "Initializing Hasura..." >&2
hasura migrate apply --database-name "$HASURA_DATABASE_NAME"
hasura seed apply --database-name "$HASURA_DATABASE_NAME"
hasura metadata apply
