-- SQL migration to link Auto-import jobs to providers
BEGIN;

-- drop the type column; this column used to store only github-specific type values
-- those should now go into settings hash
ALTER TABLE mergestat.repo_imports DROP COLUMN IF EXISTS type;

-- create a foreign-key to the provider this job belongs to
ALTER TABLE mergestat.repo_imports
ADD COLUMN provider UUID;
ALTER TABLE mergestat.repo_imports
ADD CONSTRAINT FK_providers_repo_imports_provider FOREIGN KEY (provider) REFERENCES mergestat.providers (id);

-- set github cloud as the default provider for existing repo imports
UPDATE mergestat.repo_imports
SET provider = providers.id
FROM mergestat.providers
WHERE providers.name = 'GitHub' AND providers.vendor = 'github';

ALTER TABLE mergestat.repo_imports
ALTER COLUMN provider SET NOT NULL;

COMMIT;
