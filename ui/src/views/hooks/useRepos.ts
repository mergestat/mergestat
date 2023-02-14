import { useQuery } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'
import { AutoImportData } from 'src/@types'
import { GetReposQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_REPOS } from 'src/api-logic/graphql/queries/get-repos.query'
import { useRepositoriesContext, useRepositoriesSetState } from 'src/state/contexts'
import { SYNC_REPO_METHOD } from 'src/utils/constants'

const useRepos = () => {
  const [runningImports, setRunningImports] = useState<AutoImportData[]>([])
  const [failedImports, setFailedImports] = useState<AutoImportData[]>([])
  const [{ search, rowsRepos, pageRepos, showReposTable }] = useRepositoriesContext()
  const { setTotalRepos } = useRepositoriesSetState()
  const { setShowReposTable } = useRepositoriesSetState()

  const { loading, error, data, refetch } = useQuery<GetReposQuery>(GET_REPOS, {
    variables: { search, first: rowsRepos, offset: (pageRepos * rowsRepos) },
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  const validateData = useCallback(() => {
    if (!showReposTable && data?.repos?.totalCount && data?.repos?.totalCount > 0) {
      setShowReposTable(true)
    }

    console.log(data?.repoImports?.nodes)

    setFailedImports(data?.repoImports?.nodes?.filter(imp => imp.importError !== null && (imp.importError as string) !== '').map(imp => ({
      id: imp.id,
      name: imp.type === SYNC_REPO_METHOD.GH_USER ? imp.settings.user : imp.settings.org,
      type: imp.type === SYNC_REPO_METHOD.GH_USER ? 'GitHub user' : 'GitHub org',
      error: imp.importError
    })) || [])

    setRunningImports(data?.repoImports?.nodes?.filter(imp => imp.importError === null || (imp.importError as string) === '').map(imp => ({
      id: imp.id,
      name: imp.type === SYNC_REPO_METHOD.GH_USER ? imp.settings.user : imp.settings.org,
      type: imp.type === SYNC_REPO_METHOD.GH_USER ? 'GitHub user' : 'GitHub org'
    })) || [])

    setTotalRepos(data?.repos?.totalCount || 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, showReposTable])

  useEffect(() => {
    !loading && !error && validateData()
  }, [loading, error, validateData])

  useEffect(() => {
    refetch({ search, first: rowsRepos, offset: (pageRepos * rowsRepos) })
  }, [refetch, search, rowsRepos, pageRepos])

  return { showReposTable, loading, data, runningImports, failedImports, refetch }
}

export default useRepos
