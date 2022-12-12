BEGIN;

INSERT INTO mergestat.repo_sync_types (type, description, short_name) VALUES ('GITLEAKS_REPO_SCAN', 'Executes a gitleaks scan on a git repository', 'Gitleaks Repo Scan') ON CONFLICT DO NOTHING;

CREATE TABLE IF NOT EXISTS gitleaks_repo_scans (
    repo_id uuid PRIMARY KEY,
    results jsonb NOT NULL
);

CREATE OR REPLACE VIEW gitleaks_repo_detections AS
SELECT
    gitleaks_repo_scans.repo_id,
    r.value->> 'Description' AS description,
    r.value->> 'StartLine' AS start_line,
    r.value->> 'EndLine' AS end_line,
    r.value->> 'StartColumn' AS start_column,
    r.value->> 'EndColumn' AS end_column,
    r.value->> 'Match' AS match,
    r.value->> 'Secret' AS secret,
    r.value->> 'File' AS file,
    r.value->> 'SymlinkFile' AS symlink_file,
    r.value->> 'Commit' AS commit,
    r.value->> 'Entropy' AS entropy,
    r.value->> 'Author' AS author,
    r.value->> 'Email' AS email,
    r.value->> 'Date' AS date,
    r.value->> 'Message' AS message,
    r.value->> 'Tags' AS tags,
    r.value->> 'RuleID' AS rule_id,
    r.value->> 'Fingerprint' AS fingerprint
FROM gitleaks_repo_scans, jsonb_array_elements(results) AS r;

COMMIT;
