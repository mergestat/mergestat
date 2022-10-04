SELECT
    public.github_issues.url,
    public.github_issues.state,
    public.github_issues.updated_at
FROM public.github_issues
WHERE
    public.github_issues.updated_at < CURRENT_DATE - INTERVAL '6 months'
    AND public.github_issues.state != 'CLOSED'
ORDER BY 3
