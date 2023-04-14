BEGIN;

-- add unique constraint to container_sync_schedules
-- for now, since schedules are *very* simple (binary on/off), we can just use the sync_id as the unique key
-- this preventing duplicate schedules for the same sync.
-- in the future, it's likely we'll want to support cron schedules and *multiple* schedules per sync, so this will need to be revisited.
ALTER TABLE mergestat.container_sync_schedules
ADD CONSTRAINT unique_container_sync_schedule UNIQUE (sync_id);

CREATE OR REPLACE FUNCTION mergestat.container_sync_now(container_sync_id UUID)
RETURNS BOOLEAN
LANGUAGE PLPGSQL VOLATILE
AS $$
DECLARE 
    queue_name TEXT;
    queue_concurrency INTEGER;
    job_id UUID;
BEGIN
    --Get the queue name
    SELECT DISTINCT (ci.queue || '-' || r.provider)
    INTO queue_name
    FROM mergestat.container_syncs cs
    INNER JOIN mergestat.container_images ci ON ci.id = cs.image_id
    INNER JOIN public.repos r ON r.id = cs.repo_id
    WHERE cs.id = container_sync_id;
    
    --Get the queue concurrency
    SELECT DISTINCT CASE WHEN ci.queue = 'github' THEN 1 ELSE NULL END
    INTO queue_concurrency
    FROM mergestat.container_syncs cs
    INNER JOIN mergestat.container_images ci ON ci.id = cs.image_id
    INNER JOIN public.repos r ON r.id = cs.repo_id
    WHERE cs.id = container_sync_id;
    
    --Add the queue if missing
    INSERT INTO sqlq.queues (name, concurrency) VALUES (queue_name, queue_concurrency) ON CONFLICT (name) DO UPDATE SET concurrency = excluded.concurrency;
    
    --Add the job
    INSERT INTO sqlq.jobs (queue, typename, parameters, priority) VALUES (queue_name, 'container/sync', jsonb_build_object('ID', container_sync_id), 0) RETURNING id INTO job_id;
    
    --Add the container sync execution
    INSERT INTO mergestat.container_sync_executions (sync_id, job_id) VALUES (container_sync_id, job_id);
    
    RETURN TRUE;
    
END; $$;

COMMIT;
