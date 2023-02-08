-- SQL migration to seed vendors and provider tables
BEGIN;

INSERT INTO mergestat.vendors (name, display_name)
VALUES ('gitlab', 'Gitlab');

INSERT INTO mergestat.providers (name, vendor, settings)
VALUES ('Gitlab', 'gitlab', '{"url": "https://gitlab.com"}'::jsonb);

INSERT INTO mergestat.service_auth_credential_types (type, description) VALUES
('GITLAB_PAT', 'Authentication using Gitlab Personal Access Token');

COMMIT;
