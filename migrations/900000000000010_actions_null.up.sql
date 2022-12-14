BEGIN;
ALTER TABLE public.github_actions_workflow_runs
ALTER COLUMN workflow_id DROP NOT NULL;

ALTER TABLE public.github_actions_workflow_run_jobs
ALTER COLUMN run_id DROP NOT NULL;

COMMIT;
