import { useQuery } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'
import GET_REPOS from 'src/api-logic/graphql/queries/get-repos.query'
import { showErrorAlert } from 'src/utils/alerts'

const useRepos = (search: string) => {
  const [showTable, setShowTable] = useState(false)

  const { loading, error, data, refetch } = useQuery(GET_REPOS, {
    variables: { search },
    pollInterval: 5000,
  })

  const validateData = useCallback(() => {
    if (data && !showTable) {
      setShowTable(true)
    }
  }, [data, showTable])

  useEffect(() => {
    !loading && !error && validateData()
  }, [loading, error, validateData])

  useEffect(() => {
    refetch({ search })
  }, [refetch, search])

  if (error) {
    showErrorAlert(error.message)
  }

  return { showTable, loading, data, refetch }
}

export default useRepos
