BEGIN;

CREATE OR REPLACE FUNCTION mergestat.add_service_auth_credential(credential_type TEXT, credentials TEXT, secret TEXT) RETURNS mergestat.SERVICE_AUTH_CREDENTIALS AS $$
DECLARE _inserted_row mergestat.SERVICE_AUTH_CREDENTIALS;
BEGIN
  INSERT INTO mergestat.service_auth_credentials (type, credentials) VALUES (credential_type, pgp_sym_encrypt(credentials, secret)) RETURNING * INTO _inserted_row;
  RAISE NOTICE 'INSERT INTO mergestat.service_auth_credentials by user(%), type(%s), id(%s)', user, credential_type, _inserted_row.id;
  RETURN(_inserted_row);
END;
$$ LANGUAGE plpgsql;

COMMIT;
