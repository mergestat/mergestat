BEGIN;

-- create an anonymous role with no permissions for unauthenticated requests
-- https://stackoverflow.com/questions/8092086/create-postgresql-role-user-if-it-doesnt-exist
DO
$do$
BEGIN
   IF EXISTS (
      SELECT FROM pg_catalog.pg_roles
      WHERE  rolname = 'anonymous') THEN

      RAISE NOTICE 'Role "anonymous" already exists. Skipping.';
   ELSE
      BEGIN   -- nested block
         CREATE ROLE anonymous LOGIN;
      EXCEPTION
         WHEN duplicate_object THEN
            RAISE NOTICE 'Role "anonymous" was just created by a concurrent transaction. Skipping.';
      END;
   END IF;
END
$do$;

-- create a mergestat_admin role that has full read/write on all mergestat tables
DO
$do$
BEGIN
   IF EXISTS (
      SELECT FROM pg_catalog.pg_roles
      WHERE  rolname = 'mergestat_admin') THEN

      RAISE NOTICE 'Role "mergestat_admin" already exists. Skipping.';
   ELSE
      BEGIN   -- nested block
         CREATE ROLE mergestat_admin LOGIN;
      EXCEPTION
         WHEN duplicate_object THEN
            RAISE NOTICE 'Role "mergestat_admin" was just created by a concurrent transaction. Skipping.';
      END;
   END IF;
END
$do$;

GRANT USAGE ON SCHEMA public TO mergestat_admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO mergestat_admin;

GRANT USAGE ON SCHEMA mergestat TO mergestat_admin;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA mergestat TO mergestat_admin;

COMMIT;
