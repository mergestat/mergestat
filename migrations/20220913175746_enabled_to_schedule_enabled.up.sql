BEGIN;

ALTER TABLE mergestat.repo_syncs
RENAME COLUMN enabled TO schedule_enabled;

COMMIT;

