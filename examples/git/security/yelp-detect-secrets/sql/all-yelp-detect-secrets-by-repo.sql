SELECT
    public.repos.repo,
    public.yelp_detect_secrets_repo_detections.type,
    public.yelp_detect_secrets_repo_detections.filename,
    public.yelp_detect_secrets_repo_detections.is_verified,
    public.yelp_detect_secrets_repo_detections.line_number,
    public.yelp_detect_secrets_repo_detections.version,
    public.yelp_detect_secrets_repo_detections.generated_at
FROM public.yelp_detect_secrets_repo_detections
INNER JOIN public.repos ON public.repos.id = public.yelp_detect_secrets_repo_detections.repo_id
ORDER BY 1
