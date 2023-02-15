import { gql } from '@apollo/client'

const GET_SCHEMA_INFO = gql`
  query getSchema($search: SqlIdentifier) {
    schemaIntrospections(
      orderBy: SCHEMA_ASC
      filter: {
        or: [
          {schema: {includesInsensitive: $search}},
          {tableName: {includesInsensitive: $search}}, 
          {columnName: {includesInsensitive: $search}}
        ]
      }
    ) {
      nodes {
        schema
        tableName
        columnName
        columnDescription
      }
    }
  }
`

export { GET_SCHEMA_INFO }
