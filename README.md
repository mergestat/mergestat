[![Go Report Card](https://goreportcard.com/badge/github.com/mergestat/fuse)](https://goreportcard.com/report/github.com/mergestat/fuse)
[![CI Worker (Golang)](https://github.com/mergestat/fuse/actions/workflows/ci-worker.yaml/badge.svg)](https://github.com/mergestat/fuse/actions/workflows/ci-worker.yaml)
[![CI Frontend (UI)](https://github.com/mergestat/fuse/actions/workflows/ci-frontend.yaml/badge.svg)](https://github.com/mergestat/fuse/actions/workflows/ci-frontend.yaml)

# fuse

TESTING THE FORK ACTIONS BEHAVIOR

**beta**

MergeStat `fuse` is a project to sync data from [`mergestat`](https://github.com/mergestat/mergestat) queries into PostgreSQL tables.
It behaves similar to an ETL tool, taking data from git repositories and the GitHub API and regularly updating tables in a database.
It's intended purpose is to enable "operational analytics for engineering teams," where downstream tools may consume the data from the PostgreSQL database.

<img alt="MergeStat Fuse Illustration" src="docs/illustration-logs.png" width="500" />

## Testing locally

Try Fuse out with `docker-compose` by running the following locally:

First, clone this repository to a local directory.
Create a file called `.env-worker` in the root and add the following:

```
GITHUB_TOKEN=ghp_XXXXX
```

Where `ghp_XXXXX` is replaced with a GitHub [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Then:

```sh
# start the fuse stack in the background
docker-compose up -d

# add an initial repo and some data to sync
docker-compose run --entrypoint ./docker-init-entrypoint.sh --rm worker add-repo https://github.com/mergestat/mergestat
```

Now if you visit `http://localhost:3000/` you should be able to access a Grafana instance with a default chart.

## Roadmap

### Sync Types

- [x] `GIT_COMMITS`
- [x] `GIT_COMMIT_STATS`
- [x] `GIT_REFS` ([#1](https://github.com/mergestat/fuse/issues/1))
- [x] `GITHUB_REPO_METADATA`
- [x] `GITHUB_REPO_PRS` ([#2](https://github.com/mergestat/fuse/issues/2))
- [x] `GITHUB_REPO_ISSUES` ([#2](https://github.com/mergestat/fuse/issues/2))
- [x] `GITHUB_REPO_STARS` ([#2](https://github.com/mergestat/fuse/issues/2))
- [x] `GITHUB_PR_REVIEWS` ([#18](https://github.com/mergestat/fuse/issues/18))

### Database Migrations

#### Running & Testing Locally

We use this tool https://github.com/golang-migrate/migrate/tree/master/cmd/migrate to handle migrations.
In order to *generate* new migrations, use the `migrate` CLI like so:

```
migrate create -ext sql -dir migrations/ your_migration_subject
```

You can then run `docker-compose up` (without `-d`) so that you can check in the logs if the migration is successful.

#### Dealing with Dirty Migrations

- Stop the docker container with all the images but the `postgress` one.
- Then use this command `migrate -path ./migrations -database "postgres://postgres:password@localhost:5432/postgres?sslmode=disable" force {last-successful-version}`.
- After that delete the up and down of your failed migration and recreate another migration by `migrate create -ext sql -dir migrations/ you_migration_subject`.
- And you should be good to go.
