-- SQL migration to seed vendor and provider tables
BEGIN;

INSERT INTO mergestat.vendors (name, display_name)
VALUES ('github', 'GitHub');

COMMIT;
