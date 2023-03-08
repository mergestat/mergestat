-- SQL migration to seed vendor and provider tables
BEGIN;

INSERT INTO mergestat.vendors (name, display_name)
VALUES ('github', 'GitHub'), ('git', 'Generic Git')
ON CONFLICT DO NOTHING;

DO $$
DECLARE
    github_repo_count INTEGER;
    non_github_repo_count INTEGER;
BEGIN
    SELECT count(*) INTO github_repo_count FROM public.repos WHERE is_github = true;

    IF github_repo_count > 0 THEN
        INSERT INTO mergestat.providers (name, vendor, settings)
        VALUES ('GitHub Repos', 'github', '{}')
        ON CONFLICT DO NOTHING;
    END IF;

    SELECT count(*) INTO non_github_repo_count FROM public.repos WHERE is_github = false;

    IF non_github_repo_count > 0 THEN
        INSERT INTO mergestat.providers (name, vendor, settings)
        VALUES ('Generic Git Host', 'git', '{}')
        ON CONFLICT DO NOTHING;
    END IF;

END $$;

COMMIT;
