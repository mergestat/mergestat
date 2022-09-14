BEGIN;

INSERT INTO mergestat.repo_sync_types (type, description, short_name) VALUES ('GIT_BLAME', 'Retrieves the git blame of all lines in all files of a git repository', 'Git Blame') ON CONFLICT DO NOTHING;

CREATE TABLE IF NOT EXISTS git_blame (
    repo_id uuid REFERENCES repos(id) ON DELETE CASCADE ON UPDATE RESTRICT,
    author_email text,
    author_name text,
    author_when timestamp with time zone,
    commit_hash text,
    line_no integer,
    line text,
    path text,
    _mergestat_synced_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT git_blame_pkey PRIMARY KEY (repo_id, path, line_no)
);

COMMIT;
