-- SQL migration to seed vendors and provider tables
BEGIN;

INSERT INTO mergestat.vendors (name, display_name)
VALUES ('git', 'Generic Git');

INSERT INTO mergestat.service_auth_credential_types (type, description) VALUES
('RSA', 'Authentication using RSA Private Keys'),
('DSA', 'Authentication using DSA Private Keys'),
('ECDSA', 'Authentication using ECDSA Private Keys');


COMMIT;
