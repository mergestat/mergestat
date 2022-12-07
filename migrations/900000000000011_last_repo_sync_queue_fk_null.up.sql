BEGIN;

ALTER TABLE "mergestat"."repo_syncs"
ADD CONSTRAINT "last_completed_repo_sync_queue_id_fk"
FOREIGN KEY ("last_completed_repo_sync_queue_id")
REFERENCES "mergestat"."repo_sync_queue"("id");

COMMIT;
