BEGIN;

-- The CREATE ROLE statements that follow are done in this way to make them idempotent.
-- See the thread here: https://stackoverflow.com/questions/8092086/create-postgresql-role-user-if-it-doesnt-exist
DO $$
BEGIN
    CREATE ROLE mergestat_role_admin;
    EXCEPTION WHEN duplicate_object THEN RAISE NOTICE '%, skipping', SQLERRM USING ERRCODE = SQLSTATE;
END
$$;

-- Setup the mergestat_role_admin role
GRANT USAGE ON SCHEMA public TO mergestat_role_admin WITH GRANT OPTION;
GRANT USAGE ON SCHEMA mergestat TO mergestat_role_admin WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO mergestat_role_admin WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA mergestat TO mergestat_role_admin WITH GRANT OPTION;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON TABLES TO mergestat_role_admin WITH GRANT OPTION;
ALTER DEFAULT PRIVILEGES IN SCHEMA mergestat GRANT ALL PRIVILEGES ON TABLES TO mergestat_role_admin WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA mergestat TO mergestat_role_admin WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO mergestat_role_admin WITH GRANT OPTION;
ALTER DEFAULT PRIVILEGES IN SCHEMA mergestat GRANT ALL PRIVILEGES ON SEQUENCES TO mergestat_role_admin WITH GRANT OPTION;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON SEQUENCES TO mergestat_role_admin WITH GRANT OPTION;

COMMIT;
