SELECT
    repos.repo,
    EXTRACT(YEAR FROM public.github_pull_requests.created_at) AS year_num,
    EXTRACT(WEEK FROM public.github_pull_requests.created_at) AS week_num,
    EXTRACT(DOW FROM public.github_pull_requests.created_at) AS day_of_week_num,
    TO_CHAR(public.github_pull_requests.created_at, 'Day') AS day_of_week,
    COUNT(*) AS total_pull_requests
FROM public.github_pull_requests
INNER JOIN public.repos ON public.github_pull_requests.repository_id = repos.id
WHERE
    public.github_pull_requests.created_at IS NOT NULL
GROUP BY 1, 2, 3, 4, 5
ORDER BY 2 DESC, 3 DESC, 4 DESC, 1
