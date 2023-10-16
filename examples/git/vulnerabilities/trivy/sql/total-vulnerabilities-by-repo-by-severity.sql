SELECT
    public.repos.repo,
    COUNT(CASE WHEN (public.trivy_repo_vulnerabilities.vulnerability_severity= 'UNKNOWN') THEN 1 END) AS severity_unknown,
    COUNT(CASE WHEN (public.trivy_repo_vulnerabilities.vulnerability_severity= 'LOW') THEN 1 END) AS severity_low,
    COUNT(CASE WHEN (public.trivy_repo_vulnerabilities.vulnerability_severity= 'MEDIUM') THEN 1 END) AS severity_medium,
    COUNT(CASE WHEN (public.trivy_repo_vulnerabilities.vulnerability_severity= 'HIGH') THEN 1 END) AS severity_high,
    COUNT(CASE WHEN (public.trivy_repo_vulnerabilities.vulnerability_severity= 'CRITICAL') THEN 1 END) AS severity_critical,
    COUNT(*) AS total_vulnerabilities
FROM public.trivy_repo_vulnerabilities
INNER JOIN public.repos ON public.repos.id = public.trivy_repo_vulnerabilities.repo_id
GROUP BY 1
ORDER BY 7 DESC
