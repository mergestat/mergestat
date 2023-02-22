import { gql } from '@apollo/client'

const GET_GIT_SOURCES_LIST = gql`
  query getGitSourcesList($search: String!, $first: Int, $offset: Int) {
    all: providers {
      totalCount
    }
    providers(
      filter: {name: {includesInsensitive: $search}}
      first: $first
      offset: $offset
    ) {
      totalCount
      nodes {
        id
        name
        description
        createdAt
        settings
        vendor
        reposByProvider {
          totalCount
        }
      }
    }
  }
`

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

export { GET_GIT_SOURCES_LIST, GET_GIT_SOURCES }
