-- SQL migration to make some tweaks to Container-based sync setup
BEGIN;

-- Add a description field to the container_images table
ALTER TABLE "mergestat"."container_images" ADD COLUMN "description" text;

-- Rename the displayname column to display_name
ALTER TABLE "mergestat"."container_image_types" RENAME COLUMN displayname TO display_name;

COMMIT;
