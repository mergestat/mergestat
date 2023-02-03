BEGIN;

INSERT INTO mergestat.repo_sync_types (type, description, short_name) VALUES ('GIT_REMOTES', 'Retrieves the remotes of a git repo. Only relevant for local, on-disk repos.', 'Git Remotes') ON CONFLICT DO NOTHING;

CREATE TABLE IF NOT EXISTS git_remotes (
    repo_id uuid PRIMARY KEY,
    name text NOT NULL,
    url text NOT NULL,
    _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL
);

COMMENT ON TABLE git_remotes IS 'table of git repo remotes';
COMMENT ON COLUMN git_remotes.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN git_remotes.name IS 'name of the remote';
COMMENT ON COLUMN git_remotes.url IS 'url of the remote';
COMMENT ON COLUMN git_remotes._mergestat_synced_at IS 'timestamp when record was synced into the MergeStat database';

COMMIT;
