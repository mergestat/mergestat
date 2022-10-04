SELECT
    public.git_commits.author_name,
    SUM(public.git_commit_stats.additions - public.git_commit_stats.deletions) AS net_changes
FROM public.git_commits
INNER JOIN public.repos ON public.git_commits.repo_id = public.repos.id
-- join on both hash and repo as the hash can be the same in different repos when forking
INNER JOIN public.git_commit_stats ON public.git_commits.hash = public.git_commit_stats.commit_hash AND public.git_commits.repo_id = public.git_commit_stats.repo_id
WHERE
    public.git_commits.committer_when IS NOT NULL
    AND public.git_commits.parents < 2 -- exclude merge commits
GROUP BY 1
ORDER BY 2 DESC
