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

COMMIT;

COMMIT;
