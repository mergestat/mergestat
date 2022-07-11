BEGIN;

CREATE TABLE IF NOT EXISTS mergestat.service_auth_credential_types (
    type TEXT PRIMARY KEY,
    description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS mergestat.service_auth_credentials (
    id uuid DEFAULT public.gen_random_uuid() PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    type text NOT NULL REFERENCES mergestat.service_auth_credential_types(type) ON DELETE RESTRICT ON UPDATE RESTRICT,
    credentials bytea
);

INSERT INTO mergestat.service_auth_credential_types (type, description) VALUES ('GITHUB_PAT', 'Authentication using a GitHub personal acces token') ON CONFLICT DO NOTHING;

COMMIT;
