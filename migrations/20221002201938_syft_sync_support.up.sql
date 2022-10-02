BEGIN;

INSERT INTO mergestat.repo_sync_types (type, description, short_name) VALUES ('SYFT_REPO_SCAN', 'Executes a syft scan on a git repository to generate an SBOM', 'Syft Repo Scan') ON CONFLICT DO NOTHING;

CREATE TABLE IF NOT EXISTS syft_repo_scans (
    repo_id uuid PRIMARY KEY,
    results jsonb NOT NULL
);

CREATE OR REPLACE VIEW syft_repo_artifacts AS
SELECT
    syft_repo_scans.repo_id,
    a::jsonb AS artifact,
    a->>'id' AS id,
    a->>'name' AS name,
    a->>'version' AS version,
    a->>'type' AS type,
    a->>'foundBy' AS found_by,
    a->>'locations' AS locations,
    a->>'licenses' AS licenses,
    a->>'language' AS language,
    a->>'cpes' AS cpes,
    a->>'purl' AS purl
FROM syft_repo_scans, jsonb_array_elements(results->'artifacts') AS a;

COMMIT;
