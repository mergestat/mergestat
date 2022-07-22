import { gql } from '@apollo/client'

const GET_REPOS = gql`
  query getRepos {
    allRepos(orderBy: CREATED_AT_DESC) {
      totalCount
      nodes {
        id
        repo
        createdAt
        isGithub
        tags
        githubRepoInfoByRepoId {
          owner
          name
          openGraphImageUrl
          updatedAt
          homepageUrl
        }
        repoSyncsByRepoId {
          totalCount
          nodes {
            syncType
            repoSyncQueuesByRepoSyncId(first: 1, orderBy: CREATED_AT_DESC) {
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
