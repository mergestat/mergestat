SELECT
    public.repos.repo,
    COUNT(repo_syncs.sync_type) AS count
FROM public.repos
INNER JOIN mergestat.repo_syncs ON public.repos.id = mergestat.repo_syncs.repo_id
GROUP BY 1
HAVING COUNT(repo_syncs.sync_type) = 0
ORDER BY 2
