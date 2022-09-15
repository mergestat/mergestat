BEGIN;

DROP TABLE IF EXISTS mergestat.service_auth_credentials CASCADE;
DROP TABLE IF EXISTS mergestat.service_auth_credential_types CASCADE;

DROP FUNCTION IF EXISTS mergestat.add_service_auth_credential(credential_type text, credentials text, secret text);

COMMIT;
