import { gql } from '@apollo/client'

const ADD_SAVED_QUERY = gql`
  mutation addSavedQuery($createdBy: String!, $createdAt: Datetime!, $description: String!, $name: String!, $sql: String!, $metadata: JSON) {
    createSavedQuery(
      input: {savedQuery: {createdBy: $createdBy, name: $name, description: $description, sql: $sql, metadata: $metadata, createdAt: $createdAt}}
    ) {
      savedQuery {
        id
        name
      }
    }
  }
`

export { ADD_SAVED_QUERY }
