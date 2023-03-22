-- SQL migration to add ON DELETE CASCADE to foreign key constraint
BEGIN;

ALTER TABLE "mergestat"."container_sync_schedules"
DROP CONSTRAINT "fk_schedule_sync",
ADD CONSTRAINT "fk_schedule_sync" FOREIGN KEY ("sync_id") REFERENCES "mergestat"."container_syncs"("id") ON DELETE CASCADE;

ALTER TABLE "mergestat"."container_sync_executions"
DROP CONSTRAINT "fk_execution_sync",
DROP CONSTRAINT "fk_execution_job",
ADD CONSTRAINT "fk_execution_sync" FOREIGN KEY ("sync_id") REFERENCES "mergestat"."container_syncs"("id") ON DELETE CASCADE,
ADD CONSTRAINT "fk_execution_job" FOREIGN KEY ("job_id") REFERENCES "sqlq"."jobs"("id") ON DELETE CASCADE;

COMMIT;
