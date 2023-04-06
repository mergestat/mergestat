import { gql } from '@apollo/client'

const GET_QUERY_HISTORY = gql`
  query getQueryHistory {
    queryHistories(orderBy: RUN_AT_DESC) {
      nodes {
        id
        runAt
        runBy
        query
      }
    }
  }
`

export { GET_QUERY_HISTORY }
