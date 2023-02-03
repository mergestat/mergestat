BEGIN;

ALTER TABLE public.grype_repo_scans
ADD COLUMN _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;

COMMENT ON TABLE public.grype_repo_scans IS 'Table for Grype repo scan results';
COMMENT ON COLUMN grype_repo_scans.repo_id IS 'ID of repository which grype was executed';
COMMENT ON COLUMN grype_repo_scans.results IS 'Json result of Grype repo scanner';
COMMENT ON COLUMN grype_repo_scans._mergestat_synced_at IS 'Time when syncer completed its execution';

COMMIT;
