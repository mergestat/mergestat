BEGIN;

ALTER TABLE mergestat.repo_imports
ADD COLUMN IF NOT EXISTS import_status TEXT;


ALTER TABLE mergestat.repo_imports
ADD COLUMN IF NOT EXISTS import_error TEXT;

COMMIT;
