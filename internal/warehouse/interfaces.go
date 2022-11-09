package warehouse

import (
	"context"

	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
)

type FakePool struct {
	dbpool *pgxpool.Pool
}

type FakePoolInterface interface {
	BeginTx(ctx context.Context, txOptions pgx.TxOptions) (pgx.Tx, error)
}

func (p *FakePool) BeginTx(ctx context.Context, txOptions pgx.TxOptions) (pgx.Tx, error) {
	return p.dbpool.BeginTx(ctx, txOptions)
}
