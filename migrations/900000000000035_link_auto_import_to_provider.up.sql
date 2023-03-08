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
WHERE providers.name = 'GitHub Repos' AND providers.vendor = 'github';

ALTER TABLE mergestat.repo_imports
ALTER COLUMN provider SET NOT NULL;

--Update the values in the settings
UPDATE mergestat.repo_imports SET settings = settings - 'user' || jsonb_build_object('userOrOrg', settings->'user') || jsonb_build_object('type', 'GITHUB_USER') WHERE settings ? 'user';
UPDATE mergestat.repo_imports SET settings = settings - 'org' || jsonb_build_object('userOrOrg', settings->'org') || jsonb_build_object('type', 'GITHUB_ORG') WHERE settings ? 'org';

COMMIT;
