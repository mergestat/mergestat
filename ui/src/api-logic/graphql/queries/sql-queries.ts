import { gql } from '@apollo/client'

const EXECUTE_SQL = gql`
  query executeSQL($sql: String!, $disableReadOnly: Boolean) {
    execSQL(input: {query: $sql, disableReadOnly: $disableReadOnly}) {
      rowCount
      columns
      rows
      queryRunningTimeMs
    }
  }
`

export { EXECUTE_SQL }
