package db

import (
	"context"
	"github.com/google/uuid"
	"github.com/jackc/pgx/v4"
	"github.com/pkg/errors"
	"os"
)

// FetchCredential fetches service credential for the given provider and type.
func (q *Queries) FetchCredential(ctx context.Context, provider uuid.UUID) (username, credential string, err error) {
	var secret = os.Getenv("ENCRYPTION_SECRET")

	const query = "SELECT username, token FROM mergestat.fetch_service_auth_credential($1, NULL, $2)"
	var row = q.db.QueryRow(ctx, query, provider, secret)
	if err = row.Scan(&username, &credential); err != nil && !errors.Is(err, pgx.ErrNoRows) {
		return "", "", err
	}

	if len(credential) <= 0 {
		// default to the `GITHUB_TOKEN` env var if nothing in the DB
		credential = os.Getenv("GITHUB_TOKEN")
	}

	return username, credential, nil
}
