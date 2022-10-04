import { gql } from '@apollo/client'

const GET_REPOS = gql`
  query getRepos($search: String!) {
    serviceAuthCredentials(filter: {type: {equalTo: "GITHUB_PAT"}}) {
      totalCount
    }
    repoImports(filter: { lastImport: { isNull: true } }) {
      totalCount
    }
    allRepos: repos {
      totalCount
    }
    repos(orderBy: [CREATED_AT_DESC, REPO_DESC], filter: {repo: {includes: $search}}) {
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
        repoSyncs(orderBy: SYNC_TYPE_ASC) {
          totalCount
          nodes {
            id
            syncType
            repoSyncTypeBySyncType {
              shortName
            }
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
