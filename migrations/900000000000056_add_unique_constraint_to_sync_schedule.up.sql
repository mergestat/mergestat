BEGIN;

-- add unique constraint to container_sync_schedules
-- for now, since schedules are *very* simple (binary on/off), we can just use the sync_id as the unique key
-- this preventing duplicate schedules for the same sync.
-- in the future, it's likely we'll want to support cron schedules and *multiple* schedules per sync, so this will need to be revisited.
ALTER TABLE mergestat.container_sync_schedules
ADD CONSTRAINT unique_container_sync_schedule UNIQUE (sync_id);

COMMIT;
