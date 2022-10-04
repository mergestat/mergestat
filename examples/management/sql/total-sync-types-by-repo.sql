SELECT
    public.repos.repo,
    COUNT(repo_syncs.sync_type) AS total_sync_types
FROM public.repos
INNER JOIN mergestat.repo_syncs ON public.repos.id = mergestat.repo_syncs.repo_id
GROUP BY 1
ORDER BY 2
