import { gql } from '@apollo/client'

const EXECUTE_SQL = gql`
  query executeSQL($sql: String!, $disableReadOnly: Boolean) {
    execSQL(input: {query: $sql, disableReadOnly: $disableReadOnly}) {
      rowCount
      columns
      rows
    }
  }
`

export { EXECUTE_SQL }
