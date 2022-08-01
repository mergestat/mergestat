import { gql } from '@apollo/client'

const GET_SYNC_HISTORY_LOGS = gql`
  query getSyncHistoryLogs($repoId: UUID!, $syncId: UUID!) {
    repo(id: $repoId) {
      id
      repo
      isGithub
      repoSyncs(condition: {id: $syncId}) {
        nodes {
          id
          syncType
          repoSyncTypeBySyncType {
            description
          }
          repoSyncQueues(first: 50, orderBy: CREATED_AT_DESC) {
            nodes {
              id
              status
              createdAt
              doneAt
              startedAt
              repoSyncLogs {
                totalCount
                nodes {
                  logType
                  message
                  createdAt
                }
              }
            }
          }
        }
      }
    }
  }
`
export default GET_SYNC_HISTORY_LOGS
