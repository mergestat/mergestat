import { gql } from '@apollo/client'

const GET_REPOS = gql`
  query getRepos($search: String!) {
    serviceAuthCredentials(filter: {type: {equalTo: "GITHUB_PAT"}}) {
      totalCount
    }
    repoImports(filter: { lastImport: { isNull: true } }) {
      totalCount
    }
    reposBD: repos {
      totalCount
    }
    repos(orderBy: CREATED_AT_DESC, filter: {repo: {includes: $search}}) {
      totalCount
      nodes {
        id
        repo
        createdAt
        isGithub
        tags
        repoImport {
          type
          settings
        }
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
