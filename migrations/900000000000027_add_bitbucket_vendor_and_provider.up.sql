-- SQL migration to seed vendors and provider tables
BEGIN;

INSERT INTO mergestat.vendors (name, display_name)
VALUES ('bitbucket', 'Bitbucket');

INSERT INTO mergestat.providers (name, vendor, settings)
VALUES ('Bitbucket', 'bitbucket', '{"url": "https://api.bitbucket.org"}'::jsonb);

INSERT INTO mergestat.service_auth_credential_types (type, description) VALUES
('BITBUCKET_APP_PASSWORD', 'Authentication using Bitbucket app password');

COMMIT;
