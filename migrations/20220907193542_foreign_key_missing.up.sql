BEGIN;

ALTER TABLE public.github_pull_request_reviews
ADD CONSTRAINT reviews_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.github_pull_request_commits
ADD CONSTRAINT request_commits_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.git_refs
ADD CONSTRAINT refs_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.trivy_repo_scans
ADD CONSTRAINT trivy_repo_id_fkey FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

COMMIT;
