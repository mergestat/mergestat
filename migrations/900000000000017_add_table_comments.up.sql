BEGIN;

COMMENT ON TABLE public.gitleaks_repo_scans IS 'scan output of a Gitleaks repo scan';
COMMENT ON COLUMN public.gitleaks_repo_scans.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN public.gitleaks_repo_scans.results IS 'JSON output of a Gitleaks scan';

COMMENT ON VIEW public.gitleaks_repo_detections IS 'view of Gitleaks repo scan detections';
COMMENT ON COLUMN public.gitleaks_repo_detections.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN public.gitleaks_repo_detections.description IS 'description of the detection';
COMMENT ON COLUMN public.gitleaks_repo_detections.start_line IS 'detection start line';
COMMENT ON COLUMN public.gitleaks_repo_detections.end_line IS 'detection end line';
COMMENT ON COLUMN public.gitleaks_repo_detections.start_column IS 'detection start column';
COMMENT ON COLUMN public.gitleaks_repo_detections.end_column IS 'detection end column';
COMMENT ON COLUMN public.gitleaks_repo_detections.match IS 'detection match';
COMMENT ON COLUMN public.gitleaks_repo_detections.secret IS 'detection secret';
COMMENT ON COLUMN public.gitleaks_repo_detections.file IS 'detection file';
COMMENT ON COLUMN public.gitleaks_repo_detections.symlink_file IS 'detected symlink file';
COMMENT ON COLUMN public.gitleaks_repo_detections.commit IS 'detection commit';
COMMENT ON COLUMN public.gitleaks_repo_detections.entropy IS 'detection entropy';
COMMENT ON COLUMN public.gitleaks_repo_detections.author IS 'detection author';
COMMENT ON COLUMN public.gitleaks_repo_detections.email IS 'detection email';
COMMENT ON COLUMN public.gitleaks_repo_detections.date IS 'detection date';
COMMENT ON COLUMN public.gitleaks_repo_detections.message IS 'detection message';
COMMENT ON COLUMN public.gitleaks_repo_detections.tags IS 'detection tags';
COMMENT ON COLUMN public.gitleaks_repo_detections.rule_id IS 'detection rule id';
COMMENT ON COLUMN public.gitleaks_repo_detections.fingerprint IS 'detection fingerprint';

COMMENT ON TABLE public.yelp_detect_secrets_repo_scans IS 'scan output of a Yelp detect-secrets repo scan';
COMMENT ON COLUMN public.yelp_detect_secrets_repo_scans.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN public.yelp_detect_secrets_repo_scans.results IS 'JSON output of a Yelp detect-secrets scan';

COMMENT ON COLUMN public.yelp_detect_secrets_repo_detections.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN public.yelp_detect_secrets_repo_detections.type IS 'detection type';
COMMENT ON COLUMN public.yelp_detect_secrets_repo_detections.filename IS 'detection filename';
COMMENT ON COLUMN public.yelp_detect_secrets_repo_detections.is_verified IS 'detection is verified';
COMMENT ON COLUMN public.yelp_detect_secrets_repo_detections.line_number IS 'detection line number';
COMMENT ON COLUMN public.yelp_detect_secrets_repo_detections.hashed_secret IS 'detection secret';
COMMENT ON COLUMN public.yelp_detect_secrets_repo_detections.version IS 'detection version';
COMMENT ON COLUMN public.yelp_detect_secrets_repo_detections.generated_at IS 'detection generated at';
COMMENT ON COLUMN public.yelp_detect_secrets_repo_detections.filters_used IS 'detection filters used';
COMMENT ON COLUMN public.yelp_detect_secrets_repo_detections.plugins_used IS 'detection plugins used';

COMMIT;
