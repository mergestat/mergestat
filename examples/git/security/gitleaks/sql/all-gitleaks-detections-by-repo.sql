SELECT
    public.repos.repo,
    public.gitleaks_repo_detections.description,
    public.gitleaks_repo_detections.file,
    public.gitleaks_repo_detections.date
FROM public.gitleaks_repo_detections
INNER JOIN public.repos ON public.repos.id = public.gitleaks_repo_detections.repo_id
ORDER BY 1
