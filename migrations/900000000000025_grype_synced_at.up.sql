BEGIN;

ALTER TABLE public.grype_repo_scans
ADD COLUMN _mergestat_synced_at timestamp with time zone DEFAULT now() NOT NULL;

COMMENT ON TABLE public.grype_repo_scans IS 'Table for Grype repo scan results';
COMMENT ON COLUMN grype_repo_scans.repo_id IS 'foreign key for public.repos.id';
COMMENT ON COLUMN grype_repo_scans.results IS 'JSON results of Grype repo scanner';
COMMENT ON COLUMN grype_repo_scans._mergestat_synced_at IS 'timestamp when record was synced into the Mergestat database';

COMMIT;
