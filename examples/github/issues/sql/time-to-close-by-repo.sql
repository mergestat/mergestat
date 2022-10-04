SELECT
    public.repos.repo,
    avg(extract(EPOCH FROM (public.github_issues.closed_at - public.github_issues.created_at)))::integer AS avg_seconds_to_close,
    avg(extract(EPOCH FROM (public.github_issues.closed_at - public.github_issues.created_at))/60)::integer AS avg_minutes_to_close,
    avg(extract(EPOCH FROM (public.github_issues.closed_at - public.github_issues.created_at))/60/60)::integer AS avg_hours_to_close,
    avg(extract(EPOCH FROM (public.github_issues.closed_at - public.github_issues.created_at))/60/60/24)::integer AS avg_days_to_close
FROM public.github_issues
INNER JOIN public.repos ON public.github_issues.repo_id = public.repos.id
WHERE public.github_issues.closed_at IS NOT NULL
GROUP BY 1
ORDER BY 2 DESC
