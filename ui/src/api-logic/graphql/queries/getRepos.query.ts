import { gql } from '@apollo/client'

const GET_REPOS = gql`
  query getRepos {
    repos(orderBy: CREATED_AT_DESC) {
      totalCount
      nodes {
        id
        repo
        createdAt
        isGithub
        tags
        githubRepoInfo {
          owner
          name
          openGraphImageUrl
          updatedAt
          homepageUrl
        }
        repoSyncs {
          totalCount
          nodes {
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
