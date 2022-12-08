BEGIN;

--Cleanup any orphaned id's
UPDATE mergestat.repo_syncs
SET last_completed_repo_sync_queue_id = NULL
WHERE last_completed_repo_sync_queue_id NOT IN (SELECT id FROM mergestat.repo_sync_queue);

ALTER TABLE mergestat.repo_syncs
DROP CONSTRAINT IF EXISTS last_completed_repo_sync_queue_id_fk;

ALTER TABLE mergestat.repo_syncs
ADD CONSTRAINT last_completed_repo_sync_queue_id_fk
FOREIGN KEY (last_completed_repo_sync_queue_id)
REFERENCES mergestat.repo_sync_queue(id) ON DELETE SET NULL;

COMMIT;
