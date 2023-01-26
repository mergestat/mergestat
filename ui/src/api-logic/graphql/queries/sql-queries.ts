import { gql } from '@apollo/client'

const EXECUTE_SQL = gql`
  query executeSQL($sql: String!, $disableReadOnly: Boolean, $trackHistory: Boolean) {
    execSQL(input: {query: $sql, disableReadOnly: $disableReadOnly, trackHistory: $trackHistory}) {
      rowCount
      columns
      rows
      queryRunningTimeMs
    }
  }
`

export { EXECUTE_SQL }
