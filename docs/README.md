# Contributing & Developing Locally

For usage instructions, visit: [`docs.mergestat.com`](https://docs.mergestat.com/).

## Repo Sync Types

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
- `SYFT_REPO_SCAN` Executes a syft scan on a git repository to generate an SBOM

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

### Running on Windows

To run `fuse` on Windows you will need to use [WSL](https://learn.microsoft.com/en-us/windows/wsl/about) (Windows subsystem for linux) and modify settings in the docker desktop application. 

 - Modify your current docker desktop settings to ones showed in the pictures.

<img alt="MergeStat docker desktop general settings" src="docs/docker-general-settings.png" />
<img alt="MergeStat docker desktop resources settings" src="docs/docker-resources-settings.png" />

 - Follow the instructions provided [here](https://learn.microsoft.com/en-us/windows/wsl/setup/environment) to make correct use of WSL
 - Try to run `docker-compose up` inside the WSL

 ## SQL Linting

The .sql files in this repo are linted using [sqlfluff](https://github.com/sqlfluff/sqlfluff) and .sqlfluff configuration file at the root of this repo.

To check for linting issues run this command from the root of the root directory

    sqlfluff lint

To force linting issue fixes run this command from the root of the root directory

    sqlfluff fix
