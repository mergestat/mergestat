BEGIN;
CREATE OR REPLACE FUNCTION mergestat.insert_default_sync(imported_repo_id_param uuid, sync_type_param text)
RETURNS BOOLEAN
AS
$$
begin
IF EXISTS (SELECT sync_type FROM mergestat.repo_syncs WHERE repo_id = imported_repo_id_param AND sync_type=sync_type_param) THEN
    RETURN TRUE;
ELSE 
    INSERT INTO mergestat.repo_syncs (repo_id, sync_type) VALUES(imported_repo_id_param,sync_type_param);
    RETURN FALSE;
END IF;
end;
$$ LANGUAGE plpgsql;

COMMIT;
