import { gql } from '@apollo/client'

const GET_GIT_SOURCES = gql`
  query getGitSources {
    providers {
      nodes {
        id
        name
        description
        createdAt
        settings
        vendor
      }
    }
  }
`

export { GET_GIT_SOURCES }
