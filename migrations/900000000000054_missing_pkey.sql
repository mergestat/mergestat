BEGIN;

ALTER TABLE mergestat.container_sync_executions
ADD PRIMARY KEY(sync_id, job_id);

COMMIT;
