SELECT
    TO_CHAR(public.git_commits.author_when, 'Day') AS day_of_week,
    EXTRACT(DOW FROM public.git_commits.author_when) AS day_of_week_num,
    COUNT(*) AS total_commits
FROM public.git_commits
WHERE
    public.git_commits.committer_when IS NOT NULL
    AND public.git_commits.parents < 2 -- exclude merge commits
GROUP BY 1, 2
ORDER BY 1
