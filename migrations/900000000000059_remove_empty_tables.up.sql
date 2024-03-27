BEGIN;
-- code to drop empty tables in public schema as tables are now declared by their corresponding sync
DO $$
DECLARE empty_tables_sql TEXT;
BEGIN    
    WITH empty_table_candidates AS (
        SELECT relname as table_name
        FROM pg_class
        JOIN pg_namespace ON (pg_class.relnamespace = pg_namespace.oid)
        WHERE 
            -- only select tables
            relkind = 'r'
            AND 
            pg_namespace.nspname = 'public'
            AND 
            relname NOT IN ('repos', 'schema_migrations', 'schema_migrations_history', 'sqlq_migrations')
    ),
    empty_table_candidates_counts AS (
        -- checking all tables but only looking for one row to make this check quick
        SELECT
            empty_table_candidates.table_name,
            (xpath('/row/c/text()', query_to_xml(format('select count(*) as c from %I.%I LIMIT 1', 'public', empty_table_candidates.table_name), FALSE, TRUE, '')))[1]::text::int AS count
        FROM empty_table_candidates
    ),
    empty_tables AS (
        SELECT
            table_name
        FROM empty_table_candidates_counts
        WHERE count = 0
    )
    SELECT
        -- CASCADE to delete related views
        string_agg(format('DROP TABLE %I.%I CASCADE;', 'public', table_name), chr(10))
    INTO empty_tables_sql
    FROM empty_tables;
    
    EXECUTE COALESCE(empty_tables_sql, 'SELECT ''Nothing to delete''');
END
$$;
COMMIT;
