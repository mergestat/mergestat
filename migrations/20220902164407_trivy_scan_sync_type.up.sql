BEGIN;

INSERT INTO mergestat.repo_sync_types (type, description, short_name) VALUES ('TRIVY_REPO_SCAN', 'Executes a trivy scan on a git repository', 'Trivy Repo Scan') ON CONFLICT DO NOTHING;

CREATE TABLE IF NOT EXISTS trivy_repo_scans (
    repo_id uuid PRIMARY KEY,
    results jsonb NOT NULL
);

CREATE OR REPLACE VIEW trivy_repo_vulnerabilities AS
SELECT
    trivy_repo_scans.repo_id,
    v as vulnerability,
    r.value->> 'Target' as target,
    r.value->> 'Class' as class,
    r.value->> 'Type' as type,
    v->> 'VulnerabilityID' as vulnerability_id,
    v->> 'PkgName' as vulnerability_pkg_name,
    v->> 'InstalledVersion' as vulnerability_installed_version,
    v->> 'Severity' as vulnerability_severity,
    v->> 'Title' as vulnerability_title,
    v->> 'Description' as vulnerability_description
FROM trivy_repo_scans, jsonb_array_elements(results-> 'Results') AS r, jsonb_array_elements(r-> 'Vulnerabilities') AS v;

COMMIT;
