import { gql } from '@apollo/client'

const GET_REPO_SYNCS = gql`
  query getRepoSyncs($id: UUID!) {
    repo(id: $id) {
      id
      repo
      isGithub
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
