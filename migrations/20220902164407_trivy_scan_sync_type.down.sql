BEGIN;

DROP VIEW trivy_repo_vulnerabilities;

DROP TABLE trivy_repo_scans;

-- NOTE: this does not remove the `TRIVY_REPO_SCAN` sync type nor any trivy repo scan syncs in the history
-- DELETE FROM mergestat.repo_sync_types WHERE type = 'TRIVY_REPO_SCAN';

COMMIT;
