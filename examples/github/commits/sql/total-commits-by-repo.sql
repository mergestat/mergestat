SELECT
    public.repos.repo,
    COUNT(*) AS total_commits
FROM public.git_commits
INNER JOIN public.repos ON public.git_commits.repo_id = public.repos.id
WHERE
    public.git_commits.committer_when IS NOT NULL
    AND public.git_commits.parents < 2 -- exclude merge commits
GROUP BY 1
ORDER BY 2 DESC
