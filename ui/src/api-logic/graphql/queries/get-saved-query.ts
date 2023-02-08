import { gql } from '@apollo/client'

const GET_SAVED_QUERY = gql`
  query getSavedQuery($id: UUID!) {
    savedQuery(id: $id) {
      createdAt
      createdBy
      name
      description
      sql
      metadata
    }
  }
`

export { GET_SAVED_QUERY }
