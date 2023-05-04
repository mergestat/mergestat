import { gql } from '@apollo/client'

const EXECUTE_SQL = gql`
  query executeSQL($sql: String!, $disableReadOnly: Boolean, $trackHistory: Boolean, $rowLimit: Int) {
    execSQL(input: {query: $sql, disableReadOnly: $disableReadOnly, trackHistory: $trackHistory, rowLimit: $rowLimit}) {
      rowCount
      columns
      rows
      queryRunningTimeMs
    }
  }
`

export { EXECUTE_SQL }
