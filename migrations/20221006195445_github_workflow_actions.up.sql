BEGIN;
INSERT INTO mergestat.repo_sync_types (type, description, short_name, priority)
VALUES ('GITHUB_ACTIONS', 'Retrieves all the actions of a GitHub Repo', 'GitHub Actions', 2)
ON CONFLICT DO NOTHING;

CREATE TABLE public.github_actions_workflows(
    repo_id UUID NOT NULL,
    id INTEGER UNIQUE NOT NULL,
    workflow_node_id TEXT,
    NAME TEXT,
    path TEXT,
    state TEXT,
    created_at TIMESTAMP(6) WITH TIME ZONE,
    updated_at TIMESTAMP(6) WITH TIME ZONE,
    url TEXT,
    html_url TEXT,
    badge_url TEXT,
    _mergestat_synced_at TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
    PRIMARY KEY (repo_id, id),
    CONSTRAINT github_workflows_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES "repos" ("id")
    ON DELETE CASCADE
    ON UPDATE RESTRICT);

COMMENT ON TABLE github_pull_requests IS 'GitHub Workflows';

CREATE TABLE public.github_actions_workflow_runs(
    repo_id UUID NOT NULL,
    id INTEGER UNIQUE NOT NULL,
    workflow_run_node_id TEXT,
    NAME TEXT,
    head_branch TEXT,
    run_number INTEGER,
    run_attempt INTEGER,
    event TEXT,
    status TEXT,
    conclusion TEXT,
    workflow_id INTEGER NOT NULL,
    check_suite_id INTEGER,
    check_suite_node_id TEXT,
    url TEXT,
    html_url TEXT,
    pull_requests JSONB,
    created_at TIMESTAMP(6) WITH TIME ZONE,
    updated_at TIMESTAMP(6) WITH TIME ZONE,
    run_started_at TIMESTAMP(6) WITH TIME ZONE,
    jobs_url TEXT,
    logs_url TEXT,
    check_suite_url TEXT,
    artifacts_url TEXT,
    cancel_url TEXT,
    rerun_url TEXT,
    head_commit JSONB,
    workflow_url TEXT,
    repository_url TEXT,
    head_repository_url TEXT,
    _mergestat_synced_at TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
    PRIMARY KEY (repo_id, id),
    CONSTRAINT github_workflow_runs_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES "repos" ("id")
    ON DELETE CASCADE
    ON UPDATE RESTRICT);

COMMENT ON TABLE github_pull_requests IS 'GitHub Workflow Runs';

CREATE TABLE public.github_actions_workflow_run_jobs(
    repo_id UUID NOT NULL,
    id INTEGER UNIQUE NOT NULL,
    run_id INTEGER NOT NULL,
    log TEXT,
    run_url TEXT,
    job_node_id TEXT,
    workflow_job_node_id TEXT,
    head_sha TEXT,
    url TEXT,
    html_url TEXT,
    status TEXT,
    conclusion TEXT,
    started_at TIMESTAMP(6) WITH TIME ZONE,
    completed_at TIMESTAMP(6) WITH TIME ZONE,
    workflow_name TEXT,
    steps JSONB,
    check_run_url TEXT,
    labels JSONB,
    runner_id INTEGER,
    runner_name TEXT,
    runner_group_id INTEGER,
    runner_group_name TEXT,
    _mergestat_synced_at TIMESTAMP(6) WITH TIME ZONE DEFAULT now() NOT NULL,
    PRIMARY KEY (repo_id, id),
    CONSTRAINT github_workflow_run_jobs_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES "repos" ("id")
    ON DELETE CASCADE
    ON UPDATE RESTRICT);

COMMENT ON TABLE github_pull_requests IS 'GitHub Workflow Run Jobs';

COMMIT;
