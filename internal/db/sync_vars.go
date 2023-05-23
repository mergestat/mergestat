package db

import (
	"context"
	"database/sql"
	"github.com/google/uuid"
	"github.com/jackc/pgx/v4"
	"os"
)

// FetchSyncVars fetches all configured variables for the given sync job.
func (q *Queries) FetchSyncVars(ctx context.Context, sync uuid.UUID) (_ map[string]string, err error) {
	var secret = os.Getenv("ENCRYPTION_SECRET")
	var result = make(map[string]string)

	const query = `
SELECT decoded.key, decoded.value
FROM mergestat.sync_variables vars, mergestat.container_syncs sync,
	LATERAL mergestat.fetch_sync_variable(vars.repo_id, vars.key, $2) decoded
WHERE sync.id = $1 AND vars.repo_id = sync.repo_id`

	var rows pgx.Rows
	if rows, err = q.db.Query(ctx, query, sync, secret); err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var key, value sql.NullString
		if err = rows.Scan(&key, &value); err != nil {
			return nil, err
		}
		result[key.String] = value.String
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return result, nil
}
