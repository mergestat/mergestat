-- SQL migration to add a local (disk-based) provider
BEGIN;

INSERT INTO mergestat.vendors (name, displayname, description)
VALUES ('local', 'Local', 'Access local, disk-based repositories');

INSERT INTO mergestat.providers(name, vendor, settings)
VALUES ('Local', 'local', '{}'::jsonb);

COMMIT;