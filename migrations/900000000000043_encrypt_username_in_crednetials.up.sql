-- SQL migration to update credential add and fetch routines to perform encryption and decryption
BEGIN;

-- delete all entries where username is present! we do not have any way to migrate this
DELETE FROM mergestat.service_auth_credentials WHERE username != '';

ALTER TABLE mergestat.service_auth_credentials DROP COLUMN username;
ALTER TABLE mergestat.service_auth_credentials ADD COLUMN username BYTEA;

-- encrypt and store the given token as service credential
CREATE OR REPLACE FUNCTION mergestat.add_service_auth_credential(provider_id UUID, credential_type TEXT, username TEXT, token TEXT, secret TEXT)
RETURNS mergestat.SERVICE_AUTH_CREDENTIALS AS $$
DECLARE _inserted_row mergestat.service_auth_credentials;
BEGIN
    INSERT INTO mergestat.service_auth_credentials (provider, type, username, credentials)
        VALUES (provider_id, credential_type, pgp_sym_encrypt(username, secret), pgp_sym_encrypt(token, secret)) RETURNING * INTO _inserted_row;

    RETURN _inserted_row;
END;
$$ LANGUAGE plpgsql;

-- decrypt and fetch the service credential(s) for the given provider, ordered by latest first.
DROP FUNCTION IF EXISTS mergestat.fetch_service_auth_credential (UUID, TEXT, TEXT);
CREATE FUNCTION mergestat.fetch_service_auth_credential(provider_id UUID, credential_type TEXT, secret TEXT)
RETURNS TABLE (id UUID, username TEXT, token TEXT, created_at TIMESTAMP WITH TIME ZONE) AS $$
BEGIN
    RETURN QUERY SELECT c.id, pgp_sym_decrypt(c.username, secret), pgp_sym_decrypt(c.credentials, secret) AS token, c.created_at
        FROM mergestat.service_auth_credentials c
    WHERE c.provider = provider_id AND
        (credential_type IS NULL OR c.type = credential_type)
    ORDER BY is_default DESC, created_at DESC;
END;
$$ LANGUAGE plpgsql;

COMMIT;