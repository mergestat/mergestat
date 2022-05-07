[![Go Report Card](https://goreportcard.com/badge/github.com/mergestat/fuse)](https://goreportcard.com/report/github.com/mergestat/fuse)
[![CI](https://github.com/mergestat/fuse/actions/workflows/ci.yaml/badge.svg)](https://github.com/mergestat/fuse/actions/workflows/ci.yaml)

# fuse

![Fuse example illustration](docs/illustration-logs.png)

**beta**

MergeStat `fuse` is a project to sync data from [`mergestat`](https://github.com/mergestat/mergestat) queries into PostgreSQL tables.
It behaves similar to an ETL tool, taking data from git repositories and the GitHub API and regularly updating tables in a database.
It's intended purpose is to enable "operational analytics for engineering teams," where downstream tools may consume the data from the PostgreSQL database.

## Testing locally

Try Fuse out with `docker-compose` by running the following locally:

```sh
# Initialize postgres and hasura
docker-compose up init

# Add a repo to be synced
docker-compose run --rm init add-repo https://github.com/mergestat/mergestat

# Start worker and grafana
docker-compose up -d worker grafana
```

Depending on the size of the repo, it should only take short period of time to sync.
Afterwards you should be able to pull up grafana and see some some graphs.

Access grafana with http://localhost:3000

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
