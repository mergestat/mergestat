SELECT
    EXTRACT(EPOCH FROM (public.github_actions_workflow_runs.updated_at - public.github_actions_workflow_runs.run_started_at))::integer/60 AS minutes_to_run,
    public.repos.repo,
    public.github_actions_workflow_runs.*
FROM public.github_actions_workflow_runs
INNER JOIN public.repos ON public.github_actions_workflow_runs.repo_id = public.repos.id
ORDER BY 1 DESC
