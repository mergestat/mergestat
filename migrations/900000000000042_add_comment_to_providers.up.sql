-- SQL migration to add an optional comment field to providers
BEGIN;

ALTER TABLE mergestat.providers ADD COLUMN comment TEXT;

COMMIT;