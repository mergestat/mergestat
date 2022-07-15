import { gql } from '@apollo/client'

export default gql`
  query getRepos {
    allRepos(orderBy: CREATED_AT_DESC) {
      totalCount
      nodes {
        id
        repo
        createdAt
        repoImportByRepoImportId {
          id
          type
        }
        repoSyncsByRepoId {
          totalCount
          nodes {
            syncType
            repoSyncQueuesByRepoSyncId(first: 1, orderBy: CREATED_AT_DESC) {
              totalCount
              nodes {
                id
                status
              }
            }
          }
        }
      }
    }
  }
`
