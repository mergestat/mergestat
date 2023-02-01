BEGIN;

INSERT INTO mergestat.repo_sync_types (type, description, short_name) VALUES ('GRYPE_REPO_SCAN', 'Executes a grype scan on a git repository', 'Grype Repo Scan') ON CONFLICT DO NOTHING;

CREATE TABLE IF NOT EXISTS grype_repo_scans (
    repo_id uuid PRIMARY KEY,
    results jsonb NOT NULL
);

CREATE OR REPLACE VIEW grype_repo_vulnerabilities AS
SELECT DISTINCT
    grype_repo_scans.repo_id,
    m.value-> 'vulnerability' ->> 'id'AS id,
    m.value-> 'vulnerability' ->> 'severity' AS severity,
    m.value-> 'vulnerability' ->> 'description' AS description,
    m.value-> 'artifact' ->> 'version' AS version,
    m.value-> 'artifact' ->> 'type' AS type,
    m.value-> 'artifact' ->> 'language' AS language,
    l.value->> 'path' AS path
FROM grype_repo_scans, jsonb_array_elements(results-> 'matches') AS m, jsonb_array_elements(m.value-> 'artifact' -> 'locations') AS L;


COMMENT ON VIEW grype_repo_vulnerabilities IS 'view of Grype repo scans results';
COMMENT ON COLUMN grype_repo_vulnerabilities.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN grype_repo_vulnerabilities.id IS 'id of the current vulnerability';
COMMENT ON COLUMN grype_repo_vulnerabilities.severity IS 'level of severity';
COMMENT ON COLUMN grype_repo_vulnerabilities.description IS 'description  of vulnerability';
COMMENT ON COLUMN grype_repo_vulnerabilities.version IS 'current version of package vulnerable';
COMMENT ON COLUMN grype_repo_vulnerabilities.type IS 'type of vulnerability';
COMMENT ON COLUMN grype_repo_vulnerabilities.language IS 'programming language associated to vulnerability';
COMMENT ON COLUMN grype_repo_vulnerabilities.path IS 'path to file of current vulnerability';

COMMIT;
