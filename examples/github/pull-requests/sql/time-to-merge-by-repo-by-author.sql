SELECT
    public.repos.repo,
    public.github_pull_requests.author_name,
    avg(extract(EPOCH FROM (public.github_pull_requests.merged_at - public.github_pull_requests.created_at)))::integer AS avg_seconds_to_merge,
    avg(extract(EPOCH FROM (public.github_pull_requests.merged_at - public.github_pull_requests.created_at))/60)::integer AS avg_minutes_to_merge,
    avg(extract(EPOCH FROM (public.github_pull_requests.merged_at - public.github_pull_requests.created_at))/60/60)::integer AS avg_hours_to_merge,
    avg(extract(EPOCH FROM (public.github_pull_requests.merged_at - public.github_pull_requests.created_at))/60/60/24)::integer AS avg_days_to_merge
FROM public.github_pull_requests
INNER JOIN public.repos ON public.github_pull_requests.repo_id = public.repos.id
WHERE public.github_pull_requests.merged_at IS NOT NULL
GROUP BY 1, 2
ORDER BY 3 DESC;
