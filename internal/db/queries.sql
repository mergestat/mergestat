-- name: GetRepoImportByID :one
SELECT * FROM mergestat.repo_imports
WHERE id = $1 LIMIT 1;

-- name: ListRepoImportsDueForImport :many
WITH dequeued AS (
    UPDATE mergestat.repo_imports SET last_import_started_at = now()
    WHERE id IN (
        SELECT id FROM mergestat.repo_imports AS t
        WHERE
            (now() - t.last_import > t.import_interval OR t.last_import IS NULL)
            AND
            (now() - t.last_import_started_at > t.import_interval OR t.last_import_started_at IS NULL)
        ORDER BY last_import ASC
        FOR UPDATE SKIP LOCKED
    ) RETURNING *
)
SELECT id, created_at, updated_at, type, settings FROM dequeued;
;

-- name: UpsertRepo :exec
INSERT INTO public.repos (repo, is_github, repo_import_id) VALUES($1, $2, $3)
ON CONFLICT (repo, (ref IS NULL)) WHERE ref IS NULL
DO UPDATE SET tags = (
    SELECT COALESCE(jsonb_agg(DISTINCT x), jsonb_build_array()) FROM jsonb_array_elements(repos.tags || $4) x LIMIT 1
);

-- name: MarkRepoImportAsUpdated :exec
UPDATE mergestat.repo_imports SET last_import = now() WHERE id = $1;

-- name: DequeueSyncJob :one
WITH
running AS (
        SELECT 
            rsq.id,
            rstg.group
        FROM mergestat.repo_sync_queue rsq
        INNER JOIN mergestat.repo_sync_type_groups rstg ON rsq.type_group = rstg.group
        WHERE status = 'RUNNING'
),
dequeued AS (
   UPDATE mergestat.repo_sync_queue SET status = 'RUNNING'
   WHERE id IN (   
        SELECT rsq.id
        FROM mergestat.repo_sync_queue rsq
        INNER JOIN mergestat.repo_sync_type_groups rstg ON rsq.type_group = rstg.group
        WHERE status = 'QUEUED'
        AND rstg.concurrent_syncs > (SELECT COUNT(*) from running where running.group = rstg.group)
        ORDER BY rsq.priority ASC, rsq.created_at ASC, rsq.id ASC LIMIT 1 FOR UPDATE SKIP LOCKED
   ) RETURNING id, created_at, status, repo_sync_id
)
SELECT
    dequeued.*,
    repo_syncs.*,
    repos.repo,
    repos.ref,
    repos.is_github,
    repos.settings AS repo_settings
FROM dequeued
JOIN mergestat.repo_syncs ON mergestat.repo_syncs.id = dequeued.repo_sync_id
JOIN repos ON repos.id = mergestat.repo_syncs.repo_id
;

-- name: DeleteGitHubRepoInfo :exec
DELETE FROM public.github_repo_info WHERE repo_id = $1;

-- name: InsertGitHubRepoInfo :exec
INSERT INTO public.github_repo_info (
    repo_id, owner, name,
    created_at, default_branch_name, description, disk_usage, fork_count, homepage_url,
    is_archived, is_disabled, is_mirror, is_private, total_issues_count, latest_release_author,
    latest_release_created_at, latest_release_name, latest_release_published_at, license_key,
    license_name, license_nickname, open_graph_image_url, primary_language, pushed_at, releases_count,
    stargazers_count, updated_at, watchers_count
) VALUES(
    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22,
    $23, $24, $25, $26, $27, $28
);

-- name: InsertSyncJobLog :exec
INSERT INTO mergestat.repo_sync_logs (log_type, message, repo_sync_queue_id) VALUES ($1, $2, $3);

-- name: SetSyncJobStatus :exec
UPDATE mergestat.repo_sync_queue SET status = $1 
WHERE id = (SELECT id FROM mergestat.repo_sync_queue WHERE repo_sync_queue.id = $2 LIMIT 1);

-- We use a CTE here to retrieve all the repo_sync_jobs that were previously enqueued, to make sure that we *do not* re-enqueue anything new until the previously enqueued jobs are *completed*.
-- This allows us to make sure all repo syncs complete before we reschedule a new batch.
-- We have now also added a concept of type groups which allows us to apply this same logic but by each group type which is where the PARTITION BY clause comes into play
-- name: EnqueueAllSyncs :exec
WITH ranked_queue AS (
    SELECT
       rsq.done_at,
       rst.type_group,
       rsq.created_at,
       DENSE_RANK() OVER(PARTITION BY rst.type_group ORDER BY rst.type_group, rsq.created_at DESC) AS rank_num
    FROM mergestat.repo_syncs as rs
    INNER JOIN mergestat.repo_sync_queue AS rsq ON rs.id = rsq.repo_sync_id
    INNER JOIN mergestat.repo_sync_types AS rst ON rs.sync_type = rst.type
    WHERE rsq.done_at IS NULL
)
INSERT INTO mergestat.repo_sync_queue (repo_sync_id, status, priority, type_group)
SELECT
    rs.id,
    'QUEUED' AS status,
	rs.priority,
    rst.type_group
FROM mergestat.repo_syncs rs
INNER JOIN mergestat.repo_sync_types AS rst ON rs.sync_type = rst.type
WHERE schedule_enabled
    AND id NOT IN (SELECT repo_sync_id FROM mergestat.repo_sync_queue WHERE status = 'RUNNING' OR status = 'QUEUED')
    AND NOT EXISTS (
        SELECT rq.done_at
        FROM ranked_queue rq
        WHERE
            rq.rank_num >= 1
	AND rq.type_group = rst.type_group
    )
ORDER BY rs.priority, rs.sync_type desc
;

-- name: SetLatestKeepAliveForJob :exec
UPDATE mergestat.repo_sync_queue SET last_keep_alive = now() WHERE id = $1;

-- name: MarkSyncsAsTimedOut :many
WITH timed_out_sync_jobs AS (
    UPDATE mergestat.repo_sync_queue SET status = 'DONE' WHERE status = 'RUNNING' AND (
        (last_keep_alive < now() - '10 minutes'::interval)
        OR
        (last_keep_alive IS NULL AND started_at < now() - '10 minutes'::interval)) -- if worker crashed before last_keep_alive was first set
    RETURNING *
)
INSERT INTO mergestat.repo_sync_logs (repo_sync_queue_id, log_type, message)
SELECT id, 'ERROR', 'No response from job within reasonable interval. Timing out.' FROM timed_out_sync_jobs
RETURNING repo_sync_queue_id
;

-- name: DeleteRemovedRepos :exec 
DELETE FROM public.repos WHERE repo_import_id = $1::uuid AND NOT(repo = ANY($2::TEXT[]))
;

-- name: CleanOldRepoSyncQueue :exec
SELECT mergestat.simple_repo_sync_queue_cleanup($1::INTEGER);

-- name: GetRepoIDsFromRepoImport :many
SELECT id FROM public.repos WHERE repo_import_id = @importID::uuid AND repo = ANY(@reposUrls::TEXT[])
;

-- name: GetRepoUrlFromImport :many
SELECT repo FROM public.repos WHERE repo_import_id = @importID::uuid
;

-- name: InsertNewDefaultSync :exec
INSERT INTO mergestat.repo_syncs (repo_id, sync_type, priority, schedule_enabled)
SELECT @repoID::uuid, type, priority, true
FROM mergestat.repo_sync_types
WHERE type = @syncType::text
ON CONFLICT DO NOTHING;
