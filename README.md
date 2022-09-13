[![Go Report Card](https://goreportcard.com/badge/github.com/mergestat/fuse)](https://goreportcard.com/report/github.com/mergestat/fuse)
[![CI Worker (Golang)](https://github.com/mergestat/fuse/actions/workflows/ci-worker.yaml/badge.svg)](https://github.com/mergestat/fuse/actions/workflows/ci-worker.yaml)
[![CI Frontend (UI)](https://github.com/mergestat/fuse/actions/workflows/ci-frontend.yaml/badge.svg)](https://github.com/mergestat/fuse/actions/workflows/ci-frontend.yaml)

# fuse

**beta**

MergeStat `fuse` is a project to sync data from [`mergestat`](https://github.com/mergestat/mergestat) queries into PostgreSQL tables.
It behaves similar to an ETL tool, taking data from git repositories and the GitHub API and regularly updating tables in a database.
It's intended purpose is to enable "operational analytics for engineering teams," where downstream tools may consume the data from the PostgreSQL database.

<img alt="MergeStat Fuse Illustration" src="docs/illustration-logs.png" width="500" />

## Running Locally

Try Fuse out locally with `docker-compose` by cloning this repository and running

```sh
docker-compose up
```

Now if you visit `http://localhost:3300/` you should be able to access our management UI where you can begin adding repositories and syncing data.

**NOTE** if you'd like to make use of GitHub API data (any sync type that uses the GitHub API **including repo auto imports**) or any private GitHub repos you will need to supply a GitHub [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
We are working on GitHub auth alternatives, but for now a PAT is your best bet.

<img alt="MergeStat Fuse GitHub PAT Management UI" src="docs/github-pat-local.png" />

You can manage a single PAT for your instance in the `Settings` area of the management UI.

### Resetting an Instance

If you'd like to "start from scratch" (i.e. reset the Fuse DB and start with a fresh deployment), run the following:

```
docker-compose down
```

```
docker volume rm fuse_db_data
```

## Data Types

- `GIT_COMMITS` Retrieves the commit history of a repo
- `GIT_COMMIT_STATS` Retrieves commit stats for a repo
- `GIT_FILES` Retrieves files (content and paths) of a git repo
- `GITHUB_PR_COMMITS` Retrieves commits for all pull requests in a GitHub repo
- `GITHUB_PR_REVIEWS` Retrieves the reviews of all pull requests in a GitHub repo
- `GITHUB_REPO_ISSUES` Retrieves all the issues of a GitHub repo
- `GITHUB_REPO_METADATA` Retrieves metadata about a GitHub repo
- `GITHUB_REPO_PRS` Retrieves all the pull requests of a GitHub repo
- `GITHUB_REPO_STARS` Retrieves all stargazers of a GitHub repo
- `GIT_REFS` Retrieves all the refs of a git repo
- `TRIVY_REPO_SCAN` Executes a trivy scan on a git repository

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
