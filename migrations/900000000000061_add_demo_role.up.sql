BEGIN;
-- https://stackoverflow.com/questions/8092086/create-postgresql-role-user-if-it-doesnt-exist
-- idempotent role creation
DO
$do$
BEGIN
IF EXISTS (
  SELECT FROM pg_catalog.pg_roles
  WHERE  rolname = 'mergestat_role_demo') THEN
  RAISE NOTICE 'Role "mergestat_role_demo" already exists. Skipping.';
ELSE
  CREATE ROLE mergestat_role_demo;
END IF;
END
$do$;

-- Setup the mergestat_role_demo role
GRANT USAGE ON SCHEMA public TO mergestat_role_demo;
GRANT USAGE ON SCHEMA mergestat TO mergestat_role_demo;
GRANT USAGE ON SCHEMA sqlq TO mergestat_role_demo;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO mergestat_role_demo;
GRANT SELECT ON ALL TABLES IN SCHEMA mergestat TO mergestat_role_demo;
GRANT SELECT ON ALL TABLES IN SCHEMA sqlq TO mergestat_role_demo;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO mergestat_role_demo;
ALTER DEFAULT PRIVILEGES IN SCHEMA mergestat GRANT SELECT ON TABLES TO mergestat_role_demo;
ALTER DEFAULT PRIVILEGES IN SCHEMA sqlq GRANT SELECT ON TABLES TO mergestat_role_demo;

-- the mergestat_role_demo needs to be permitted to INSERT into the query_history table
-- the policy above will still prevent the mergestat_role_demo (any or user) from inserting a row
-- with a run_by value that is *not* the current_user
GRANT INSERT ON TABLE mergestat.query_history TO mergestat_role_demo;


-- Function to set the role of a user
DROP FUNCTION IF EXISTS mergestat.user_mgmt_set_user_role(NAME, TEXT);

CREATE OR REPLACE FUNCTION mergestat.user_mgmt_set_user_role(username NAME, role TEXT)
RETURNS SMALLINT AS
$BODY$
DECLARE
BEGIN
    -- first revoke all existing mergestat roles and CREATEROLE from the user
    EXECUTE FORMAT('REVOKE mergestat_role_readonly FROM %I', username);
    EXECUTE FORMAT('REVOKE mergestat_role_user FROM %I', username);
    EXECUTE FORMAT('REVOKE mergestat_role_admin FROM %I', username);
    EXECUTE FORMAT('REVOKE mergestat_role_demo FROM %I', username);
    EXECUTE FORMAT('ALTER USER %I WITH NOCREATEROLE', username);
    CASE
        WHEN role = 'ADMIN' THEN
            EXECUTE FORMAT('GRANT mergestat_role_admin TO %I', username);
            EXECUTE FORMAT('ALTER USER %I WITH CREATEROLE', username);
        WHEN role = 'USER' THEN
            EXECUTE FORMAT('GRANT mergestat_role_user TO %I', username);
        WHEN role = 'READ_ONLY' THEN
            EXECUTE FORMAT('GRANT mergestat_role_readonly TO %I', username);
        WHEN role = 'DEMO' THEN
            EXECUTE FORMAT('GRANT mergestat_role_demo TO %I', username);
        ELSE
            RAISE EXCEPTION 'Invalid role %', role;
    END CASE;
    RETURN 1;
END;
$BODY$
LANGUAGE plpgsql STRICT VOLATILE;

-- Function to change user passwords
DROP FUNCTION IF EXISTS mergestat.user_mgmt_update_user_password(NAME, TEXT);

CREATE OR REPLACE FUNCTION mergestat.user_mgmt_update_user_password(username NAME, password TEXT)
RETURNS SMALLINT AS
$BODY$
DECLARE
BEGIN
    --Check if user has role of mergestat_role_demo and raise and error if they do
    IF EXISTS (
        SELECT 
            a.oid AS user_role_id
            , a.rolname AS user_role_name
            , b.roleid AS other_role_id
            , c.rolname AS other_role_name
        FROM pg_roles a
        INNER JOIN pg_auth_members b ON a.oid=b.member
        INNER JOIN pg_roles c ON b.roleid=c.oid 
        WHERE a.rolname = username AND c.rolname = 'mergestat_role_demo'
    )
    THEN RAISE EXCEPTION 'permission denied to change password';
    END IF;

    EXECUTE FORMAT('ALTER USER %I WITH PASSWORD %L', username, password);
    RETURN 1;
END;
$BODY$
LANGUAGE plpgsql STRICT VOLATILE;

COMMIT;
