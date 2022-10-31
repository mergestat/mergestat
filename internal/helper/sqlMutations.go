package helper

import (
	"database/sql"
	"encoding/json"
	"time"

	"github.com/jackc/pgtype"
)

// JSONNullInt64 is a helper for marshalling sql.NullInt64 values into JSON
type JSONNullInt64 struct {
	sql.NullInt64
}

func (v JSONNullInt64) MarshalJSON() ([]byte, error) {
	if v.Valid {
		return json.Marshal(v.Int64)
	} else {
		return json.Marshal(nil)
	}
}

// JSONNullString is a helper for marshalling sql.NullString values into JSON
type JSONNullString struct {
	sql.NullString
}

func (v JSONNullString) MarshalJSON() ([]byte, error) {
	if v.Valid {
		return json.Marshal(v.String)
	} else {
		return json.Marshal(nil)
	}
}

func InterfaceToSqlJSONB(value interface{}) (pgtype.JSONB, error) {
	var bytes []byte
	var err error

	if value == nil {
		return pgtype.JSONB{
			Bytes:  []byte(""),
			Status: pgtype.Present,
		}, nil
	}

	if bytes, err = json.Marshal(&value); err != nil {
		return pgtype.JSONB{}, err
	}

	return pgtype.JSONB{
		Bytes:  bytes,
		Status: pgtype.Present,
	}, nil

}

func StringToSqlNullString(v *string) sql.NullString {
	sqlNullString := sql.NullString{}
	sqlNullString.Valid = true
	if v == nil {
		v = new(string)
		sqlNullString.Valid = false
	}

	sqlNullString.String = *v

	return sqlNullString
}

func DateToSqlNullTime(v *time.Time) sql.NullTime {
	sqlNullTime := sql.NullTime{}
	sqlNullTime.Valid = true

	if v.IsZero() {
		v = &time.Time{}
		sqlNullTime.Valid = false
	}

	sqlNullTime.Time = *v
	return sqlNullTime
}

func Int32ToSqlNullInt32(v *int32) sql.NullInt32 {
	sqlNullInt32 := sql.NullInt32{}
	sqlNullInt32.Valid = true

	if v == nil {
		v = new(int32)
		sqlNullInt32.Valid = false
	}

	sqlNullInt32.Int32 = *v

	return sqlNullInt32
}

func Int64ToSqlNullInt64(v *int64) sql.NullInt64 {
	sqlNullInt64 := sql.NullInt64{}
	sqlNullInt64.Valid = true

	if v == nil {
		v = new(int64)
		sqlNullInt64.Valid = false
	}

	sqlNullInt64.Int64 = *v

	return sqlNullInt64
}
