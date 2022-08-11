-- https://stackoverflow.com/questions/8092086/create-postgresql-role-user-if-it-doesnt-exist
-- idempotent role creation
DO
$do$
BEGIN
IF EXISTS (
  SELECT FROM pg_catalog.pg_roles
  WHERE  rolname = 'readaccess') THEN
  RAISE NOTICE 'Role "readaccess" already exists. Skipping.';
ELSE
  CREATE ROLE readaccess;
END IF;
END
$do$;

GRANT USAGE ON SCHEMA public TO readaccess;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO readaccess;
