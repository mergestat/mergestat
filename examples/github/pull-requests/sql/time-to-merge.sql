SELECT
    public.repos.repo,
    public.github_pull_requests.url,
    public.github_pull_requests.created_at,
    public.github_pull_requests.merged_at,
    public.github_pull_requests.additions,
    public.github_pull_requests.deletions,
    extract(EPOCH FROM (public.github_pull_requests.merged_at - public.github_pull_requests.created_at))::integer AS seconds_to_merge,
    extract(EPOCH FROM (public.github_pull_requests.merged_at - public.github_pull_requests.created_at))::integer/60 AS minutes_to_merge,
    extract(EPOCH FROM (public.github_pull_requests.merged_at - public.github_pull_requests.created_at))::integer/60/60 AS hours_to_merge,
    extract(EPOCH FROM (public.github_pull_requests.merged_at - public.github_pull_requests.created_at))::integer/60/60/24 AS days_to_merge
FROM public.github_pull_requests
INNER JOIN public.repos ON public.github_pull_requests.repo_id = public.repos.id
WHERE public.github_pull_requests.merged_at IS NOT NULL
ORDER BY 7 DESC;
