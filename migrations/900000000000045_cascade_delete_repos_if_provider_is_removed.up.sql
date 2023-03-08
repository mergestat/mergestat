BEGIN;

ALTER TABLE mergestat.service_auth_credentials DROP CONSTRAINT FK_providers_credentials_provider;
ALTER TABLE mergestat.service_auth_credentials
ADD CONSTRAINT FK_providers_credentials_provider FOREIGN KEY (provider) REFERENCES mergestat.providers (id) ON DELETE CASCADE;

ALTER TABLE mergestat.repo_imports DROP CONSTRAINT FK_providers_repo_imports_provider;
ALTER TABLE mergestat.repo_imports
ADD CONSTRAINT FK_providers_repo_imports_provider FOREIGN KEY (provider) REFERENCES mergestat.providers (id) ON DELETE CASCADE;

ALTER TABLE public.repos DROP CONSTRAINT FK_repos_provider;
ALTER TABLE public.repos
ADD CONSTRAINT FK_repos_provider FOREIGN KEY (provider) REFERENCES mergestat.providers (id) ON DELETE CASCADE;

COMMIT;
