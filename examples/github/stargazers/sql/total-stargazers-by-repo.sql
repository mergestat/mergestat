SELECT
    public.repos.repo,
    COUNT(*) AS total_stargazers
FROM public.github_stargazers
INNER JOIN public.repos ON public.repos.id = public.github_stargazers.repo_id
GROUP BY 1
ORDER BY 2 DESC
