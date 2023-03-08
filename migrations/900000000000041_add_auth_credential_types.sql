BEGIN;

INSERT INTO mergestat.service_auth_credential_types (type, description) VALUES
('RSA', 'Authentication using RSA Private Keys'),
('DSA', 'Authentication using DSA Private Keys'),
('ECDSA', 'Authentication using ECDSA Private Keys'),
('BASIC_AUTH', 'Authentication using plain username/password pair');


COMMIT;
