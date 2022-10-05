import { gql } from '@apollo/client'

const GET_REPO_SYNCS = gql`
  query getRepoSyncs($id: UUID!) {
    serviceAuthCredentials(filter: {type: {equalTo: "GITHUB_PAT"}}) {
      totalCount
    }
    repo(id: $id) {
      id
      repo
      isGithub
      tags
      repoImport {
        type
        settings
      }
      repoSyncs {
        nodes {
          id
          syncType
          repoSyncQueues(first: 15, orderBy: CREATED_AT_DESC) {
            nodes {
              id
              status
              startedAt
              doneAt
              hasError
            }
          }
        }
      }
    }
    repoSyncTypes {
      nodes {
        type
        description
        shortName
      }
    }
  }
`
export default GET_REPO_SYNCS
