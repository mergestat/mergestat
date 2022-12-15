import { useQuery } from '@apollo/client'
import { GetAllEnabledReposQuery, GetRepoTotalCountQuery, GetSyncErrorsQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_ALL_ENABLED_REPOS, GET_REPO_TOTAL_COUNT, GET_SYNC_ERRORS } from 'src/api-logic/graphql/queries/get-repos.query'

const useMetrics = () => {
  const {
    loading: loadingAllRepos,
    error: errorAllRepos,
    data: dataAllRepos
  } = useQuery<GetRepoTotalCountQuery>(GET_REPO_TOTAL_COUNT, {
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  const {
    loading: loadingAllEnabledRepos,
    error: errorAllEnabledRepos,
    data: dataAllEnabledRepos
  } = useQuery<GetAllEnabledReposQuery>(GET_ALL_ENABLED_REPOS, {
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  const {
    loading: loadingSyncErrors,
    error: errorSyncErrors,
    data: dataSyncErrors
  } = useQuery<GetSyncErrorsQuery>(GET_SYNC_ERRORS, {
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  return {
    loadingAllRepos,
    errorAllRepos,
    allRepos: dataAllRepos?.allRepos?.totalCount,
    loadingAllEnabledRepos,
    errorAllEnabledRepos,
    enabledRepos: dataAllEnabledRepos?.allEnabledRepos?.totalCount,
    loadingSyncErrors,
    errorSyncErrors,
    syncErrors: dataSyncErrors?.syncErrors ? (dataSyncErrors.syncErrors.rows ? dataSyncErrors.syncErrors.rows[0][0]?.syncs_error_count : 0) : 0
  }
}

export default useMetrics
