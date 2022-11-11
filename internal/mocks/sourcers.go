package mocks

//go:generate mockgen --destination mocks/Tx.go --package=mocks  --build_flags=--mod=mod github.com/jackc/pgx/v4 Tx
//go:generate mockgen -source interfaces.go -destination mocks/Pool.go -package=mocks
