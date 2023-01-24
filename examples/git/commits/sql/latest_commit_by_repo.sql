SELECT
    repo,
    MAX(committer_when) AS last_commit
FROM public.git_commits
INNER JOIN public.repos ON public.git_commits.repo_id = public.repos.id
GROUP BY 1
ORDER BY 2 ASC
