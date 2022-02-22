package repos

import (
	"database/sql"
	"encoding/json"
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
