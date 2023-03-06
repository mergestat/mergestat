-- SQL migration to seed vendors and provider tables
BEGIN;

INSERT INTO mergestat.vendors (name, display_name)
VALUES ('bitbucket', 'Bitbucket');

INSERT INTO mergestat.service_auth_credential_types (type, description) VALUES
('BITBUCKET_APP_PASSWORD', 'Authentication using Bitbucket app password');

COMMIT;
