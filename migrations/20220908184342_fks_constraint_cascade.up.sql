BEGIN;

AlTER TABLE public.git_commit_stats
DROP CONSTRAINT commit_stats_repo_id_fkey ;

ALTER TABLE public.git_commit_stats
ADD CONSTRAINT commit_stats_repo_id_fkey 
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE ;

AlTER TABLE public.git_commits
DROP CONSTRAINT commits_repo_id_fkey ;

ALTER TABLE public.git_commits
ADD CONSTRAINT commits_repo_id_fkey 
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE ;

AlTER TABLE public.git_files
DROP CONSTRAINT files_repo_id_fkey ;

ALTER TABLE public.git_files
ADD CONSTRAINT files_repo_id_fkey 
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE ;

AlTER TABLE public.git_refs
DROP CONSTRAINT refs_repo_id_fkey ;

ALTER TABLE public.git_refs
ADD CONSTRAINT refs_repo_id_fkey 
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE ;

AlTER TABLE public.github_issues
DROP CONSTRAINT github_issues_repo_id_fkey ;

ALTER TABLE public.github_issues
ADD CONSTRAINT github_issues_repo_id_fkey 
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE ;

AlTER TABLE public.github_pull_request_commits
DROP CONSTRAINT request_commits_repo_id_fkey ;

ALTER TABLE public.github_pull_request_commits
ADD CONSTRAINT request_commits_repo_id_fkey 
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE ;

AlTER TABLE public.github_pull_request_reviews
DROP CONSTRAINT reviews_repo_id_fkey ;

ALTER TABLE public.github_pull_request_reviews
ADD CONSTRAINT reviews_repo_id_fkey 
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE ;

AlTER TABLE public.github_pull_requests
DROP CONSTRAINT github_pull_requests_repo_id_fkey ;

ALTER TABLE public.github_pull_requests
ADD CONSTRAINT github_pull_requests_repo_id_fkey 
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE ;

AlTER TABLE public.github_repo_info
DROP CONSTRAINT github_repo_info_repo_id_fkey ;

ALTER TABLE public.github_repo_info
ADD CONSTRAINT github_repo_info_repo_id_fkey 
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE ;

AlTER TABLE public.github_stargazers
DROP CONSTRAINT github_stargazers_repo_id_fkey ;

ALTER TABLE public.github_stargazers
ADD CONSTRAINT github_stargazers_repo_id_fkey 
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE ;

AlTER TABLE public.trivy_repo_scans
DROP CONSTRAINT trivy_repo_id_fkey;

ALTER TABLE public.trivy_repo_scans
ADD CONSTRAINT trivy_repo_id_fkey
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE ;


AlTER TABLE mergestat.repo_syncs
DROP CONSTRAINT repo_sync_settings_repo_id_fkey;

ALTER TABLE mergestat.repo_syncs
ADD CONSTRAINT repo_sync_settings_repo_id_fkey
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE ;

AlTER TABLE mergestat.repo_sync_queue
DROP CONSTRAINT repo_sync_queue_repo_sync_id_fkey;

ALTER TABLE mergestat.repo_sync_queue
ADD CONSTRAINT repo_sync_queue_repo_sync_id_fkey
FOREIGN KEY (repo_sync_id) REFERENCES mergestat.repo_syncs(id) ON UPDATE RESTRICT ON DELETE CASCADE ;

AlTER TABLE mergestat.repo_sync_logs
DROP CONSTRAINT repo_sync_logs_repo_sync_queue_id_fkey;

ALTER TABLE mergestat.repo_sync_logs
ADD CONSTRAINT repo_sync_logs_repo_sync_queue_id_fkey
FOREIGN KEY (repo_sync_queue_id) REFERENCES mergestat.repo_sync_queue(id) ON UPDATE RESTRICT ON DELETE CASCADE ;

COMMIT;


