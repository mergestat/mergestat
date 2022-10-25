import { useQuery } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'
import { GetReposQuery } from 'src/api-logic/graphql/generated/schema'
import GET_REPOS from 'src/api-logic/graphql/queries/get-repos.query'
import { useRepositoriesContext, useRepositoriesSetState } from 'src/state/contexts'

const useRepos = (poll = false) => {
  const [showTable, setShowTable] = useState(false)
  const [showBanner, setShowBanner] = useState(false)

  const [{ search, rowsRepos, pageRepos }] = useRepositoriesContext()
  const { setTotalRepos } = useRepositoriesSetState()

  const { loading, error, data, refetch } = useQuery<GetReposQuery>(GET_REPOS, {
    variables: { search, first: rowsRepos, offset: (pageRepos * rowsRepos) },
    fetchPolicy: 'no-cache',
    ...(poll && { pollInterval: 5000 }),
  })

  const validateData = useCallback(() => {
    if (!showTable && data?.repos?.totalCount && data?.repos?.totalCount > 0) {
      setShowTable(true)
    }
    setShowBanner(data?.repoImports?.totalCount ? data?.repoImports?.totalCount > 0 : false)
    setTotalRepos(data?.repos?.totalCount || 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, showTable])

  useEffect(() => {
    !loading && !error && validateData()
  }, [loading, error, validateData])

  useEffect(() => {
    refetch({ search, first: rowsRepos, offset: (pageRepos * rowsRepos) })
  }, [refetch, search, rowsRepos, pageRepos])

  return { showTable, loading, data, showBanner, refetch }
}

export default useRepos
