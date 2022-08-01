import { gql } from '@apollo/client'

const GET_REPO_SYNCS = gql`
  query getRepoSyncs($id: UUID!) {
    repo(id: $id) {
      id
      repo
      isGithub
      repoSyncs {
        nodes {
          syncType
          repoSyncTypeBySyncType {
            description
          }
          repoSyncQueues(first: 15, orderBy: CREATED_AT_DESC) {
            nodes {
              id
              status
              createdAt
              doneAt
            }
          }
        }
      }
    }
  }
`
export default GET_REPO_SYNCS
