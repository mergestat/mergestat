BEGIN;

ALTER TABLE mergestat.container_syncs
ADD CONSTRAINT unq_repo_image UNIQUE (repo_id, image_id);

COMMIT;
