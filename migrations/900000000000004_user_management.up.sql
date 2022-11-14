BEGIN;

-- The CREATE ROLE statements that follow are done in this way to make them idempotent.
-- See the thread here: https://stackoverflow.com/questions/8092086/create-postgresql-role-user-if-it-doesnt-exist
DO $$
BEGIN
    CREATE ROLE mergestat_role_readonly;
    EXCEPTION WHEN duplicate_object THEN RAISE NOTICE '%, skipping', SQLERRM USING ERRCODE = SQLSTATE;
END
$$;

DO $$
BEGIN
    CREATE ROLE mergestat_role_user;
    EXCEPTION WHEN duplicate_object THEN RAISE NOTICE '%, skipping', SQLERRM USING ERRCODE = SQLSTATE;
END
$$;

DO $$
BEGIN
    CREATE ROLE mergestat_role_admin;
    EXCEPTION WHEN duplicate_object THEN RAISE NOTICE '%, skipping', SQLERRM USING ERRCODE = SQLSTATE;
END
$$;

-- Setup the mergestat_role_readonly role
GRANT USAGE ON SCHEMA public TO mergestat_role_readonly;
GRANT USAGE ON SCHEMA mergestat TO mergestat_role_readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO mergestat_role_readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA mergestat TO mergestat_role_readonly;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO mergestat_role_readonly;
ALTER DEFAULT PRIVILEGES IN SCHEMA mergestat GRANT SELECT ON TABLES TO mergestat_role_readonly;

-- Setup the mergestat_role_user role
GRANT USAGE ON SCHEMA public TO mergestat_role_user;
GRANT USAGE ON SCHEMA mergestat TO mergestat_role_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO mergestat_role_user;
GRANT INSERT, UPDATE, DELETE ON TABLE public.repos TO mergestat_role_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA mergestat TO mergestat_role_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO mergestat_role_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA mergestat GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO mergestat_role_user;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA mergestat TO mergestat_role_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA mergestat GRANT USAGE ON SEQUENCES TO mergestat_role_user;

-- Setup the mergestat_role_admin role
GRANT USAGE ON SCHEMA public TO mergestat_role_admin WITH GRANT OPTION;
GRANT USAGE ON SCHEMA mergestat TO mergestat_role_admin WITH GRANT OPTION;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO mergestat_role_admin WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA mergestat TO mergestat_role_admin WITH GRANT OPTION;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO mergestat_role_admin WITH GRANT OPTION;
ALTER DEFAULT PRIVILEGES IN SCHEMA mergestat GRANT ALL PRIVILEGES ON TABLES TO mergestat_role_admin WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA mergestat TO mergestat_role_admin WITH GRANT OPTION;
ALTER DEFAULT PRIVILEGES IN SCHEMA mergestat GRANT ALL PRIVILEGES ON SEQUENCES TO mergestat_role_admin WITH GRANT OPTION;

-- View to list all users in the database and their roles
-- Adapted from https://www.folkstalk.com/2022/09/postgres-list-users-and-roles-with-code-examples.html
-- noqa: disable=L011,L031,L051
CREATE OR REPLACE VIEW mergestat.pg_users AS (
    SELECT
        r.rolname,
        r.rolsuper,
        r.rolinherit,
        r.rolcreaterole,
        r.rolcreatedb,
        r.rolcanlogin,
        r.rolconnlimit,
        r.rolvaliduntil,
        r.rolreplication,
        r.rolbypassrls,
        ARRAY(SELECT b.rolname FROM pg_catalog.pg_auth_members m
            JOIN pg_catalog.pg_roles b ON (m.roleid = b.oid)
            WHERE m.member = r.oid) AS memberof
    FROM pg_catalog.pg_roles r
    WHERE r.rolname !~ '^pg_' AND r.rolcanlogin
    ORDER BY 1
);
-- noqa: enable=L011,L031,L051

-- Function to create new users, adopted from https://stackoverflow.com/questions/47934646/postgresql-creating-users-with-a-function
DROP FUNCTION IF EXISTS mergestat.add_user(NAME, TEXT);

CREATE OR REPLACE FUNCTION mergestat.add_user(username NAME, password TEXT)
RETURNS SMALLINT AS
$BODY$
DECLARE
BEGIN
    -- Create the user with the given password
    EXECUTE FORMAT('CREATE USER %I WITH PASSWORD %L', username, password);
    RETURN 1;
END;
$BODY$
LANGUAGE plpgsql STRICT VOLATILE SECURITY DEFINER;

-- Function to set the role of a user
DROP FUNCTION IF EXISTS mergestat.set_user_role(NAME, TEXT);

CREATE OR REPLACE FUNCTION mergestat.set_user_role(username NAME, role TEXT)
RETURNS SMALLINT AS
$BODY$
DECLARE
BEGIN
    -- first revoke all existing mergestat roles from the user
    EXECUTE FORMAT('REVOKE mergestat_role_readonly FROM %I', username);
    EXECUTE FORMAT('REVOKE mergestat_role_user FROM %I', username);
    EXECUTE FORMAT('REVOKE mergestat_role_admin FROM %I', username);
    CASE
        WHEN role = 'ADMIN' THEN
            EXECUTE FORMAT('GRANT mergestat_role_admin TO %I', username);
        WHEN role = 'USER' THEN
            EXECUTE FORMAT('GRANT mergestat_role_user TO %I', username);
        WHEN role = 'READ_ONLY' THEN
            EXECUTE FORMAT('GRANT mergestat_role_readonly TO %I', username);
        ELSE
            RAISE EXCEPTION 'Invalid role %', role;
    END CASE;
    RETURN 1;
END;
$BODY$
LANGUAGE plpgsql STRICT VOLATILE SECURITY DEFINER;

-- Function to drop users
DROP FUNCTION IF EXISTS mergestat.remove_user(NAME);

CREATE OR REPLACE FUNCTION mergestat.remove_user(username NAME)
RETURNS SMALLINT AS
$BODY$
DECLARE
BEGIN
    EXECUTE FORMAT('DROP OWNED BY %I', username); -- first drop all objects owned by the user
    EXECUTE FORMAT('DROP USER IF EXISTS %I', username);
    RETURN 1;
END;
$BODY$
LANGUAGE plpgsql STRICT VOLATILE SECURITY DEFINER;

-- Function to change user passwords
DROP FUNCTION IF EXISTS mergestat.update_user_password(NAME, TEXT);

CREATE OR REPLACE FUNCTION mergestat.update_user_password(username NAME, password TEXT)
RETURNS SMALLINT AS
$BODY$
DECLARE
BEGIN
    EXECUTE FORMAT('ALTER USER %I WITH PASSWORD %L', username, password);
    RETURN 1;
END;
$BODY$
LANGUAGE plpgsql STRICT VOLATILE SECURITY DEFINER;


SELECT mergestat.set_user_role('mergestat_admin', 'ADMIN');

COMMIT;
