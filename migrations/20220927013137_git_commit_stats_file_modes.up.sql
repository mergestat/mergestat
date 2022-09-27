BEGIN;

ALTER TABLE public.git_commit_stats
ADD COLUMN old_file_mode text,
ADD COLUMN new_file_mode text;

-- Add a primary key to the table, which was omitted previously because we didn't have enough columns
-- to guarantee uniqueness. Now that we have file modes, we can guarantee uniqueness.
ALTER TABLE public.git_commit_stats
DROP CONSTRAINT IF EXISTS commit_stats_pkey;

ALTER TABLE public.git_commit_stats
ADD CONSTRAINT commit_stats_pkey PRIMARY KEY(repo_id, file_path, commit_hash, new_file_mode);

COMMIT;
