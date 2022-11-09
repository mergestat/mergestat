import { gql } from '@apollo/client'

const CURRENT_USER = gql`
  query currentUser {
    currentMergeStatUser
  }
`

const GET_DB_CONNECTION = gql`
  query getDatabaseConnection {
    databaseConnection {
      database
      host
      port
      user
    }
  }
`

const GET_PAT = gql`
  query getPAT {
    serviceAuthCredentials {
      totalCount
    }
    repos {
      totalCount
    }
  }
`

export { CURRENT_USER, GET_DB_CONNECTION, GET_PAT }
