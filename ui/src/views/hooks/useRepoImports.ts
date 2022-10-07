import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { RepoImportData } from 'src/@types'
import { GetRepoImportsQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_REPO_IMPORTS } from 'src/api-logic/graphql/queries/get-repo-imports'
import { mapToImportsData } from 'src/api-logic/mappers/imports'

const useRepoImports = (poll = false) => {
  const [imports, setImports] = useState<RepoImportData[]>([])

  const { loading, data, refetch } = useQuery<GetRepoImportsQuery>(GET_REPO_IMPORTS, {
    ...(poll && { pollInterval: 5000 }),
  })

  useEffect(() => {
    setImports(mapToImportsData(data))
  }, [data])

  return { loading, imports, refetch }
}

export default useRepoImports
