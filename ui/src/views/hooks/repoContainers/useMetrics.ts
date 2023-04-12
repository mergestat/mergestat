import { useQuery } from '@apollo/client'
import { GetContainerSyncStatsQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_CONTAINER_SYNC_STATS } from 'src/api-logic/graphql/queries/get-repos'

interface RepoContainerStats {
  repo_count: 69,
  repo_sync_count: 1,
  syncs_with_error_count: 0
}

const useMetrics = () => {
  const {
    loading: loadingStats,
    error: errorStats,
    data: stats
  } = useQuery<GetContainerSyncStatsQuery>(GET_CONTAINER_SYNC_STATS, {
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  return {
    loadingStats,
    errorStats,
    stats: stats?.getReposPageHeaderStats as RepoContainerStats
  }
}

export default useMetrics
