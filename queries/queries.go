package queries

import (
	"github.com/jackc/pgx/v4"
	"github.com/mergestat/mergestat/internal/db"
)

type Querier interface {
	db.Querier
	WithTx(tx pgx.Tx) Querier
}

type Queries struct {
	*db.Queries
}

func (q *Queries) WithTx(tx pgx.Tx) Querier {
	return &Queries{
		Queries: q.Queries.WithTx(tx),
	}
}

func NewQuerier(q *db.Queries) Querier {
	return &Queries{
		Queries: q,
	}
}
