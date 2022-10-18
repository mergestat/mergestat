import { gql } from '@apollo/client'

const EXECUTE_SQL = gql`
  query executeSQL($sql: String!) {
    execSQL(query: $sql)
  }
`

export { EXECUTE_SQL }
