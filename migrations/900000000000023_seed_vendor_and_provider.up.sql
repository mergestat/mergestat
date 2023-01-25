-- SQL migration to seed vendor and provider tables
BEGIN;

INSERT INTO mergestat.vendors (name, displayName)
VALUES ('github', 'GitHub');

INSERT INTO mergestat.providers (name, vendor, settings)
VALUES ('GitHub', 'github', '{"url": "https://api.github.com"}'::jsonb);

COMMIT;
