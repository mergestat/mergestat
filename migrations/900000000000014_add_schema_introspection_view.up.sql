BEGIN;

-- Creates a view that can be used to introspect the schema of the database
-- i.e. returns a list of tables, columns and their respective types (and other metadata).
-- This is useful for the schema introspection feature in the UI.
CREATE OR REPLACE VIEW mergestat.schema_introspection AS (
    SELECT
        t.table_schema AS schema,
        t.table_name,
        t.table_type,
        c.column_name,
        c.ordinal_position,
        c.is_nullable,
        c.data_type,
        c.udt_name,
        pg_catalog.col_description(format('%s.%s', c.table_schema, c.table_name)::regclass::oid, c.ordinal_position) as column_description
    FROM information_schema.tables AS t
    INNER JOIN information_schema.columns AS c ON (t.table_name = c.table_name AND t.table_schema = c.table_schema)
    WHERE t.table_schema IN ('public', 'mergestat')
);

COMMIT;
