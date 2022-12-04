SELECT
    public.git_commits.author_name,
    author_email,
    repo,
    COALESCE(SUBSTRING(public.git_commit_stats.file_path FROM '\.([^\.]*)$'), SUBSTRING(public.git_commit_stats.file_path FROM '/?([^/.]*)$')) AS type,
    COUNT(1) AS commit_count
FROM public.git_commit_stats
INNER JOIN public.git_commits ON public.git_commit_stats.repo_id = public.git_commits.repo_id AND public.git_commit_stats.commit_hash = public.git_commits.hash
INNER JOIN public.repos ON public.git_commit_stats.repo_id = public.repos.id
WHERE public.git_commits.author_when > now() - INTERVAL '30 day'
GROUP BY 1, 2, 3, 4
ORDER BY COUNT(1) DESC
