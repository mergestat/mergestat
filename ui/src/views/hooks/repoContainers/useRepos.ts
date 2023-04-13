import { useQuery } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'
import { AutoImportData } from 'src/@types'
import { GetReposContainersQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_REPOS_CONTAINERS } from 'src/api-logic/graphql/queries/get-repos'
import { useGlobalContext, useGlobalSetState } from 'src/state/contexts'
import { useRepoContainersContext, useRepoContainersSetState } from 'src/state/contexts/repo-containers.context'
import { getVendorProp } from 'src/utils'
import { SYNC_REPO_METHOD, VENDOR_TYPE } from 'src/utils/constants'

const getLabelType = (vendor: string, type: string) => {
  return vendor === VENDOR_TYPE.GITHUB
    ? (type === SYNC_REPO_METHOD.GH_USER ? '(GitHub user)' : '(GitHub org)')
    : vendor === VENDOR_TYPE.GITLAB
      ? (type === SYNC_REPO_METHOD.GL_USER ? '(GitLab user)' : '(GitLab group)')
      : vendor === VENDOR_TYPE.BITBUCKET ? '(Bitbucket owner)' : ''
}

const useRepos = () => {
  const [runningImports, setRunningImports] = useState<AutoImportData[]>([])
  const [failedImports, setFailedImports] = useState<AutoImportData[]>([])
  const [{ showReposTable }] = useRepoContainersContext()
  const [{ reposFilter: { search, total, rows, page } }] = useGlobalContext()
  const { setTotalRepos, setPageRepos } = useGlobalSetState()
  const { setShowReposTable } = useRepoContainersSetState()

  const { loading, error, data, refetch } = useQuery<GetReposContainersQuery>(GET_REPOS_CONTAINERS, {
    variables: { search, first: rows, offset: (page * rows) },
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  const validateData = useCallback(() => {
    if (!showReposTable && data?.repos?.totalCount && data?.repos?.totalCount > 0) {
      setShowReposTable(true)
    }

    setFailedImports(data?.repoImports?.nodes?.filter(imp => imp.importError !== null && (imp.importError as string) !== '').map(imp => ({
      id: imp.id,
      name: imp.settings[getVendorProp(imp.provider?.vendor || '')],
      type: getLabelType(imp.provider?.vendor || '', imp.settings.type),
      error: imp.importError
    })) || [])

    setRunningImports(data?.repoImports?.nodes?.filter(imp => imp.importError === null || (imp.importError as string) === '').map(imp => ({
      id: imp.id,
      name: imp.settings[getVendorProp(imp.provider?.vendor || '')],
      type: getLabelType(imp.provider?.vendor || '', imp.settings.type),
    })) || [])

    setTotalRepos(data?.repos?.totalCount || 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, showReposTable])

  useEffect(() => {
    !loading && !error && validateData()
  }, [loading, error, validateData])

  useEffect(() => {
    (page * rows) + 1 > total && setPageRepos(0)
    refetch({ search, first: rows, offset: (page * rows) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, search, rows, page])

  useEffect(() => {
    if (total) {
      (page * rows) + 1 > total && setPageRepos(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  return { showReposTable, loading, data, runningImports, failedImports, refetch }
}

export default useRepos
