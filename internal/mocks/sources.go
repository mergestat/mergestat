package mocks

//go:generate mockgen -source ../pool/pool.go -destination mock_pool.go -package=mocks
//go:generate mockgen -source ../../queries/queries.go -destination mock_queries.go -package=mocks
//go:generate mockgen --destination mock_tx.go --package=mocks  --build_flags=--mod=mod github.com/jackc/pgx/v4 Tx
