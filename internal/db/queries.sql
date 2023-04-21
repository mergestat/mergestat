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
SELECT dq.id, dq.created_at, dq.updated_at, dq.settings, dq.provider, pr.settings AS provider_settings, vd.name AS vendor_name
FROM dequeued dq
    INNER JOIN mergestat.providers pr ON pr.id = dq.provider
    INNER JOIN mergestat.vendors vd ON vd.name = pr.vendor;

-- name: UpdateImportStatus :exec
UPDATE mergestat.repo_imports SET import_status = @status::TEXT, import_error = @error::TEXT WHERE id = @ID;

-- name: CheckRunningImps :one
SELECT COUNT(*) FROM mergestat.repo_imports WHERE import_status = 'RUNNING';

-- name: UpsertRepo :exec
INSERT INTO public.repos (repo, repo_import_id, provider, tags) VALUES($1, $2, $3, $4)
ON CONFLICT (repo, (ref IS NULL)) WHERE ref IS NULL
DO UPDATE SET tags = (
  SELECT COALESCE(jsonb_agg(DISTINCT x), jsonb_build_array()) FROM jsonb_array_elements(repos.tags || $4) x LIMIT 1);

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
        AND rstg.concurrent_syncs > (SELECT COUNT(*) FROM running WHERE running.group = rstg.group)
        ORDER BY rsq.priority ASC, rsq.created_at ASC, rsq.id ASC LIMIT 1 FOR UPDATE SKIP LOCKED
   ) RETURNING id, created_at, status, repo_sync_id
)
SELECT
    dequeued.*,
    repo_syncs.*,
    repos.repo,
    repos.ref,
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
    created_at, default_branch_name, description, size, fork_count, homepage_url,
    is_archived, is_disabled, mirror_url, is_private, total_issues_count, latest_release_author,
    latest_release_created_at, latest_release_name, latest_release_published_at, license_key,
    license_name, primary_language, pushed_at, releases_count,
    stargazers_count, updated_at, watchers_count,advanced_security,secret_scanning,secret_scanning_push_protection
) VALUES(
    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22,
    $23, $24, $25, $26, $27, $28,$29
);

-- name: InsertSyncJobLog :exec
INSERT INTO mergestat.repo_sync_logs (log_type, message, repo_sync_queue_id) VALUES ($1, $2, $3);

-- name: SetSyncJobStatus :exec
SELECT mergestat.set_sync_job_status(@Status::TEXT, @ID::BIGINT);

-- name: FetchGitHubToken :one
SELECT pgp_sym_decrypt(credentials, $1) FROM mergestat.service_auth_credentials WHERE type = 'GITHUB_PAT' ORDER BY created_at DESC LIMIT 1;

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

-- name: CleanOldJobs :exec
SELECT mergestat.simple_sqlq_cleanup($1::INTEGER);

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

-- name: UpsertWorkflowsInPublic :exec
WITH t AS (
  INSERT INTO public.github_actions_workflows(
	repo_id, 
	id,
	workflow_node_id,
	name,
	path,
	state,
	created_at,
	updated_at,
	url,
	html_url,
	badge_url
	) 
  VALUES(
    @repoID::uuid,
	@id::BIGINT,
	@workflowNodeID,
	@name,
	@path,
	@state,
	@createdAt,
	@updatedAt,
	@url,
	@htmlUrl,
	@badgeUrl) 
  ON CONFLICT (id)
  DO UPDATE
  SET repo_id=EXCLUDED.repo_id,
      id=EXCLUDED.id,
      workflow_node_id=EXCLUDED.workflow_node_id,
      name=EXCLUDED.name,
      path=EXCLUDED.path,
      state=EXCLUDED.state,
      created_at=EXCLUDED.created_at,
      updated_at=EXCLUDED.updated_at,
      url=EXCLUDED.url,
      html_url=EXCLUDED.html_url,
      badge_url=EXCLUDED.badge_url
  RETURNING xmax::text
) 
SELECT
    COUNT(*) AS all_rows,
    SUM(CASE WHEN xmax::int = 0 THEN 1 ELSE 0 END) AS ins,
    SUM(CASE WHEN xmax::int > 0 THEN 1 ELSE 0 END) AS upd
FROM t;

-- name: UpsertWorkflowRuns :exec
WITH t AS(
	INSERT INTO public.github_actions_workflow_runs(
	repo_id,
	id,
	workflow_run_node_id,
	name,
	head_branch,
	run_number,
	run_attempt,
	event,
	status,
	conclusion,
	workflow_id,
	check_suite_id,
	check_suite_node_id,
	url,
	html_url,
	pull_requests,
	created_at,
	updated_at,
	run_started_at,
	jobs_url,
	logs_url,
	check_suite_url,
	artifacts_url,
	cancel_url,
	rerun_url,
	head_commit,
	workflow_url,
	repository_url,
	head_repository_url)
	VALUES(
 	@repo_id::UUID,
	@id,
	@workflowRunNodeId,
    @name,
	@headBranch,
	@runNumber,
	@runAttempt,
	@event,
	@status,
	@conclusion,
	@workflowId,
	@checkSuiteId,
	@checkSuiteNodeId,
	@url,
	@htmlUrl,
	@pullRequest::JSONB,
	@createdAt,
	@updatedAt,
	@runStartedAt,
	@jobsUrl,
	@logsUrl,
	@checkSuiteUrl,
	@artifactsUrl,
	@cancelUrl,
	@rerunUrl,
	@headCommit::JSONB,
	@workflowUrl,
	@repositoryUrl,
	@headRepositoryUrl)
	ON CONFLICT (id)
    DO UPDATE
    SET repo_id=EXCLUDED.repo_id,
        id=EXCLUDED.id,
		workflow_run_node_id=EXCLUDED.workflow_run_node_id,
		name=EXCLUDED.name,
		head_branch=EXCLUDED.head_branch,
		run_number=EXCLUDED.run_number,
		run_attempt=EXCLUDED.run_attempt,
		event=EXCLUDED.event,
		status=EXCLUDED.status,
		conclusion=EXCLUDED.conclusion,
		workflow_id=EXCLUDED.workflow_id,
		check_suite_id=EXCLUDED.check_suite_id,
		check_suite_node_id=EXCLUDED.check_suite_node_id,
		url=EXCLUDED.url,
		html_url=EXCLUDED.html_url,
		pull_requests=EXCLUDED.pull_requests,
		created_at=EXCLUDED.created_at,
		updated_at=EXCLUDED.updated_at,
		run_started_at=EXCLUDED.run_started_at,
		jobs_url=EXCLUDED.jobs_url,
		logs_url=EXCLUDED.logs_url,
		check_suite_url=EXCLUDED.check_suite_url,
		artifacts_url=EXCLUDED.artifacts_url,
		cancel_url=EXCLUDED.cancel_url,
		rerun_url=EXCLUDED.rerun_url,
		head_commit=EXCLUDED.head_commit,
		workflow_url=EXCLUDED.workflow_url,
		repository_url=EXCLUDED.repository_url,
		head_repository_url=EXCLUDED.head_repository_url
  RETURNING xmax::text
)
SELECT
    COUNT(*) AS all_rows,
    SUM(CASE WHEN xmax::int = 0 THEN 1 ELSE 0 END) AS ins,
    SUM(CASE WHEN xmax::int > 0 THEN 1 ELSE 0 END) AS upd
FROM t;

-- name: UpsertWorkflowRunJobs :exec
WITH t AS (
	INSERT INTO public.github_actions_workflow_run_jobs (
		repo_id,
		id,
		run_id,
		log,
		run_url,
		job_node_id,
		head_sha,
		url,
		html_url,
		status,
		conclusion,
		started_at,
		completed_at,
		workflow_name,
		steps,
		check_run_url,
		labels,
		runner_id,
		runner_name,
		runner_group_id,
		runner_group_name
	)
	VALUES(
		@repoid::uuid,
		@id::BIGINT,
		@runid,
		@log,
		@runurl,
		@jobnodeid,
		@headsha,
		@url,
		@htmlurl,
		@status,
		@conclusion,
		@startedat,
		@completedAt,
		@workflowname,
		@steps::JSONB,
		@checkrunurl,
		@labels::JSONB,
		@runnerid,
		@runnername,
		@runnergroupid,
		@runnergroupname)
		ON CONFLICT (id)
		DO UPDATE 
		SET repo_id=EXCLUDED.repo_id,
		    id=EXCLUDED.id,
			run_id=EXCLUDED.run_id,
			log=EXCLUDED.log,
			run_url=EXCLUDED.run_url,
			job_node_id=EXCLUDED.job_node_id,
			head_sha=EXCLUDED.head_sha,
			url=EXCLUDED.url,
			html_url=EXCLUDED.html_url,
			status=EXCLUDED.status,
			conclusion=EXCLUDED.conclusion,
			started_at=EXCLUDED.started_at,
			completed_at=EXCLUDED.completed_at,
			workflow_name=EXCLUDED.workflow_name,
			steps=excluded.steps,
			check_run_url=EXCLUDED.check_run_url,
			labels=EXCLUDED.labels,
			runner_id=EXCLUDED.runner_id,
			runner_name=EXCLUDED.runner_name,
			runner_group_id=EXCLUDED.runner_group_id,
			runner_group_name=EXCLUDED.runner_group_name
		RETURNING xmax::text
)
SELECT
    COUNT(*) AS all_rows,
    SUM(CASE WHEN xmax::int = 0 THEN 1 ELSE 0 END) AS ins,
    SUM(CASE WHEN xmax::int > 0 THEN 1 ELSE 0 END) AS upd
FROM t;


-- name: GetRepoById :one
SELECT * FROM public.repos WHERE id = @id;

-- name: FetchContainerSync :one
SELECT sync.id, sync.repo_id,
    image.type AS image_type, image.url AS image_url, image.version AS image_version,
    jsonb_recursive_merge(image.parameters, sync.parameters) AS params
FROM mergestat.container_syncs sync, mergestat.container_images image, public.repos repo
    WHERE image.id = sync.image_id AND repo.id = sync.repo_id AND sync.id = @id;

-- name: FetchImportJob :one
SELECT dq.id, dq.created_at, dq.updated_at, dq.settings, dq.provider, pr.settings AS provider_settings, vd.name AS vendor_name
FROM mergestat.repo_imports AS dq
    INNER JOIN mergestat.providers pr ON pr.id = dq.provider
    INNER JOIN mergestat.vendors vd ON vd.name = pr.vendor
WHERE dq.id = @id;

-- name: EnableContainerSync :exec
SELECT mergestat.enable_container_sync(@RepoID::UUID, @ContainerImageID::UUID);
