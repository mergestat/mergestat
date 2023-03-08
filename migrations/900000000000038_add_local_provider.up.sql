-- SQL migration to add a local (disk-based) provider
BEGIN;

INSERT INTO mergestat.vendors (name, display_name, description)
VALUES ('local', 'Local', 'Access local, disk-based repositories');

COMMIT;
