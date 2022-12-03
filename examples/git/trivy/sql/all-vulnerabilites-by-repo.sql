SELECT
    public.repos.repo,
    public.trivy_repo_vulnerabilities.vulnerability_id,
    public.trivy_repo_vulnerabilities.vulnerability_title,
    public.trivy_repo_vulnerabilities.vulnerability_installed_version,
    JSON_EXTRACT_PATH_TEXT(public.trivy_repo_vulnerabilities.vulnerability::json, variadic '{FixedVersion}') AS FixedVersion,
    JSON_EXTRACT_PATH_TEXT(public.trivy_repo_vulnerabilities.vulnerability::json, variadic '{PublishedDate}') AS PublishedDate
FROM public.trivy_repo_vulnerabilities
INNER JOIN public.repos ON public.repos.id = public.trivy_repo_vulnerabilities.repo_id
ORDER BY 1
