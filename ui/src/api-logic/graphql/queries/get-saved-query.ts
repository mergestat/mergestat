import { gql } from '@apollo/client'

const GET_SAVED_QUERY_LIST = gql`
  query getSavedQueryList($search: String!, $first: Int, $offset: Int) {
    all: savedQueries {
      totalCount
    }
    savedQueries(
      filter: {name: {includesInsensitive: $search}}
      first: $first
      offset: $offset
    ) {
      totalCount
      nodes {
        id
        createdAt
        createdBy
        name
        description
      }
    }
  }
`

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

export { GET_SAVED_QUERY_LIST, GET_SAVED_QUERY }
