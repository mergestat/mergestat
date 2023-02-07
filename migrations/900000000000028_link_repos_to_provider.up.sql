-- SQL migration to link all existing repositories to github provider
BEGIN;

-- add provider column to repos
ALTER TABLE public.repos ADD COLUMN provider UUID;
ALTER TABLE public.repos ADD CONSTRAINT FK_repos_provider FOREIGN KEY (provider) REFERENCES mergestat.providers (id);

DO $$
DECLARE
    github_provider mergestat.providers;
    local_provider mergestat.providers;
BEGIN
    SELECT * FROM mergestat.providers WHERE name = 'GitHub' INTO github_provider;
    SELECT * FROM mergestat.providers WHERE name = 'Local' INTO local_provider;

    UPDATE public.repos
    SET provider = (CASE WHEN is_github THEN github_provider.id ELSE local_provider.id END);

END $$;

-- remove is_github column
ALTER TABLE public.repos DROP COLUMN is_github;
ALTER TABLE public.repos ALTER COLUMN provider SET NOT NULL;


COMMIT;
