import { useQuery } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'
import { GetReposQuery } from 'src/api-logic/graphql/generated/schema'
import GET_REPOS from 'src/api-logic/graphql/queries/get-repos.query'

const useRepos = (search: string, poll = false) => {
  const [showTable, setShowTable] = useState(false)
  const [showBanner, setShowBanner] = useState(false)

  const { loading, error, data, refetch } = useQuery<GetReposQuery>(GET_REPOS, {
    variables: { search },
    fetchPolicy: 'no-cache',
    ...(poll && { pollInterval: 5000 }),
  })

  const validateData = useCallback(() => {
    if (!showTable && data?.repos?.totalCount && data?.repos?.totalCount > 0) {
      setShowTable(true)
    }
    setShowBanner(data?.repoImports?.totalCount ? data?.repoImports?.totalCount > 0 : false)
  }, [data, showTable])

  useEffect(() => {
    !loading && !error && validateData()
  }, [loading, error, validateData])

  useEffect(() => {
    refetch({ search })
  }, [refetch, search])

  return { showTable, loading, data, showBanner, refetch }
}

export default useRepos
