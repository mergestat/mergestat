-- SQL migration to add additional fields for Container-based syncs
BEGIN;

CREATE OR REPLACE FUNCTION jsonb_recursive_merge(a JSONB, b JSONB)
RETURNS JSONB LANGUAGE sql AS $$
SELECT
    jsonb_object_agg(
        coalesce(ka, kb),
        CASE
            WHEN va ISNULL THEN vb
            WHEN vb ISNULL THEN va
            WHEN jsonb_typeof(va) <> 'object' OR jsonb_typeof(vb) <> 'object' THEN vb
            ELSE jsonb_recursive_merge(va, vb) END
        )
    FROM jsonb_each(a) e1(ka, va)
    FULL JOIN jsonb_each(b) e2(kb, vb) ON ka = kb
$$;

COMMIT;
