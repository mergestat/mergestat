-- SQL migration to add support for dynamically queueing container-based sync jobs
BEGIN;

ALTER TABLE "mergestat"."container_images"
ADD COLUMN "queue" TEXT NOT NULL DEFAULT 'default';

COMMIT;
