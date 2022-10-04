WITH tbl AS (SELECT
    table_schema,
    table_name
    FROM information_schema.tables
    WHERE table_name NOT LIKE 'pg_%'
        AND table_schema IN ('public', 'mergestat')
        AND table_name != 'schema_migrations'
)

SELECT
    table_schema,
    table_name,
    (xpath('/row/c/text()', query_to_xml(format('select count(*) as c from %I.%I', table_schema, table_name), FALSE, TRUE, '')))[1]::text::int AS count
FROM tbl
ORDER BY 1 DESC, 3 DESC
