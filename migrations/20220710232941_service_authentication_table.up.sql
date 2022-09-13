BEGIN;

CREATE TABLE IF NOT EXISTS mergestat.service_auth_credential_types (
    type TEXT PRIMARY KEY,
    description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS mergestat.service_auth_credentials (
    id UUID DEFAULT public.gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    type TEXT NOT NULL REFERENCES mergestat.service_auth_credential_types(type) ON DELETE RESTRICT ON UPDATE RESTRICT,
    credentials BYTEA
);

INSERT INTO mergestat.service_auth_credential_types (type, description) VALUES ('GITHUB_PAT', 'Authentication using a GitHub personal acces token') ON CONFLICT DO NOTHING;

CREATE OR REPLACE FUNCTION mergestat.add_service_auth_credential(credential_type TEXT, credentials TEXT, secret TEXT) RETURNS mergestat.SERVICE_AUTH_CREDENTIALS AS $$
  INSERT INTO mergestat.service_auth_credentials (type, credentials) VALUES (credential_type, pgp_sym_encrypt(credentials, secret)) RETURNING *;
$$ LANGUAGE sql;

COMMIT;
