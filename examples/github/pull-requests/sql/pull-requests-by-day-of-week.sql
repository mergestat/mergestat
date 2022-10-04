SELECT
    EXTRACT(YEAR FROM public.github_pull_requests.created_at) AS year_num,
    EXTRACT(WEEK FROM public.github_pull_requests.created_at) AS week_num,
    EXTRACT(DOW FROM public.github_pull_requests.created_at) AS day_of_week_num,
    TO_CHAR(public.github_pull_requests.created_at, 'Day') AS day_of_week,
    COUNT(*) AS total_pull_requests
FROM public.github_pull_requests
WHERE
    public.github_pull_requests.created_at IS NOT NULL
GROUP BY 1, 2, 3, 4
ORDER BY 1 DESC, 2 DESC, 3 DESC
