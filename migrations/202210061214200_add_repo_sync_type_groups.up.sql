BEGIN;

CREATE TABLE IF NOT EXISTS mergestat.repo_sync_type_groups
(
    "group" TEXT,
    concurrent_syncs INTEGER
);

INSERT INTO mergestat.repo_sync_type_groups ("group", concurrent_syncs)
VALUES
('DEFAULT', 10000),
('GITHUB', 1)
ON CONFLICT DO NOTHING;

ALTER TABLE mergestat.repo_sync_types
ADD COLUMN IF NOT EXISTS type_group TEXT;

UPDATE
mergestat.repo_sync_types
SET
    type_group =(
        CASE
            WHEN TYPE = 'GITHUB_REPO_METADATA'
                THEN 'GITHUB'
            WHEN TYPE = 'GIT_COMMITS'
                THEN 'DEFAULT'
            WHEN TYPE = 'GIT_COMMIT_STATS'
                THEN 'DEFAULT'
            WHEN TYPE = 'GIT_FILES'
                THEN 'DEFAULT'
            WHEN TYPE = 'GIT_REFS'
                THEN 'DEFAULT'
            WHEN TYPE = 'GIT_REFS'
                THEN 'DEFAULT'
            WHEN TYPE = 'GIT_BLAME'
                THEN 'DEFAULT'
            WHEN TYPE = 'TRIVY_REPO_SCAN'
                THEN 'DEFAULT'
            WHEN TYPE = 'SYFT_REPO_SCAN'
                THEN 'DEFAULT'
            WHEN TYPE = 'GITHUB_REPO_STARS'
                THEN 'GITHUB'
            WHEN TYPE = 'GITHUB_REPO_ISSUES'
                THEN 'GITHUB'
            WHEN TYPE = 'GITHUB_REPO_PRS'
                THEN 'GITHUB'
            WHEN TYPE = 'GITHUB_PR_COMMITS'
                THEN 'GITHUB'
            WHEN TYPE = 'GITHUB_PR_REVIEWS'
                THEN 'GITHUB'
        END );

COMMIT;
