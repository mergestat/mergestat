SELECT
    repo,
    artifact,
    name,
    version,
    type,
    found_by,
    locations,
    licenses,
    language,
    cpes,
    purl
FROM public.syft_repo_artifacts
INNER JOIN public.repos ON public.syft_repo_artifacts.repo_id = public.repos.id
ORDER BY 1
