-- SQL migration to update the way tokens / credentials are managed, tying them to providers they belong.
BEGIN;

-- create a foreign-key to the provider this token belongs to
ALTER TABLE mergestat.service_auth_credentials
ADD COLUMN provider UUID;
ALTER TABLE mergestat.service_auth_credentials
ADD CONSTRAINT FK_providers_credentials_provider FOREIGN KEY (provider) REFERENCES mergestat.providers (id);

-- set github cloud as the default provider for any tokens that are present now
UPDATE mergestat.service_auth_credentials creds
SET provider = providers.id
FROM mergestat.providers
WHERE providers.name = 'GitHub' AND providers.vendor = 'github';

-- make the column non-nullable so that tokens are always associated with a provider
ALTER TABLE mergestat.service_auth_credentials
ALTER COLUMN provider SET NOT NULL;

ALTER TABLE mergestat.service_auth_credentials
ADD COLUMN is_default BOOLEAN DEFAULT false;

CREATE UNIQUE INDEX IX_single_default_per_provider
ON mergestat.service_auth_credentials (provider, is_default)
WHERE service_auth_credentials.is_default = true;


-- encrypt and store the given token as service credential
CREATE OR REPLACE FUNCTION mergestat.add_service_auth_credential(provider_id UUID, credential_type TEXT, token TEXT, secret TEXT)
RETURNS mergestat.SERVICE_AUTH_CREDENTIALS AS $$
DECLARE _inserted_row mergestat.service_auth_credentials;
BEGIN
    INSERT INTO mergestat.service_auth_credentials (provider, type, credentials)
        VALUES (provider_id, credential_type, pgp_sym_encrypt(token, secret)) RETURNING * INTO _inserted_row;

    RETURN _inserted_row;
END;
$$ LANGUAGE plpgsql;

-- decrypt and fetch the service credential(s) for the given provider, ordered by latest first.
DROP FUNCTION IF EXISTS mergestat.fetch_service_auth_credential (UUID, TEXT, TEXT);
CREATE FUNCTION mergestat.fetch_service_auth_credential(provider_id UUID, credential_type TEXT, secret TEXT)
RETURNS TABLE (id UUID, token TEXT, created_at TIMESTAMP WITH TIME ZONE) AS $$
BEGIN
    RETURN QUERY SELECT c.id, pgp_sym_decrypt(c.credentials, secret) AS token, c.created_at
        FROM mergestat.service_auth_credentials c
    WHERE c.provider = provider_id AND
        (credential_type IS NULL OR c.type = credential_type)
    ORDER BY is_default DESC, created_at DESC;
END;
$$ LANGUAGE plpgsql;

COMMIT;
