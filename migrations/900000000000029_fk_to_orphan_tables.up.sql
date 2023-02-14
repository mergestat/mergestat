BEGIN;

ALTER TABLE public.syft_repo_scans
ADD CONSTRAINT syft_repo_scans_repo_id_fkey
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE;

ALTER TABLE public.grype_repo_scans
ADD CONSTRAINT grype_repo_scans_repo_id_fkey
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE;

ALTER TABLE public.git_remotes
ADD CONSTRAINT git_remotes_repo_id_fkey
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE;

ALTER TABLE public.yelp_detect_secrets_repo_scans
ADD CONSTRAINT yelp_detect_repo_id_fkey
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE;

ALTER TABLE public.gitleaks_repo_scans
ADD CONSTRAINT gitleaks_repo_id_fkey
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE;

COMMIT;
