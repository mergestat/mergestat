BEGIN;

-- View to list all users in the database
CREATE OR REPLACE VIEW mergestat.pg_users AS (
    SELECT * FROM pg_catalog.pg_user
);

-- Function to create new users, adopted from https://stackoverflow.com/questions/47934646/postgresql-creating-users-with-a-function
DROP FUNCTION IF EXISTS mergestat.add_user(NAME, TEXT);

CREATE OR REPLACE FUNCTION mergestat.add_user(username NAME, password TEXT)
RETURNS smallint AS
$BODY$
DECLARE
BEGIN
    -- Create the user with the given password
    EXECUTE FORMAT('CREATE USER %I WITH PASSWORD %L', username, password);

    -- Grant the user access to the public schema
    EXECUTE FORMAT('GRANT USAGE ON SCHEMA public TO %I', username);
    EXECUTE FORMAT('GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO %I', username);
    EXECUTE FORMAT('GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO %I', username);
    EXECUTE FORMAT('ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON TABLES TO %I', username); -- Ensure all tables and sequences created in the future have all privileges
    EXECUTE FORMAT('ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON SEQUENCES TO %I', username);

    -- Grant the user access to the mergestat schema
    EXECUTE FORMAT('GRANT USAGE ON SCHEMA mergestat TO %I', username);
    EXECUTE FORMAT('GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA mergestat TO %I', username);
    EXECUTE FORMAT('GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA mergestat TO %I', username);
    EXECUTE FORMAT('ALTER DEFAULT PRIVILEGES IN SCHEMA mergestat GRANT ALL PRIVILEGES ON TABLES TO %I', username);
    EXECUTE FORMAT('ALTER DEFAULT PRIVILEGES IN SCHEMA mergestat GRANT ALL PRIVILEGES ON SEQUENCES TO %I', username);

    RETURN 1;
END;
$BODY$
LANGUAGE plpgsql STRICT VOLATILE SECURITY DEFINER
;

-- Function to drop users
DROP FUNCTION IF EXISTS mergestat.remove_user(NAME);

CREATE OR REPLACE FUNCTION mergestat.remove_user(username NAME)
RETURNS smallint AS
$BODY$
DECLARE
BEGIN
    EXECUTE FORMAT('DROP OWNED BY %I', username); -- First drop all objects owned by the user
    EXECUTE FORMAT('DROP USER IF EXISTS %I', username);
    RETURN 1;
END;
$BODY$
LANGUAGE plpgsql STRICT VOLATILE SECURITY DEFINER
;

-- Function to change user passwords
DROP FUNCTION IF EXISTS mergestat.update_user_password(NAME, TEXT);

CREATE OR REPLACE FUNCTION mergestat.update_user_password(username NAME, password TEXT)
RETURNS smallint AS
$BODY$
DECLARE
BEGIN
    EXECUTE FORMAT('ALTER USER %I WITH PASSWORD %L', username, password);
    RETURN 1;
END;
$BODY$
LANGUAGE plpgsql STRICT VOLATILE SECURITY DEFINER
;

COMMIT;
