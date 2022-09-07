import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { RepoImportData } from 'src/@types'
import { GetRepoImportsQuery } from 'src/api-logic/graphql/generated/schema'
import GET_REPO_IMPORTS from 'src/api-logic/graphql/queries/get-repo-imports'
import { mapToImportsData } from 'src/api-logic/mappers/imports'
import { showErrorAlert } from 'src/utils/alerts'

const useRepoImports = () => {
  const [imports, setImports] = useState<RepoImportData[]>([])

  const { loading, error, data, refetch } = useQuery<GetRepoImportsQuery>(GET_REPO_IMPORTS, {
    pollInterval: 5000,
  })

  useEffect(() => {
    setImports(mapToImportsData(data))
  }, [data])

  if (error) {
    showErrorAlert(error.message)
  }

  return { loading, imports, refetch }
}

export default useRepoImports
