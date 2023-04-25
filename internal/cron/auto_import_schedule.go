package cron

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/mergestat/sqlq"
	"github.com/rs/zerolog"
)

// AutoImport provides a cron function that periodically schedules execution
// auto import jobs across the different providers.
func AutoImport(ctx context.Context, dur time.Duration, upstream *sql.DB) {
	type ImportJob = struct {
		ID         uuid.UUID
		Provider   uuid.UUID
		VendorName string
	}

	const query = `
WITH dequeued AS (
    UPDATE mergestat.repo_imports SET last_import_started_at = now()
    WHERE id IN (
        SELECT id FROM mergestat.repo_imports AS t
        WHERE
            (now() - t.last_import > t.import_interval OR t.last_import IS NULL)
            AND
            (now() - t.last_import_started_at > t.import_interval OR t.last_import_started_at IS NULL)
        ORDER BY last_import ASC
        FOR UPDATE SKIP LOCKED
    ) RETURNING id, created_at, updated_at, settings, last_import, import_interval, last_import_started_at, import_status, import_error, provider
)
SELECT dq.id, dq.provider, vd.name
FROM dequeued dq
    INNER JOIN mergestat.providers pr ON pr.id = dq.provider
    INNER JOIN mergestat.vendors vd ON vd.name = pr.vendor
`

	var log = zerolog.Ctx(ctx)
	var fn = func(ctx context.Context) (err error) {
		var tx *sql.Tx
		if tx, err = upstream.BeginTx(ctx, &sql.TxOptions{}); err != nil {
			return err
		}
		defer func() {
			if rbErr := tx.Rollback(); rbErr != nil && rbErr != sql.ErrTxDone {
				log.Err(rbErr).Msg("failed to rollback transaction")
			}
		}()

		// fetch a list of all configured imports that are due now
		var rows *sql.Rows
		if rows, err = tx.QueryContext(ctx, query); err != nil {
			return err
		}
		defer rows.Close()

		var imports []ImportJob
		for rows.Next() {
			var job ImportJob
			if err = rows.Scan(&job.ID, &job.Provider, &job.VendorName); err != nil {
				return err
			}
			imports = append(imports, job)
		}

		if err = rows.Close(); err != nil {
			return err
		}

		for _, job := range imports {
			var queue = sqlq.Queue(fmt.Sprintf("%s-%s", job.VendorName, job.Provider))
			if _, err = sqlq.Enqueue(tx, queue, newAutoImportJob(job.ID)); err != nil {
				return err
			}
		}

		return tx.Commit()
	}

	// reuse existing loop-select functionality in Basic()
	Basic(ctx, dur, func() {
		if err := fn(context.Background()); err != nil {
			log.Err(err).Msg("failed to enqueue auto imports")
		}
	})
}

func newAutoImportJob(id uuid.UUID) *sqlq.JobDescription {
	var p = struct{ ID uuid.UUID }{ID: id}
	var params, _ = json.Marshal(p)

	// run imports with -1 priority so they take top priority even ahead of sync now (priority 0)
	return sqlq.NewJobDesc("repos/auto-import", sqlq.WithParameters(params), sqlq.WithPriority(-1))
}
