SELECT DISTINCT
    public.repos.repo,
    public.gosec_repo_detections.severity,
    public.gosec_repo_detections.confidence,
    public.gosec_repo_detections.cwe_id,
    public.gosec_repo_detections.rule_id,
    public.gosec_repo_detections.details
FROM public.gosec_repo_detections
INNER JOIN public.repos ON public.repos.id = public.gosec_repo_detections.repo_id
ORDER BY 1
