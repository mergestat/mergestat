# fuse

**experimental / beta**

MergeStat `fuse` is an experimental project to sync data from [`mergestat`](https://github.com/mergestat/mergestat) queries into PostgreSQL tables.
It behaves similar to an ETL tool, taking data from git repositories and the GitHub API and regularly updating tables in a database.
It's intended purpose is to enable "operational analytics for engineering teams," where downstream tools may consume the data from the PostgreSQL database.
