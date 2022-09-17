BEGIN;

ALTER TABLE public.git_commit_stats
ADD CONSTRAINT commit_stats_pkey PRIMARY KEY(repo_id, file_path, commit_hash);

COMMIT
