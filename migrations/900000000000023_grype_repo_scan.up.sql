BEGIN;

INSERT INTO mergestat.repo_sync_types (type, description, short_name) VALUES ('GRYPE_REPO_SCAN', 'Executes a grype scan on a git repository', 'Grype Repo Scan') ON CONFLICT DO NOTHING;

CREATE TABLE IF NOT EXISTS grype_repo_scans (
    repo_id uuid PRIMARY KEY,
    results jsonb NOT NULL
);

COMMIT;
