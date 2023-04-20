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
  mutation updateSavedQuery($id: UUID!, $name: String, $description: String, $sql: String, $metadata: JSON) {
    updateSavedQuery(
      input: {patch: {name: $name, description: $description, sql: $sql, metadata: $metadata}, id: $id}
    ) {
      savedQuery {
        id
        name
        description
        sql
        metadata
      }
    }
  }
`

const REMOVE_SAVED_QUERY = gql`
  mutation removeSavedQuery($id: UUID!) {
    deleteSavedQuery(input: {id: $id}) {
      deletedSavedQueryNodeId
    }
  }
`

export { ADD_SAVED_QUERY, UPDATE_SAVED_QUERY, REMOVE_SAVED_QUERY }
