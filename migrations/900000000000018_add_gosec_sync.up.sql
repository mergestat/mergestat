BEGIN;

INSERT INTO mergestat.repo_sync_types (type, description, short_name, priority)
    VALUES ('GOSEC_REPO_SCAN', 'Executes a gosec scan on a git repository', 'Gosec Repo Scan', 3) ON CONFLICT DO NOTHING;

CREATE TABLE IF NOT EXISTS gosec_repo_scans (repo_id uuid PRIMARY KEY, issues jsonb NOT NULL);

CREATE OR REPLACE VIEW gosec_repo_detections AS
SELECT
    gosec_repo_scans.repo_id,
    issue ->> 'severity' AS severity,
    issue ->> 'confidence' AS confidence,
    issue ->> 'cwe.ID' AS cwe_id,
    issue ->> 'cwe.Name' AS cwe_name,
    issue ->> 'cwe.Description' AS cwe_description,
    issue ->> 'rule_id' AS rule_id,
    issue ->> 'details' AS details,
    issue ->> 'file' AS file,
    issue ->> 'line' AS line,
    issue ->> 'column' AS "column",
    issue ->> 'nosec' AS nosec
FROM gosec_repo_scans, jsonb_array_elements(issues) AS issue;

COMMIT;
