BEGIN;

ALTER TABLE public.git_commit_stats
ADD COLUMN old_file_mode text,
ADD COLUMN new_file_mode text;

-- TODO(patrickdevivo) this will fail on existing data because new_file_mode will be NULL for all existing rows.
-- We should probably figure out how to address this before merge.
ALTER TABLE public.git_commit_stats
ADD CONSTRAINT commit_stats_pkey PRIMARY KEY(repo_id, file_path, commit_hash, new_file_mode);

COMMIT;
