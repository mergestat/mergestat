SELECT
    public.repos.repo,
    repo_syncs.sync_type
FROM public.repos
INNER JOIN mergestat.repo_syncs ON public.repos.id = mergestat.repo_syncs.repo_id
ORDER BY 1, 2
