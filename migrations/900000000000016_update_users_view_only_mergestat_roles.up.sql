BEGIN;

DROP VIEW mergestat.user_mgmt_pg_users;

-- View to list all users in the database and their roles
-- Adapted from https://www.folkstalk.com/2022/09/postgres-list-users-and-roles-with-code-examples.html
-- noqa: disable=L011,L031,L051
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
    SELECT * FROM users WHERE (memberof && ARRAY['mergestat_role_admin', 'mergestat_role_user', 'mergestat_role_readonly']::name[]);
);
-- noqa: enable=L011,L031,L051

COMMIT;
