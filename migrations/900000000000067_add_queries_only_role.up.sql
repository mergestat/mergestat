BEGIN;

BEGIN;
-- https://stackoverflow.com/questions/8092086/create-postgresql-role-user-if-it-doesnt-exist
-- idempotent role creation
DO
$do$
BEGIN
IF EXISTS (
  SELECT FROM pg_catalog.pg_roles
  WHERE  rolname = 'mergestat_role_queries_only') THEN
  RAISE NOTICE 'Role "mergestat_role_queries_only" already exists. Skipping.';
ELSE
  CREATE ROLE mergestat_role_queries_only;
END IF;
END
$do$;

-- Setup the mergestat_role_queries_only role
GRANT USAGE ON SCHEMA public TO mergestat_role_queries_only;
GRANT USAGE ON SCHEMA mergestat TO mergestat_role_queries_only;
GRANT USAGE ON SCHEMA sqlq TO mergestat_role_queries_only;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO mergestat_role_queries_only;
GRANT SELECT ON ALL TABLES IN SCHEMA mergestat TO mergestat_role_queries_only;
GRANT SELECT ON ALL TABLES IN SCHEMA sqlq TO mergestat_role_queries_only;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO mergestat_role_queries_only;
ALTER DEFAULT PRIVILEGES IN SCHEMA mergestat GRANT SELECT ON TABLES TO mergestat_role_queries_only;
ALTER DEFAULT PRIVILEGES IN SCHEMA sqlq GRANT SELECT ON TABLES TO mergestat_role_queries_only;

-- the mergestat_role_queries_only needs to be permitted to INSERT into the query_history table
-- the policy above will still prevent the mergestat_role_queries_only (any or user) from inserting a row
-- with a run_by value that is *not* the current_user
GRANT INSERT ON TABLE mergestat.query_history TO mergestat_role_queries_only;

-- GRANT the ability to mergestat_role_queries_only role to INSERT, UPDATE AND DELETE on table saved_queries.
GRANT INSERT, UPDATE, DELETE ON TABLE mergestat.saved_queries TO mergestat_role_queries_only;


-- Function to set the role of a user
DROP FUNCTION IF EXISTS mergestat.user_mgmt_set_user_role(NAME, TEXT);

CREATE OR REPLACE FUNCTION mergestat.user_mgmt_set_user_role(username NAME, role TEXT)
RETURNS SMALLINT AS
$BODY$
DECLARE
BEGIN
    -- first revoke all existing mergestat roles and CREATEROLE from the user
    EXECUTE FORMAT('REVOKE mergestat_role_demo FROM %I', username);
    EXECUTE FORMAT('REVOKE mergestat_role_readonly FROM %I', username);
    EXECUTE FORMAT('REVOKE mergestat_role_queries_only FROM %I', username);
    EXECUTE FORMAT('REVOKE mergestat_role_user FROM %I', username);
    EXECUTE FORMAT('REVOKE mergestat_role_admin FROM %I', username);    
    EXECUTE FORMAT('ALTER USER %I WITH NOCREATEROLE', username);
    CASE
        WHEN role = 'ADMIN' THEN
            EXECUTE FORMAT('GRANT mergestat_role_admin TO %I', username);
            EXECUTE FORMAT('ALTER USER %I WITH CREATEROLE', username);
        WHEN role = 'USER' THEN
            EXECUTE FORMAT('GRANT mergestat_role_user TO %I', username);
        WHEN role = 'QUERIES_ONLY' THEN
            EXECUTE FORMAT('GRANT mergestat_role_queries_only TO %I', username);
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

DROP VIEW mergestat.user_mgmt_pg_users;

-- View to list all users in the database and their roles
-- Adapted from https://www.folkstalk.com/2022/09/postgres-list-users-and-roles-with-code-examples.html
-- noqa: disable=L011,L031,L051,L063
CREATE OR REPLACE VIEW mergestat.user_mgmt_pg_users AS (
    WITH users AS (
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
    )
    -- Filter out users that are not in one of the the mergestat roles to reduce noise in the users management table.
    -- A CTE is used here so that we can access the memberof column in the WHERE clause.
    -- Maybe there's a better way in the future to filter out the users that are not in one of the mergestat roles
    -- (using a pattern match for instance, to allow for additional roles to be added without this view being updated)
    -- but this works for now.
    SELECT * FROM users
    WHERE (memberof && ARRAY['mergestat_role_admin', 'mergestat_role_user', 'mergestat_role_queries_only', 'mergestat_role_readonly']::name[])
        AND users.rolname != 'mergestat_admin'
);
-- noqa: enable=L011,L031,L051,L063

COMMIT;
