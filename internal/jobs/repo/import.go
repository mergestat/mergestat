package repo

import (
	"context"
	"encoding/json"
	"github.com/google/uuid"
	"time"

	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/mergestat/mergestat/internal/db"
	"github.com/mergestat/sqlq"
	"github.com/pkg/errors"
)

// AutoImport implements the githubRepository auto-import job to automatically
// sync githubRepository from user- or org- accounts.
func AutoImport(pool *pgxpool.Pool) sqlq.HandlerFunc {
	var queries = db.New(pool)

	return func(ctx context.Context, job *sqlq.Job) (err error) {
		// start sending periodic keep-alive pings!
		go job.SendKeepAlive(ctx, job.KeepAlive-(5*time.Second)) //nolint:errcheck

		var logger = job.Logger()
		var jobErrors error

		var params = struct{ ID uuid.UUID }{}
		if err = json.Unmarshal(job.Parameters, &params); err != nil {
			return err
		}

		// fetch a list of all configured imports that are due now
		var imp db.FetchImportJobRow
		if imp, err = queries.FetchImportJob(ctx, params.ID); err != nil {
			logger.Errorf("failed to fetch import job with id: %s", params.ID)
		}

		logger.Infof("executing import %s", imp.ID)

		var tx pgx.Tx // each import is executed within its own transaction
		if tx, err = pool.Begin(ctx); err != nil {
			return errors.Wrapf(err, "failed to start new database transaction")
		}

		var importStatus = db.UpdateImportStatusParams{Status: "RUNNING", ID: imp.ID}
		if err = queries.UpdateImportStatus(ctx, importStatus); err != nil {
			return errors.Wrapf(sqlq.ErrSkipRetry, "failed to update import status: %v", err)
		}

		var importError error
		if imp.VendorName == "github" {
			importError = handleGithubImport(ctx, queries.WithTx(tx), imp)
		} else if imp.VendorName == "bitbucket" {
			importError = handleBitbucketImport(ctx, queries.WithTx(tx), imp)
		} else if imp.VendorName == "gitlab" {
			importError = handleGitlabImport(ctx, queries.WithTx(tx), imp)
		} else {
			importError = errors.Errorf("unknown vendor: %s", imp.VendorName)
		}

		if importError != nil {
			logger.Warnf("import(%s) failed: %v", imp.ID, importError.Error())

			if err = tx.Rollback(ctx); err != nil {
				return errors.Wrap(err, "failed to rollback transaction")
			}

			jobErrors = errors.Wrap(importError, "failed to handle import")
		} else {
			// if the import was successful, commit the changes
			if err = tx.Commit(ctx); err != nil {
				return errors.Wrapf(err, "failed to commit database transaction")
			}
			logger.Infof("import(%s) was successful", imp.ID)
		}

		importStatus = db.UpdateImportStatusParams{Status: "SUCCESS", ID: imp.ID}
		if importError != nil {
			importStatus.Status, importStatus.Error = "FAILURE", importError.Error()
		}

		// import status updates happen outside the transaction in which the import was processed.
		// this is so that even if the transaction is marked as errored, we could still go ahead and update
		// the job status.
		if err = queries.UpdateImportStatus(ctx, importStatus); err != nil {
			return errors.Wrapf(sqlq.ErrSkipRetry, "failed to update import status: %v", err)
		}

		return jobErrors
	}
}

// adapted from https://stackoverflow.com/a/45428032/6611700
func difference(existing, new []string) []string {
	if len(existing) == 0 {
		return new // early exit path
	}

	var ex = make(map[string]struct{}, len(existing)) // set of all existing items
	for _, x := range existing {
		ex[x] = struct{}{}
	}

	var diff []string
	for _, x := range new {
		if _, found := ex[x]; !found {
			diff = append(diff, x)
		}
	}

	return diff
}
