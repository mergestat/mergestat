import { useQuery } from '@apollo/client'
import { GetAllEnabledReposQuery, GetContainerSyncErrorsQuery, GetRepoTotalCountQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_ALL_ENABLED_REPOS, GET_CONTAINER_SYNC_ERRORS, GET_REPO_TOTAL_COUNT } from 'src/api-logic/graphql/queries/get-repos'

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
  } = useQuery<GetContainerSyncErrorsQuery>(GET_CONTAINER_SYNC_ERRORS, {
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
    syncErrors: dataSyncErrors?.getReposPageHeaderStats ? dataSyncErrors.getReposPageHeaderStats.syncs_with_error_count : 0
  }
}

export default useMetrics
