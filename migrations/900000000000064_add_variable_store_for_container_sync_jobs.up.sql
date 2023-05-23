BEGIN;

CREATE EXTENSION IF NOT EXISTS citext;

-- Table: mergestat.sync_variables
-- This table stores encrypted variables used by container sync.
CREATE TABLE mergestat.sync_variables (
    repo_id UUID NOT NULL,      -- the repo this variable belongs to
    key CITEXT NOT NULL,        -- the name of the variable, unique within the repository
    value BYTEA,                -- the encrypted value

    FOREIGN KEY (repo_id) REFERENCES public.repos (id),
    PRIMARY KEY (repo_id, key)
);


-- encrypt and store the given variable
CREATE OR REPLACE FUNCTION mergestat.add_sync_variable(repo_id uuid, key text, value text, secret text)
RETURNS mergestat.SYNC_VARIABLES AS $$
DECLARE _inserted_row mergestat.sync_variables;
BEGIN
    INSERT INTO mergestat.sync_variables(repo_id, key, value)
        VALUES (repo_id, key, pgp_sym_encrypt(value, secret)) RETURNING * INTO _inserted_row;

    RETURN _inserted_row;
END;
$$ LANGUAGE plpgsql;

-- decrypt and fetch the named variable for the given repository
CREATE OR REPLACE FUNCTION mergestat.fetch_sync_variable(uuid, text, text)
RETURNS TABLE(repo_id UUID, key TEXT, value TEXT) AS $$
BEGIN
    RETURN QUERY SELECT var.repo_id, var.key::text, pgp_sym_decrypt(var.value, $3)
        FROM mergestat.sync_variables var
    WHERE var.repo_id = $1 AND var.key = $2;
END;
$$ LANGUAGE plpgsql;

COMMIT;