BEGIN;

ALTER TABLE mergestat.repo_sync_types
ADD COLUMN priority INTEGER DEFAULT 0 NOT NULL;

ALTER TABLE mergestat.repo_syncs
ADD COLUMN priority INTEGER DEFAULT 0 NOT NULL;


UPDATE
mergestat.repo_sync_types
SET
    priority =(
        CASE
            WHEN TYPE = 'GITHUB_REPO_METADATA'
                THEN 1
            WHEN TYPE = 'GIT_COMMITS'
                THEN 2
            WHEN TYPE = 'GIT_COMMIT_STATS'
                THEN 2
            WHEN TYPE = 'GIT_FILES'
                THEN 2
            WHEN TYPE = 'GIT_REFS'
                THEN 2
            WHEN TYPE = 'GIT_REFS'
                THEN 2
            WHEN TYPE = 'GIT_BLAME'
                THEN 3
            WHEN TYPE = 'TRIVY_REPO_SCAN'
                THEN 3
            WHEN TYPE = 'SYFT_REPO_SCAN'
                THEN 3
            WHEN TYPE = 'GITHUB_REPO_STARS'
                THEN 4
            WHEN TYPE = 'GITHUB_REPO_ISSUES'
                THEN 4
            WHEN TYPE = 'GITHUB_REPO_PRS'
                THEN 5
            WHEN TYPE = 'GITHUB_PR_COMMITS'
                THEN 5
            WHEN TYPE = 'GITHUB_PR_REVIEWS'
                THEN 5
        END );

UPDATE mergestat.repo_syncs SET priority = mergestat.repo_sync_types.priority
FROM mergestat.repo_sync_types
WHERE mergestat.repo_syncs.sync_type = mergestat.repo_sync_types.type;

ALTER TABLE mergestat.repo_syncs
ALTER COLUMN schedule_enabled
SET DEFAULT FALSE;

COMMIT;
