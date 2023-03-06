-- SQL migration to add an optional description field to providers
BEGIN;

ALTER TABLE mergestat.providers ADD COLUMN description TEXT;

COMMIT;
