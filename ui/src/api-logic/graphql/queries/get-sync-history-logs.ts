import { gql } from '@apollo/client'

const GET_SYNC_HISTORY_LOGS = gql`
  query getSyncHistoryLogs($repoId: UUID!, $syncId: UUID!) {
    repo(id: $repoId) {
      id
      repo
      providerByProvider {
        id
        name
        vendor
        settings
      }
      repoSyncs(condition: {id: $syncId}) {
        nodes {
          id
          syncType
          scheduleEnabled
          repoSyncTypeBySyncType {
            shortName
            description
            typeGroup
          }
          repoSyncQueues(first: 50, orderBy: CREATED_AT_DESC) {
            nodes {
              id
              status
              createdAt
              doneAt
              startedAt
              hasError
              warnings: repoSyncLogs(condition: {logType: "WARNING"}) {
                totalCount
              }
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

const GET_LOGS_OF_A_SYNC = gql`
  query getLogsOfSync($repoId: UUID!, $syncId: UUID!, , $logId: BigInt!) {
    repo(id: $repoId) {
      id
      repo
      providerByProvider {
        id
        name
        vendor
        settings
      }
      repoSyncs(condition: {id: $syncId}) {
        nodes {
          id
          syncType
          repoSyncTypeBySyncType {
            shortName
            description
          }
          repoSyncQueues(condition: {id: $logId}) {
            nodes {
              id
              status
              createdAt
              doneAt
              startedAt
              hasError
              warnings: repoSyncLogs(condition: {logType: "WARNING"}) {
                totalCount
              }
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

export { GET_SYNC_HISTORY_LOGS, GET_LOGS_OF_A_SYNC }
