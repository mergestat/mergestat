--Only includes tables that contain a repo_id column
WITH tbl AS (SELECT
    information_schema.tables.table_schema,
    information_schema.tables.table_name
    FROM information_schema.tables
    INNER JOIN information_schema.columns ON information_schema.columns.table_name = information_schema.tables.table_name AND information_schema.columns.table_schema = information_schema.tables.table_schema
    WHERE information_schema.tables.table_name NOT LIKE 'pg_%'
        AND information_schema.tables.table_schema IN ('public', 'mergestat')
        AND information_schema.columns.column_name = 'repo_id'
)

SELECT
    tbl.table_schema,
    tbl.table_name,
    public.repos.repo,
    (xpath('/row/c/text()', query_to_xml(format('SELECT COUNT(*) AS c FROM %I.%I JOIN public.repos ON public.repos.id = %I.%I.repo_id WHERE public.repos.id = ''%s''', tbl.table_schema, tbl.table_name, tbl.table_schema, tbl.table_name, public.repos.id), FALSE, TRUE, '')))[1]::text::int AS count
FROM tbl CROSS JOIN public.repos
ORDER BY 1 DESC, 2 DESC, 4 DESC
