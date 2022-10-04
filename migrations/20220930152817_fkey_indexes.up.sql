-- Dropping existing index to use same naming convention for fkeys
DROP INDEX IF EXISTS idx_repo_sync_logs_repo_sync_queue_id;
CREATE INDEX IF NOT EXISTS idx_repo_sync_logs_repo_sync_queue_id_fkey ON mergestat.repo_sync_logs (repo_sync_queue_id);
CREATE INDEX IF NOT EXISTS idx_repo_sync_queue_repo_sync_id_fkey ON mergestat.repo_sync_queue (repo_sync_id);
CREATE INDEX IF NOT EXISTS idx_repo_sync_settings_repo_id_fkey ON mergestat.repo_syncs (repo_id);
CREATE INDEX IF NOT EXISTS idx_git_blame_repo_id_fkey ON public.git_blame (repo_id);
CREATE INDEX IF NOT EXISTS idx_commits_repo_id_fkey ON public.git_commits (repo_id);
CREATE INDEX IF NOT EXISTS idx_commit_stats_repo_id_fkey ON public.git_commit_stats (repo_id);
CREATE INDEX IF NOT EXISTS idx_files_repo_id_fkey ON public.git_files (repo_id);
CREATE INDEX IF NOT EXISTS idx_github_issues_repo_id_fkey ON public.github_issues (repo_id);
CREATE INDEX IF NOT EXISTS idx_request_commits_repo_id_fkey ON public.github_pull_request_commits (repo_id);
CREATE INDEX IF NOT EXISTS idx_reviews_repo_id_fkey ON public.github_pull_request_reviews (repo_id);
CREATE INDEX IF NOT EXISTS idx_github_pull_requests_repo_id_fkey ON public.github_pull_requests (repo_id);
CREATE INDEX IF NOT EXISTS idx_github_repo_info_repo_id_fkey ON public.github_repo_info (repo_id);
CREATE INDEX IF NOT EXISTS idx_github_stargazers_repo_id_fkey ON public.github_stargazers (repo_id);
CREATE INDEX IF NOT EXISTS idx_refs_repo_id_fkey ON public.git_refs (repo_id);
CREATE INDEX IF NOT EXISTS idx_trivy_repo_id_fkey ON public.trivy_repo_scans (repo_id);
CREATE INDEX IF NOT EXISTS idx_repos_repo_import_id_fkey ON public.repos (repo_import_id);
