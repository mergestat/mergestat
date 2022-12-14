import { gql } from '@apollo/client'

const EXECUTE_SQL = gql`
  query executeSQL($sql: String!) {
    execSQL(input: { query: $sql } ) {
      rowCount
      columns
      rows
    }
  }
`

export { EXECUTE_SQL }
