SELECT
    public.repos.repo,
    public.github_issues.state,
    COUNT(*) AS total_issues
FROM public.github_issues
INNER JOIN public.repos ON public.github_issues.repo_id = public.repos.id
GROUP BY 1, 2
ORDER BY 3 DESC
