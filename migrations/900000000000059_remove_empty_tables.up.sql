BEGIN;
-- code to drop empty tables in public schema as tables are now declared by their coresponding sync
DO $$
DECLARE empty_tables_sql TEXT;
BEGIN    
    WITH empty_table_candidates AS (
        SELECT relname as table_name
        FROM pg_class
        JOIN pg_namespace ON (pg_class.relnamespace = pg_namespace.oid)
        WHERE 
            -- has not recorded pages however this can be wrong when there are just a few rows so we have to count rows in the next CTE
            relpages = 0 
            AND
            -- only select tables
            relam <> 0
            AND 
            pg_namespace.nspname = 'public'
            AND 
            relname NOT IN ('repos', 'schema_migrations', 'schema_migrations_history', 'sqlq_migrations')
    ),
    empty_table_candidates_counts AS (
        -- do actual row counts to make sure the tables are empty
        SELECT
            empty_table_candidates.table_name,
            (xpath('/row/c/text()', query_to_xml(format('select count(*) as c from %I.%I', 'public', empty_table_candidates.table_name), FALSE, TRUE, '')))[1]::text::int AS count
        FROM empty_table_candidates
    ),
    empty_tables AS (
        -- only select tables that are empty
        SELECT
            table_name
        FROM empty_table_candidates_counts
        WHERE count = 0
    )
    SELECT
        -- CASCADE to drop related views
        string_agg(format('DROP TABLE %I.%I CASCADE;', 'public', table_name), chr(10))
    INTO empty_tables_sql
    FROM empty_tables;
    
    -- drop empty tables and run SELECT statement if there is nothing to drop
    EXECUTE COALESCE(empty_tables_sql, 'SELECT ''Nothing to drop''');
END
$$;
COMMIT;
