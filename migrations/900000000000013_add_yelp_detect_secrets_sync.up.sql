BEGIN;

INSERT INTO mergestat.repo_sync_types (type, description, short_name, priority) VALUES ('YELP_DETECT_SECRETS_REPO_SCAN', 'Executes a Yelp detect-secrets scan on a git repository', 'Yelp Detect Secrets Repo Scan', 3) ON CONFLICT DO NOTHING;

CREATE TABLE IF NOT EXISTS yelp_detect_secrets_repo_scans (
    repo_id uuid PRIMARY KEY,
    results jsonb NOT NULL
);

CREATE OR REPLACE VIEW yelp_detect_secrets_repo_detections AS
SELECT
    yelp_detect_secrets_repo_scans.repo_id,
    r.value[0]->> 'type' AS type,
    r.value[0]->> 'filename' AS filename,
    r.value[0]->> 'is_verified' AS is_verified,
    r.value[0]->> 'line_number' AS line_number,
    r.value[0]->> 'hashed_secret' AS hashed_secret,
    results->> 'version' AS version,
    results->> 'generated_at' AS generated_at,
    results->> 'filters_used' AS filters_used,
    results->> 'plugins_used' AS plugins_used
FROM yelp_detect_secrets_repo_scans, jsonb_each(results-> 'results') AS r;

COMMIT;
