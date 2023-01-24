BEGIN;

--Having to drop the view because the replace fails because we are chainging the datatype from jsonb to text
DROP VIEW IF EXISTS gosec_repo_detections;

CREATE OR REPLACE VIEW gosec_repo_detections AS
SELECT
    gosec_repo_scans.repo_id,
    (issue.value ->> 'severity'::TEXT) AS severity,
    (issue.value ->> 'confidence'::TEXT) AS confidence,
    ((issue.value -> 'cwe'::TEXT) ->> 'id'::TEXT) AS cwe_id,
    (issue.value ->> 'rule_id'::TEXT) AS rule_id,
    (issue.value ->> 'details'::TEXT) AS details,
    (issue.value ->> 'file'::TEXT) AS file,
    (issue.value ->> 'line'::TEXT) AS line,
    (issue.value ->> 'column'::TEXT) AS "column",
    (issue.value ->> 'nosec'::TEXT) AS nosec
FROM
    gosec_repo_scans,
    LATERAL jsonb_array_elements(gosec_repo_scans.issues) issue(value);

-- noqa: disable=L003
COMMENT ON VIEW gosec_repo_detections IS 'view of gosec repo scan detections';
COMMENT ON COLUMN gosec_repo_detections.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN gosec_repo_detections.severity IS 'detection severity';
COMMENT ON COLUMN gosec_repo_detections.confidence IS 'detection confidence';
COMMENT ON COLUMN gosec_repo_detections.cwe_id IS 'detection CWE (Common Weakness Enumeration) ID';
COMMENT ON COLUMN gosec_repo_detections.rule_id IS 'detection rule ID';
COMMENT ON COLUMN gosec_repo_detections.details IS 'detection details';
COMMENT ON COLUMN gosec_repo_detections.file IS 'detection file';
COMMENT ON COLUMN gosec_repo_detections.line IS 'detection line in file';
COMMENT ON COLUMN gosec_repo_detections."column" IS 'detection column in line';
COMMENT ON COLUMN gosec_repo_detections.nosec IS 'flag to determine if #nosec annotation was used';

COMMIT;
-- noqa: enable=L003
