import { gql } from '@apollo/client'

const ADD_SAVED_QUERY = gql`
  mutation addSavedQuery($createdBy: String!, $createdAt: Datetime!, $name: String!, $description: String!, $sql: String!, $metadata: JSON) {
    createSavedQuery(
      input: {savedQuery: {createdBy: $createdBy, createdAt: $createdAt, name: $name, description: $description, sql: $sql, metadata: $metadata}}
    ) {
      savedQuery {
        id
        name
      }
    }
  }
`

const UPDATE_SAVED_QUERY = gql`
  mutation updateSavedQuery($id: UUID!, $name: String, $description: String, $sql: String) {
    updateSavedQuery(
      input: {patch: {name: $name, description: $description, sql: $sql}, id: $id}
    ) {
      savedQuery {
        id
        name
        description
        sql
      }
    }
  }
`

export { ADD_SAVED_QUERY, UPDATE_SAVED_QUERY }
