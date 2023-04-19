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

CREATE OR REPLACE FUNCTION mergestat.sync_now(container_sync_id UUID)
RETURNS BOOLEAN
LANGUAGE PLPGSQL VOLATILE
AS $$
DECLARE 
    queue_name TEXT;
    queue_concurrency INTEGER;
    job_id UUID;
    is_sync_already_running BOOLEAN;
BEGIN
    --Check if a sync run is already queued
    WITH sync_running(id, queue, job, status) AS (
        SELECT DISTINCT ON (syncs.id) syncs.id, (image.queue || '-' || repo.provider) AS queue, exec.job_id, job.status,
            CASE WHEN image.queue = 'github' THEN 1 ELSE 0 END AS concurrency
            FROM mergestat.container_syncs syncs
                INNER JOIN mergestat.container_images image ON image.id = syncs.image_id
                INNER JOIN public.repos repo ON repo.id = syncs.repo_id
                LEFT OUTER JOIN mergestat.container_sync_executions exec ON exec.sync_id = syncs.id
                LEFT OUTER JOIN sqlq.jobs job ON job.id = exec.job_id
        WHERE syncs.id = container_sync_id
        ORDER BY syncs.id, exec.created_at DESC
    )
    SELECT CASE WHEN (SELECT COUNT(*) FROM sync_running WHERE status IN ('pending','running')) > 0 THEN TRUE ELSE FALSE END
    INTO is_sync_already_running;
    
    
    IF is_sync_already_running = FALSE
    THEN    
        --Get the queue name
        SELECT DISTINCT (ci.queue || '-' || r.provider)
        INTO queue_name
        FROM mergestat.container_syncs cs
        INNER JOIN mergestat.container_images ci ON ci.id = cs.image_id
        INNER JOIN public.repos r ON r.id = cs.repo_id
        WHERE cs.id = container_sync_id;
        
        --Get the queue concurrency
        SELECT DISTINCT CASE WHEN ci.queue = 'github' THEN 1 ELSE NULL END
        INTO queue_concurrency
        FROM mergestat.container_syncs cs
        INNER JOIN mergestat.container_images ci ON ci.id = cs.image_id
        INNER JOIN public.repos r ON r.id = cs.repo_id
        WHERE cs.id = container_sync_id;
        
        --Add the queue if missing
        INSERT INTO sqlq.queues (name, concurrency) VALUES (queue_name, queue_concurrency) ON CONFLICT (name) DO UPDATE SET concurrency = excluded.concurrency;
        
        --Add the job
        INSERT INTO sqlq.jobs (queue, typename, parameters, priority) VALUES (queue_name, 'container/sync', jsonb_build_object('ID', container_sync_id), 0) RETURNING id INTO job_id;
        
        --Add the container sync execution
        INSERT INTO mergestat.container_sync_executions (sync_id, job_id) VALUES (container_sync_id, job_id);
    END IF;
    
    RETURN TRUE;
    
END; $$;

COMMIT;
