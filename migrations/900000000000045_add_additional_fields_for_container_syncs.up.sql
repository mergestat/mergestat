-- SQL migration to add additional fields for Container-based syncs
BEGIN;

ALTER TABLE mergestat.container_images ADD COLUMN name TEXT NOT NULL DEFAULT ''; -- set default for initial migration
ALTER TABLE mergestat.container_images ALTER COLUMN name DROP DEFAULT; -- drop afterwards

ALTER TABLE mergestat.container_images ADD COLUMN version TEXT NOT NULL DEFAULT 'latest';

ALTER TABLE mergestat.container_images ADD COLUMN parameters JSONB NOT NULL DEFAULT '{}'; -- any user-defined parameters to pass to the container
ALTER TABLE mergestat.container_syncs ADD COLUMN parameters JSONB NOT NULL DEFAULT '{}'; -- overrides for user-defined parameters


COMMIT;
