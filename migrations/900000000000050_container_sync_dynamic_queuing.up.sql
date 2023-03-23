-- SQL migration to add support for dynamically queueing container-based sync jobs
BEGIN;

ALTER TABLE "mergestat"."container_images"
ADD COLUMN "queue" TEXT NOT NULL DEFAULT 'default';

-- set default concurrency of new queues to 1 (safest option)
-- since this change is specific to our use case, it is implemented here rather than in sqlq.
ALTER TABLE "sqlq"."queues" ALTER COLUMN "concurrency" SET DEFAULT 1;

COMMIT;
