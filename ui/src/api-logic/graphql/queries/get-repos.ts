import { gql } from '@apollo/client'

const GET_REPO_TOTAL_COUNT = gql`
  query getRepoTotalCount {
    allRepos: repos {
      totalCount
    }
  }
`

const GET_ALL_ENABLED_REPOS = gql`
  query getAllEnabledRepos {
    allEnabledRepos: repoSyncs(condition: {scheduleEnabled: true}) {
      totalCount
    }
  }
`

const GET_SYNC_ERRORS = gql`
  query getSyncErrors {
    syncErrors: execSQL(
      input: { query: "SELECT COUNT(DISTINCT rs.id) AS syncs_error_count FROM mergestat.repo_syncs AS rs INNER JOIN mergestat.repo_sync_logs AS rsl ON rs.last_completed_repo_sync_queue_id = rsl.repo_sync_queue_id AND log_type = 'ERROR' WHERE rs.id NOT IN (SELECT repo_sync_id FROM mergestat.repo_sync_queue WHERE status IN ('QUEUED', 'RUNNING'))" }
    ) {
      rowCount
      columns
      rows
    }
  }
`

const GET_REPOS = gql`
  query getRepos($search: String!, $first: Int, $offset: Int) {
    repoImports(filter: {lastImport: {isNull: true}}) {
      totalCount
      nodes {
        id
        settings
        importError
      }
    }
    repos(
      orderBy: [CREATED_AT_DESC, REPO_DESC]
      filter: {repo: {includes: $search}}
      first: $first
      offset: $offset
    ) {
      totalCount
      nodes {
        id
        repo
        createdAt
        tags
        repoImport {
          settings
        }
        providerByProvider {
          id
          name
          vendor
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
            lastCompletedRepoSyncQueue {
              id
              status
              doneAt
              createdAt
              hasError
              warnings: repoSyncLogs(condition: {logType: "WARNING"}) {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`
export { GET_REPO_TOTAL_COUNT, GET_ALL_ENABLED_REPOS, GET_SYNC_ERRORS, GET_REPOS }
