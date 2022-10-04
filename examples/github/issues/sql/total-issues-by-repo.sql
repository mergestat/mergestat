SELECT
    public.repos.repo,
    COUNT(*) AS total_issues
FROM public.github_issues
INNER JOIN public.repos ON public.github_issues.repo_id = public.repos.id
GROUP BY 1
ORDER BY 2 DESC
