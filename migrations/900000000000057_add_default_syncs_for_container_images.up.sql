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
CREATE OR REPLACE FUNCTION mergestat.add_repo_import(provider_id UUID, import_type TEXT, import_type_name TEXT, default_container_image_ids UUID[])
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
                THEN jsonb_build_object('type', import_type) || jsonb_build_object('userOrGroup', import_type_name) || jsonb_build_object('defaultContainerImages', default_container_image_ids)
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

--Replace repo import default container images
--Example: SELECT mergestat.update_repo_import_default_container_images('fdebb5e3-17aa-4725-b7c2-b8e47e54df30', (array['51c76dcf-05a4-4288-b796-50f74c25f479', '1dc4ae75-9c93-4f21-8f64-90228b6486e8'])::UUID[])
CREATE OR REPLACE FUNCTION mergestat.update_repo_import_default_container_images(repo_import_id UUID, default_container_image_ids UUID[])
RETURNS BOOLEAN
LANGUAGE PLPGSQL VOLATILE
AS $$
BEGIN
    
    -- update the repo import by replacing the defaultContainerImages element from the settings object
    UPDATE mergestat.repo_imports SET settings = settings - 'defaultContainerImages' || jsonb_build_object('defaultContainerImages', default_container_image_ids)
    WHERE id = repo_import_id;
    
    RETURN TRUE;
    
END; $$;

CREATE OR REPLACE FUNCTION mergestat.enable_container_sync(repo_id_param UUID, container_image_id UUID)
RETURNS BOOLEAN
LANGUAGE PLPGSQL VOLATILE
AS $$
DECLARE
    container_sync_id UUID;
BEGIN

    INSERT INTO mergestat.container_syncs (repo_id, image_id) VALUES (repo_id_param, container_image_id)
        ON CONFLICT (repo_id, image_id) DO UPDATE SET repo_id = EXCLUDED.repo_id, image_id = EXCLUDED.image_id
        RETURNING id INTO container_sync_id;
    
    INSERT INTO mergestat.container_sync_schedules (sync_id) VALUES (container_sync_id) ON CONFLICT DO NOTHING;
    
    PERFORM mergestat.sync_now(container_sync_id);
    
    RETURN TRUE;
    
END; $$;

COMMIT;
