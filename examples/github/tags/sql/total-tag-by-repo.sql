SELECT
    public.repos.repo,
    COUNT(*) AS total_tags
FROM public.git_refs
INNER JOIN public.git_commits ON public.git_refs.hash = public.git_commits.hash AND public.git_refs.repo_id = public.git_commits.repo_id
INNER JOIN public.repos ON public.git_commits.repo_id = public.repos.id
WHERE
    public.git_refs.type = 'tag'
GROUP BY 1
ORDER BY 2 DESC
