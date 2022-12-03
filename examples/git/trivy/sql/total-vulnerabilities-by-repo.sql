SELECT
    public.repos.repo,
    COUNT(*) AS total_vulnerabilities
FROM public.trivy_repo_vulnerabilities
INNER JOIN public.repos ON public.repos.id = public.trivy_repo_vulnerabilities.repo_id
GROUP BY 1
ORDER BY 2 DESC
