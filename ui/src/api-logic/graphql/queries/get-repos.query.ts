import { gql } from '@apollo/client'

const GET_REPOS = gql`
  query getRepos($search: String!) {
    repos(orderBy: CREATED_AT_DESC, filter: {repo: {includes: $search}}) {
      totalCount
      nodes {
        id
        repo
        createdAt
        isGithub
        tags
        repoSyncs {
          totalCount
          nodes {
            id
            syncType
            repoSyncQueues(first: 1, orderBy: CREATED_AT_DESC) {
              nodes {
                id
                status
                createdAt
              }
            }
          }
        }
      }
    }
  }
`
export default GET_REPOS
