WITH countCTE AS (SELECT
    public.repos.repo,
    DATE_TRUNC('day', public.github_stargazers.starred_at) AS starred_at_day,
    COUNT(*) AS total_stargazers
    FROM public.github_stargazers
    INNER JOIN public.repos ON public.repos.id = public.github_stargazers.repo_id
    GROUP BY 1, 2
)

SELECT
    repo,
    starred_at_day,
    SUM(total_stargazers) OVER (PARTITION BY repo ORDER BY repo ASC, starred_at_day ASC ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS rolling_sum_stargazers
FROM countCTE
