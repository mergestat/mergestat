import { gql } from '@apollo/client'

const GET_REPOS = gql`
  query getRepos($search: String!, $first: Int, $offset: Int) {
    serviceAuthCredentials(filter: {type: {equalTo: "GITHUB_PAT"}}) {
      totalCount
    }
    repoImports(filter: { lastImport: { isNull: true } }) {
      totalCount
    }
    allRepos: repos {
      totalCount
    }
    allEnabledRepos: repoSyncs(condition: {scheduleEnabled: true}) {
      totalCount
    }
    syncErrors: execSQL(query: "WITH ranked_completed_syncs AS ( SELECT rsq.id, rsq.repo_sync_id, rsq.done_at, RANK() OVER(PARTITION BY rsq.repo_sync_id ORDER BY rsq.done_at DESC) AS rank_num FROM mergestat.repo_sync_queue AS rsq WHERE rsq.repo_sync_id NOT IN (SELECT repo_sync_id FROM mergestat.repo_sync_queue WHERE status = 'RUNNING' OR status = 'QUEUED') ) SELECT COUNT(DISTINCT rcs.id) AS syncs_error_count FROM ranked_completed_syncs AS rcs INNER JOIN mergestat.repo_sync_logs AS rsl ON rcs.id = rsl.repo_sync_queue_id WHERE rank_num = 1 AND log_type = 'ERROR'")
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
                doneAt
                createdAt
                hasError
              }
            }
          }
        }
      }
    }
  }
`
export default GET_REPOS
