BEGIN;

--GitHub Org
--Example: SELECT mergestat.add_repo_import('1f337c1a-702c-4411-ab03-25aa43f5a3c1', 'GITHUB_ORG', '{{orgname}}', (array['51c76dcf-05a4-4288-b796-50f74c25f479'])::UUID[])
--GitHub User
--Example: SELECT mergestat.add_repo_import('1f337c1a-702c-4411-ab03-25aa43f5a3c1', 'GITHUB_USER', '{{username}}', (array['51c76dcf-05a4-4288-b796-50f74c25f479'])::UUID[])
--BitBucket owner
--Example: SELECT mergestat.add_repo_import('714d5147-3b35-4dde-a75e-dab527006856', 'owner', '{{ownername}}', (array['51c76dcf-05a4-4288-b796-50f74c25f479'])::UUID[])
--GitLab Groub
--Example: SELECT mergestat.add_repo_import('fc7a3eb7-68b1-4282-a592-acdb1e0bbf91', 'GITLAB_GROUP', '{{groupname}}', (array['51c76dcf-05a4-4288-b796-50f74c25f479'])::UUID[])
--GitLab User
--Example: SELECT mergestat.add_repo_import('fc7a3eb7-68b1-4282-a592-acdb1e0bbf91', 'GITLAB_USER', '{{username}}', (array['51c76dcf-05a4-4288-b796-50f74c25f479'])::UUID[])
DROP FUNCTION IF EXISTS mergestat.add_repo_import;

CREATE OR REPLACE FUNCTION mergestat.add_repo_import(provider_id UUID, import_type TEXT, import_type_name TEXT, default_container_image_ids UUID[], base_url TEXT)
RETURNS BOOLEAN
LANGUAGE PLPGSQL VOLATILE
AS $$
DECLARE 
    vendor_type TEXT;
    settings JSONB;
BEGIN
    
    -- get the vendor type
    SELECT vendor
    INTO
    vendor_type
    FROM mergestat.providers
    WHERE id = provider_id;
    
    -- set the settings by vendor
    SELECT 
        CASE
            WHEN vendor_type = 'github'
                THEN jsonb_build_object('type', import_type) || jsonb_build_object('userOrOrg', import_type_name) || jsonb_build_object('defaultContainerImages', default_container_image_ids)
            WHEN vendor_type = 'gitlab'
                THEN jsonb_build_object('type', import_type) || jsonb_build_object('userOrGroup', import_type_name) || jsonb_build_object('defaultContainerImages', default_container_image_ids) || jsonb_build_object('url', base_url)
            WHEN vendor_type = 'bitbucket' 
                THEN jsonb_build_object('owner', import_type_name) || jsonb_build_object('defaultContainerImages', default_container_image_ids)
            ELSE '{}'::JSONB
        END 
    INTO
    settings;

    -- add the repo import
    INSERT INTO mergestat.repo_imports (settings, provider) values (settings, provider_id);
    
    RETURN TRUE;
    
END; $$;

COMMIT;