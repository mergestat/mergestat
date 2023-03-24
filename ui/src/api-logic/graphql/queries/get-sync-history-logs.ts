import { gql } from '@apollo/client'

const GET_SYNC_HISTORY_LOGS = gql`
  query getSyncHistoryLogs($repoId: UUID!, $syncId: UUID!) {
    repo(id: $repoId) {
      id
      repo
      provider: providerByProvider {
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
  query getLogsOfSync($repoId: UUID!, $syncId: UUID!, $logId: BigInt!) {
    repo(id: $repoId) {
      id
      repo
      provider: providerByProvider {
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

const GET_CONTAINER_BASIC_DATA = gql`
  query getContainerBasicData($repoId: UUID!, $syncId: UUID!) {
    repo(id: $repoId) {
      id
      repo
      provider: providerByProvider {
        id
        name
        vendor
        settings
      }
      containerSyncs(condition: {id: $syncId}) {
        nodes {
          image {
            id
            name
            description
          }
        }
      }
    }
  }
`

const GET_CONTAINER_SYNC_HISTORY_LOGS = gql`
  query getContainerSyncHistoryLogs($repoId: UUID!, $syncId: UUID!, $first: Int, $offset: Int) {
    repo(id: $repoId) {
      id
      repo
      containerSyncs(condition: {id: $syncId}) {
        nodes {
          id
          parameters
          image {
            id
            name
            description
          }
          repo {
            id
          }
          schedule: containerSyncSchedulesBySyncId {
            nodes {
              id
            }
          }
          executions: containerSyncExecutionsBySyncId(first: $first, offset: $offset, orderBy: CREATED_AT_DESC) {
            totalCount
            nodes {
              job {
                id
                status
                queue
                createdAt
                startedAt
                completedAt
                errors: jobLogsByJob(condition: {level: ERROR}) {
                  totalCount
                }
                warnings: jobLogsByJob(condition: {level: WARN}) {
                  totalCount
                }
                logs: jobLogsByJob(orderBy: LOGGED_AT_ASC) {
                  totalCount
                  nodes {
                    id
                    level
                    message
                    loggedAt
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const GET_LOGS_OF_A_CONTAINER_SYNC = gql`
  query getLogsOfContainerSync($repoId: UUID!, $syncId: UUID!, $jobId: UUID!) {
    repo(id: $repoId) {
      id
      repo
      containerSyncs(condition: {id: $syncId}) {
        nodes {
          id
          parameters
          image {
            id
            name
            description
          }
          repo {
            id
          }
          schedule: containerSyncSchedulesBySyncId {
            nodes {
              id
            }
          }
          executions: containerSyncExecutionsBySyncId(condition: {jobId: $jobId}) {
            totalCount
            nodes {
              job {
                id
                status
                queue
                createdAt
                startedAt
                completedAt
                errors: jobLogsByJob(condition: {level: ERROR}) {
                  totalCount
                }
                warnings: jobLogsByJob(condition: {level: WARN}) {
                  totalCount
                }
                logs: jobLogsByJob(orderBy: LOGGED_AT_ASC) {
                  totalCount
                  nodes {
                    id
                    level
                    message
                    loggedAt
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export {
  GET_SYNC_HISTORY_LOGS,
  GET_LOGS_OF_A_SYNC,
  GET_CONTAINER_BASIC_DATA,
  GET_CONTAINER_SYNC_HISTORY_LOGS,
  GET_LOGS_OF_A_CONTAINER_SYNC
}
