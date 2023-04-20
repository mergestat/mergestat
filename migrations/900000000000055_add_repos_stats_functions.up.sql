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
            (SELECT COUNT(1) FROM last_completed_syncs WHERE error_count > 0) AS syncs_with_error_count
    )t;

    RETURN response;
END; $$;

--https://www.graphile.org/postgraphile/computed-columns/
CREATE OR REPLACE FUNCTION public.repos_stats(repos REPOS)
RETURNS JSONB
LANGUAGE PLPGSQL STABLE
AS $$
DECLARE
   response JSONB;
BEGIN
    WITH last_completed_syncs AS(
        SELECT DISTINCT ON (cs.id) 
            cs.id AS container_sync_id,
            ci.name AS container_image_name,
            j.id AS job_id,
            j.status,
            j.completed_at AS sync_last_completed_at,
            (SELECT COUNT(1) FROM sqlq.job_logs WHERE sqlq.job_logs.job = j.id AND level = 'warn') warning_count,
            (SELECT COUNT(1) FROM sqlq.job_logs WHERE sqlq.job_logs.job = j.id AND level = 'error') error_count
        FROM mergestat.container_syncs cs
        INNER JOIN mergestat.container_sync_executions cse ON cs.id = cse.sync_id
        INNER JOIN mergestat.container_images ci ON cs.image_id = ci.id
        INNER JOIN sqlq.jobs j ON cse.job_id = j.id
        WHERE cs.repo_id = repos.id AND j.status NOT IN ('pending','running')
        ORDER BY cs.id, j.created_at DESC
    ),
    current_syncs AS(
        SELECT DISTINCT ON (cs.id)
            cs.id AS container_sync_id,
            ci.name AS container_image_name,
            j.id AS job_id,
            j.status,
            j.completed_at AS sync_last_completed_at
        FROM mergestat.container_syncs cs
        INNER JOIN mergestat.container_sync_executions cse ON cs.id = cse.sync_id
        INNER JOIN mergestat.container_images ci ON cs.image_id = ci.id
        INNER JOIN sqlq.jobs j ON cse.job_id = j.id AND j.status IN ('pending','running')
        WHERE cs.repo_id = repos.id
        ORDER BY cs.id, j.created_at DESC
    ),
    scheduled_syncs AS(
        SELECT COUNT(DISTINCT css.id) as sync_count
        FROM mergestat.container_sync_schedules css 
        INNER JOIN mergestat.container_syncs cs ON css.sync_id = cs.id
        WHERE cs.repo_id = repos.id
    )
    SELECT 
        (ROW_TO_JSON(t)::JSONB)
    INTO response
    FROM (
        SELECT
            (SELECT sync_count from scheduled_syncs) AS sync_count,
            (SELECT MAX(sync_last_completed_at) FROM last_completed_syncs) AS last_sync_time,
            (SELECT COUNT(1) FROM current_syncs WHERE status = 'running') AS running,
            (SELECT COUNT(1) FROM current_syncs WHERE status = 'pending') AS pending,
            (SELECT COUNT(1) FROM last_completed_syncs WHERE status = 'errored' OR error_count > 0) AS error,
            (SELECT COUNT(1) FROM last_completed_syncs WHERE status = 'success' AND error_count = 0 AND warning_count = 0) AS success,
            (SELECT COUNT(1) FROM last_completed_syncs WHERE warning_count > 0 AND status = 'success' AND error_count = 0) AS warning
    )t;

    RETURN response;
END; $$;

----https://www.graphile.org/postgraphile/custom-queries/
CREATE OR REPLACE FUNCTION mergestat.get_repos_syncs_by_status(repo_id_param UUID, status_param TEXT)
RETURNS JSONB
LANGUAGE PLPGSQL STABLE
AS $$
DECLARE
   response JSONB;
BEGIN
    WITH last_completed_syncs AS(
        SELECT DISTINCT ON (cs.id) 
            cs.id AS container_sync_id,
            ci.name AS container_image_name,
            j.id AS job_id,
            j.status,
            j.completed_at AS sync_last_completed_at,
            (SELECT COUNT(1) FROM sqlq.job_logs WHERE sqlq.job_logs.job = j.id AND level = 'warn') warning_count,
            (SELECT COUNT(1) FROM sqlq.job_logs WHERE sqlq.job_logs.job = j.id AND level = 'error') error_count
        FROM mergestat.container_syncs cs
        LEFT JOIN mergestat.container_sync_schedules css ON css.sync_id = cs.id
        INNER JOIN mergestat.container_sync_executions cse ON cs.id = cse.sync_id
        INNER JOIN mergestat.container_images ci ON cs.image_id = ci.id
        INNER JOIN sqlq.jobs j ON cse.job_id = j.id
        WHERE cs.repo_id = repo_id_param AND j.status NOT IN ('pending','running')
        ORDER BY cs.id, j.created_at DESC
    ),
    current_syncs AS(
        SELECT DISTINCT ON (cs.id)
            cs.id AS container_sync_id,
            ci.name AS container_image_name,
            j.id AS job_id,
            j.status,
            j.completed_at AS sync_last_completed_at
        FROM mergestat.container_sync_schedules css 
        INNER JOIN mergestat.container_syncs cs ON css.sync_id = cs.id
        LEFT JOIN mergestat.container_sync_executions cse ON cs.id = cse.sync_id
        LEFT JOIN mergestat.container_images ci ON cs.image_id = ci.id
        LEFT JOIN sqlq.jobs j ON cse.job_id = j.id
        WHERE cs.repo_id = repo_id_param AND j.status IN ('pending','running')
        ORDER BY cs.id, j.created_at DESC
    ),
    selected_sync AS(
        SELECT container_sync_id, job_id, container_image_name, sync_last_completed_at, 'running' AS selection FROM current_syncs WHERE status = 'running'
        UNION
        SELECT container_sync_id, job_id, container_image_name, sync_last_completed_at, 'pending' AS selection FROM current_syncs WHERE status = 'pending'
        UNION
        SELECT container_sync_id, job_id, container_image_name, sync_last_completed_at, 'success' AS selection FROM last_completed_syncs WHERE status = 'success'
        UNION
        SELECT container_sync_id, job_id, container_image_name, sync_last_completed_at, 'warning' AS selection FROM last_completed_syncs WHERE warning_count > 0
        UNION
        SELECT container_sync_id, job_id, container_image_name, sync_last_completed_at, 'errored' AS selection FROM last_completed_syncs WHERE status = 'errored' OR error_count > 0
    )
    SELECT 
        JSONB_OBJECT_AGG(job_id, TO_JSONB(t) - 'job_id')
    INTO response
    FROM (
        SELECT container_sync_id, job_id, container_image_name, sync_last_completed_at FROM selected_sync WHERE selection = status_param
    )t;

    RETURN response;
END; $$;

--https://www.graphile.org/postgraphile/computed-columns/
CREATE OR REPLACE FUNCTION mergestat.container_syncs_latest_sync_runs(container_syncs mergestat.CONTAINER_SYNCS)
RETURNS JSONB
LANGUAGE PLPGSQL STABLE
AS $$
DECLARE
   response JSONB;
BEGIN
    WITH last_completed_syncs AS(
        SELECT
            cs.id AS container_sync_id,
            ci.name AS container_image_name,
            j.id AS job_id,
            j.status,
            j.created_at,
            j.started_at,
            j.completed_at,
            (SELECT COUNT(1) FROM sqlq.job_logs WHERE sqlq.job_logs.job = j.id AND level = 'warn') warning_count,
            (SELECT COUNT(1) FROM sqlq.job_logs WHERE sqlq.job_logs.job = j.id AND level = 'error') error_count
        FROM mergestat.container_syncs cs
        INNER JOIN mergestat.container_sync_executions cse ON cs.id = cse.sync_id
        INNER JOIN mergestat.container_images ci ON cs.image_id = ci.id
        INNER JOIN sqlq.jobs j ON cse.job_id = j.id
        WHERE cs.id = container_syncs.id
        ORDER BY cs.id, j.created_at DESC
        LIMIT 15
    )
    SELECT 
        JSONB_OBJECT_AGG(job_id, TO_JSONB(t) - 'job_id')
    INTO response
    FROM (
        SELECT job_id, created_at, started_at, completed_at, ((EXTRACT('epoch' FROM completed_at)-EXTRACT('epoch' FROM started_at))*1000)::INTEGER AS duration_ms, status FROM last_completed_syncs    
    )t;

    RETURN response;
END; $$;

COMMIT;
