package helper

import (
	"database/sql"
	"reflect"
	"testing"
	"time"

	"github.com/jackc/pgtype"
)

func TestInterfaceToSqlJSONB(t *testing.T) {
	type testArgs struct {
		value       interface{}
		description string
		want        pgtype.JSONB
		errCheck    func(*testing.T, error)
	}

	tests := []testArgs{{
		description: "successful interface to JSONB",
		value:       new(interface{}),
		want:        pgtype.JSONB{},
		errCheck:    nil,
	}}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {
			got, err := InterfaceToSqlJSONB(test.value)
			if err != nil {
				if test.errCheck != nil {
					test.errCheck(t, err)
				} else {
					t.Errorf("InterfaceToSqlJSONB unexpected error = %v", err)
				}
			}

			if reflect.TypeOf(got) != reflect.TypeOf(test.want) {
				t.Errorf("InterfaceToSqlJSONB = %v, want %v", got, test.want)
			}
		})
	}
}

func TestStringToSqlNullString(t *testing.T) {
	type testArgs struct {
		value       *string
		description string
		want        sql.NullString
		errCheck    func(*testing.T, error)
	}

	tests := []testArgs{{
		description: "successful string to sqlNullString",
		value:       new(string),
		want:        sql.NullString{},
		errCheck:    nil,
	}}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {
			if got := StringToSqlNullString(test.value); reflect.TypeOf(got) != reflect.TypeOf(test.want) {
				t.Errorf("StringToSqlNullString = %v, want %v", got, test.want)
			}
		})
	}
}

func TestDateToSqlNullTime(t *testing.T) {
	type testArgs struct {
		value       *time.Time
		description string
		want        sql.NullTime
		errCheck    func(*testing.T, error)
	}
	tests := []testArgs{{
		description: "successful date to sqlNullTime",
		value:       new(time.Time),
		want:        sql.NullTime{},
		errCheck:    nil,
	}}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {
			if got := DateToSqlNullTime(test.value); reflect.TypeOf(got) != reflect.TypeOf(test.want) {
				t.Errorf("DateToSqlNullTime = %v, want %v", got, test.want)
			}
		})
	}
}

func TestInt32ToSqlNullInt32(t *testing.T) {
	type testArgs struct {
		value       *int32
		description string
		want        sql.NullInt32
		errCheck    func(*testing.T, error)
	}

	tests := []testArgs{{
		description: "successful int32 to sqlNullInt32",
		value:       new(int32),
		want:        sql.NullInt32{},
		errCheck:    nil,
	}}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {
			if got := Int32ToSqlNullInt32(test.value); reflect.TypeOf(got) != reflect.TypeOf(test.want) {
				t.Errorf("Int32ToSqlNullInt32 = %v, want %v", got, test.want)
			}
		})
	}
}

func TestInt64ToSqlNullInt64(t *testing.T) {
	type testArgs struct {
		value       *int64
		description string
		want        sql.NullInt64
		errCheck    func(*testing.T, error)
	}

	tests := []testArgs{{
		description: "successful int64 to sqlNullInt32",
		value:       new(int64),
		want:        sql.NullInt64{},
		errCheck:    nil,
	}}

	for _, test := range tests {
		t.Run(test.description, func(t *testing.T) {
			if got := Int64ToSqlNullInt64(test.value); reflect.TypeOf(got) != reflect.TypeOf(test.want) {
				t.Errorf("Int32ToSqlNullInt64 = %v, want %v", got, test.want)
			}
		})
	}
}
