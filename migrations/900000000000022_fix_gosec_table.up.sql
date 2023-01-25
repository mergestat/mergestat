BEGIN;

ALTER TABLE IF EXISTS public.gosec_repo_scans
ADD COLUMN IF NOT EXISTS _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;

ALTER TABLE IF EXISTS public.gosec_repo_scans
DROP CONSTRAINT IF EXISTS gosec_repo_scans_repo_id_fkey;

ALTER TABLE IF EXISTS mergestat.gosec_repo_scans
ADD CONSTRAINT gosec_repo_scans_repo_id_fkey
FOREIGN KEY (repo_id) REFERENCES public.repos(id) ON UPDATE RESTRICT ON DELETE CASCADE;

COMMENT ON TABLE public.gosec_repo_scans IS 'Table of gosec repo scans';
COMMENT ON COLUMN gosec_repo_scans.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN gosec_repo_scans.issues IS 'JSON issues from gosec repo scan';
COMMENT ON COLUMN gosec_repo_scans._mergestat_synced_at IS 'timestamp when record was synced into the MergeStat database';

COMMIT;
