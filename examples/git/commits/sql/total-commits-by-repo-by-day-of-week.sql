SELECT
    public.repos.repo,
    TO_CHAR(public.git_commits.author_when, 'Day') AS day_of_week,
    EXTRACT(DOW FROM public.git_commits.author_when) AS day_of_week_num,
    COUNT(*) AS total_commits
FROM public.git_commits
INNER JOIN public.repos ON public.git_commits.repo_id = public.repos.id
WHERE
    public.git_commits.committer_when IS NOT NULL
    AND public.git_commits.parents < 2 -- exclude merge commits
GROUP BY 1, 2, 3
ORDER BY 1, 4 DESC
