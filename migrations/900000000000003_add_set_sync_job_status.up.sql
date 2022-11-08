BEGIN;

ALTER TABLE mergestat.repo_syncs
ADD COLUMN IF NOT EXISTS last_completed_repo_sync_queue_id BIGINT;

--prime the new column
WITH
ranked_completed_syncs AS (
    SELECT
        mergestat.repo_sync_queue.id,
        mergestat.repo_sync_queue.repo_sync_id,
        mergestat.repo_sync_queue.done_at,
        RANK() OVER(PARTITION BY mergestat.repo_sync_queue.repo_sync_id ORDER BY mergestat.repo_sync_queue.done_at DESC) AS rank_num
    FROM
        mergestat.repo_sync_queue
    WHERE
        mergestat.repo_sync_queue.repo_sync_id NOT IN (
            SELECT repo_sync_id
            FROM
                mergestat.repo_sync_queue
            WHERE
                status = 'QUEUED'
                OR status = 'RUNNING')
)
UPDATE mergestat.repo_syncs
SET last_completed_repo_sync_queue_id = rcs.id
FROM ranked_completed_syncs AS rcs
WHERE rcs.rank_num = 1
    AND rcs.repo_sync_id = mergestat.repo_syncs.id;

CREATE OR REPLACE FUNCTION mergestat.set_sync_job_status(new_status TEXT, repo_sync_queue_id BIGINT)
RETURNS UUID
AS
$$
DECLARE _repo_sync_id UUID;
begin
    IF new_status = 'DONE' THEN
            WITH update_queue AS (
                UPDATE mergestat.repo_sync_queue SET "status" = new_status where mergestat.repo_sync_queue.id = repo_sync_queue_id
                RETURNING *
            )
            UPDATE mergestat.repo_syncs set last_completed_repo_sync_queue_id = repo_sync_queue_id
            FROM update_queue
            WHERE mergestat.repo_syncs.id = update_queue.repo_sync_id
            RETURNING mergestat.repo_syncs.id INTO _repo_sync_id;
    ELSE    
            UPDATE mergestat.repo_sync_queue SET "status" = new_status where mergestat.repo_sync_queue.id = repo_sync_queue_id
            RETURNING repo_sync_id INTO _repo_sync_id;
    END IF;
    
    RETURN _repo_sync_id;    
end;
$$ LANGUAGE plpgsql;

COMMIT;
