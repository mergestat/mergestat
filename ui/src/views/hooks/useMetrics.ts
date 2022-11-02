import { useQuery } from '@apollo/client'
import { GetAllEnabledReposQuery, GetAllReposQuery, GetSyncErrorsQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_ALL_ENABLED_REPOS, GET_ALL_REPOS, GET_SYNC_ERRORS } from 'src/api-logic/graphql/queries/get-repos.query'

const useMetrics = () => {
  const {
    loading: loadingAllRepos,
    error: errorAllRepos,
    data: dataAllRepos
  } = useQuery<GetAllReposQuery>(GET_ALL_REPOS, {
    fetchPolicy: 'no-cache',
  })

  const {
    loading: loadingAllEnabledRepos,
    error: errorAllEnabledRepos,
    data: dataAllEnabledRepos
  } = useQuery<GetAllEnabledReposQuery>(GET_ALL_ENABLED_REPOS, {
    fetchPolicy: 'no-cache',
  })

  const {
    loading: loadingSyncErrors,
    error: errorSyncErrors,
    data: dataSyncErrors
  } = useQuery<GetSyncErrorsQuery>(GET_SYNC_ERRORS, {
    fetchPolicy: 'no-cache',
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
    syncErrors: dataSyncErrors?.syncErrors ? dataSyncErrors?.syncErrors[0]?.syncs_error_count : 0
  }
}

export default useMetrics
