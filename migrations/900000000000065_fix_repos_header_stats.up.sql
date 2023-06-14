BEGIN;

--https://www.graphile.org/postgraphile/custom-queries/
CREATE OR REPLACE FUNCTION mergestat.get_repos_page_header_stats()
RETURNS JSONB
LANGUAGE PLPGSQL STABLE
AS $$
DECLARE
   response JSONB;
BEGIN
    WITH last_completed_syncs AS(
        SELECT DISTINCT ON (cs.id) 
            cs.id AS sync_id,
            j.id AS job_id,
            j.status,
            j.completed_at, 
            (SELECT COUNT(1) FROM sqlq.job_logs WHERE sqlq.job_logs.job = j.id AND level = 'error') error_count
        FROM mergestat.container_sync_schedules css 
        INNER JOIN mergestat.container_syncs cs ON css.sync_id = cs.id
        INNER JOIN mergestat.container_sync_executions cse ON cs.id = cse.sync_id
        INNER JOIN sqlq.jobs j ON cse.job_id = j.id
        WHERE j.status NOT IN ('pending','running')
        ORDER BY cs.id, j.created_at DESC
    )
    SELECT 
        (ROW_TO_JSON(t)::JSONB)
    INTO response
    FROM (
        SELECT
            (SELECT COUNT(1) FROM public.repos) AS repo_count,
            (SELECT COUNT(1) FROM mergestat.container_sync_schedules) AS repo_sync_count,
            (SELECT COUNT(1) FROM last_completed_syncs WHERE error_count > 0 OR status = 'errored') AS syncs_with_error_count
    )t;

    RETURN response;
END; $$;

COMMIT;
