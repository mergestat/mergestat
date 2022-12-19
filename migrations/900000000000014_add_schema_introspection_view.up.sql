BEGIN;

-- Creates a view that can be used to introspect the schema of the database
-- i.e. returns a list of tables, columns and their respective types (and other metadata).
-- This is useful for the schema introspection feature in the UI.
CREATE OR REPLACE VIEW mergestat.schema_introspection AS (
    SELECT
        information_schema.tables.table_schema AS schema,
        information_schema.tables.table_name,
        information_schema.tables.table_type,
        information_schema.columns.column_name,
        information_schema.columns.ordinal_position,
        information_schema.columns.is_nullable,
        information_schema.columns.data_type,
        information_schema.columns.udt_name,
        pg_catalog.col_description(format('%s.%s', information_schema.columns.table_schema, information_schema.columns.table_name)::regclass::oid, information_schema.columns.ordinal_position) as column_description
    FROM information_schema.tables
    INNER JOIN information_schema.columns ON (information_schema.tables.table_name = information_schema.columns.table_name AND information_schema.tables.table_schema = information_schema.columns.table_schema)
    WHERE information_schema.tables.table_schema IN ('public', 'mergestat')
);

COMMIT;
