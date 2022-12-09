BEGIN;
ALTER TABLE public.github_actions_workflow_runs
ALTER COLUMN ID DROP NOT NULL;

ALTER TABLE public.github_actions_workflow_run_jobs
ALTER COLUMN ID DROP NOT NULL;

COMMIT;
