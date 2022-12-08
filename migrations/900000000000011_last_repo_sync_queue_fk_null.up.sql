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

-- update trigger to reset migration to not dirty to allow re-run of migration without intervention
CREATE OR REPLACE FUNCTION track_applied_migration()
RETURNS trigger AS $$
DECLARE _current_version BIGINT;
BEGIN
    SELECT COALESCE(MAX(version),0) FROM public.schema_migrations_history INTO _current_version;
    IF new.dirty = false AND new.version > _current_version THEN
        INSERT INTO public.schema_migrations_history(version) VALUES (new.version);
    ELSE
        UPDATE public.schema_migrations SET version = (SELECT MAX(version) FROM public.schema_migrations_history), dirty = false;
    END IF;
    RETURN NEW;
END;
$$ language 'plpgsql';

COMMIT;
