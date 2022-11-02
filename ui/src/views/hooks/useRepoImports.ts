import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { RepoImportData } from 'src/@types'
import { GetRepoImportsQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_REPO_IMPORTS } from 'src/api-logic/graphql/queries/get-repo-imports'
import { mapToImportsData } from 'src/api-logic/mappers/imports'
import { useRepositoriesContext, useRepositoriesSetState } from 'src/state/contexts'

const useRepoImports = () => {
  const { setShowRemoveImportModal, setImportToRemove } = useRepositoriesSetState()
  const [{ showRemoveImportModal }] = useRepositoriesContext()

  const [imports, setImports] = useState<RepoImportData[]>([])

  const { loading, data } = useQuery<GetRepoImportsQuery>(GET_REPO_IMPORTS, {
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  useEffect(() => {
    setImports(mapToImportsData(data))
  }, [data])

  const prepareToRemove = (id: string, name: string, type: string) => {
    setImportToRemove({ id, name, type })
    setShowRemoveImportModal(true)
  }

  return { loading, imports, showRemoveImportModal, prepareToRemove }
}

export default useRepoImports
