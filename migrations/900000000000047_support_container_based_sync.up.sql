-- SQL migration to add support for Container-based syncs
BEGIN;

-- Table: mergestat.container_image_type
-- Enumeration containing valid image types that we can pull and use.
CREATE TABLE mergestat.container_image_types (name TEXT PRIMARY KEY, displayName TEXT NOT NULL, description TEXT);

-- Seed some common image formats
INSERT INTO mergestat.container_image_types(name, displayName, description) VALUES
('docker', 'Docker Image', 'Docker Image Manifest v2'),
('oci', 'Open Container Initiative', 'Open Container Initiative (OCI) Specification');

-- Table: mergestat.container_image
-- A registered image from a hosted container registry.
CREATE TABLE mergestat.container_images (
    id   UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- auto-generated unique identifier for this image
    name TEXT NOT NULL,                              -- user-provided name of the image
    type TEXT NOT NULL DEFAULT('docker'),            -- type of the container image
    url  TEXT NOT NULL,                              -- full path the image
    version TEXT NOT NULL DEFAULT ('latest'),        -- version of the image
    parameters JSONB NOT NULL DEFAULT '{}',          -- any user-defined parameters to pass to the container

    -- foreign key constraint for container's type
    CONSTRAINT FK_container_image_type FOREIGN KEY (type) REFERENCES mergestat.container_image_types (name)
);

-- Table: mergestat.container_sync
-- A sync defined for a repository that runs the linked container image.
CREATE TABLE mergestat.container_syncs (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- auto-generated unique identifier for this sync
    repo_id      UUID NOT NULL,
    image_id     UUID NOT NULL,
    parameters   JSONB NOT NULL DEFAULT '{}', -- overrides for user-defined parameters

    CONSTRAINT FK_sync_repository FOREIGN KEY (repo_id) REFERENCES public.repos (id) ON DELETE CASCADE,
    CONSTRAINT FK_sync_container FOREIGN KEY (image_id) REFERENCES mergestat.container_images (id) ON DELETE CASCADE
);

-- Table: mergestat.container_sync_schedule
-- A schedule to run the given the sync on.
CREATE TABLE mergestat.container_sync_schedules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(), -- auto-generated unique identifier for this schedule
    sync_id UUID NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),

    -- fields that record the actual schedule


    CONSTRAINT FK_schedule_sync FOREIGN KEY (sync_id) REFERENCES mergestat.container_syncs (id)
);

-- Table: mergestat.container_sync_execution
-- Record of all current and previous executions of the given sync.
CREATE TABLE mergestat.container_sync_executions (
    sync_id UUID NOT NULL,
    job_id UUID NOT NULL,

    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),

    CONSTRAINT FK_execution_sync FOREIGN KEY (sync_id) REFERENCES mergestat.container_syncs (id),
    CONSTRAINT FK_execution_job FOREIGN KEY (job_id) REFERENCES sqlq.jobs (id)
);

-- Function: jsonb_recursive_merge()
-- Recursively merge two json objects together.
CREATE OR REPLACE FUNCTION jsonb_recursive_merge(a JSONB, b JSONB)
RETURNS JSONB LANGUAGE sql AS $$
SELECT
    jsonb_object_agg(
        coalesce(ka, kb),
        CASE
            WHEN va ISNULL THEN vb
            WHEN vb ISNULL THEN va
            WHEN jsonb_typeof(va) <> 'object' OR jsonb_typeof(vb) <> 'object' THEN vb
            ELSE jsonb_recursive_merge(va, vb) END
        )
    FROM jsonb_each(a) e1(ka, va)
    FULL JOIN jsonb_each(b) e2(kb, vb) ON ka = kb
$$;

COMMIT;
