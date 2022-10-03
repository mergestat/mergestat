SELECT
    public.repos.repo,
    public.github_issues.url,
    public.github_issues.created_at,
    public.github_issues.closed_at,
    extract(EPOCH FROM (public.github_issues.closed_at - public.github_issues.created_at))::integer AS seconds_to_close,
    extract(EPOCH FROM (public.github_issues.closed_at - public.github_issues.created_at))::integer/60 AS minutes_to_close,
    extract(EPOCH FROM (public.github_issues.closed_at - public.github_issues.created_at))::integer/60/60 AS hours_to_close,
    extract(EPOCH FROM (public.github_issues.closed_at - public.github_issues.created_at))::integer/60/60/24 AS days_to_close
FROM public.github_issues
INNER JOIN public.repos ON public.github_issues.repo_id = public.repos.id
WHERE public.github_issues.closed_at IS NOT NULL
ORDER BY 5 DESC;
