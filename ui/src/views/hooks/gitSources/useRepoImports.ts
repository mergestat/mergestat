import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { RepoImportData } from 'src/@types'
import { GetRepoImportsQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_REPO_AUTO_IMPORTS } from 'src/api-logic/graphql/queries/get-repo-imports'
import { mapToImportsData } from 'src/api-logic/mappers/git-sources/imports'
import { useGitSourceDetailContext } from 'src/state/contexts/git-source-detail.context'

const useRepoImports = () => {
  const [{ idProvider, searchImport }] = useGitSourceDetailContext()

  const [imports, setImports] = useState<RepoImportData[]>([])
  const [records, setRecords] = useState<boolean>(false)

  const { loading, data } = useQuery<GetRepoImportsQuery>(GET_REPO_AUTO_IMPORTS, {
    variables: { idProvider },
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  useEffect(() => {
    const importsData = mapToImportsData(data)
    setImports(importsData)
    setRecords((data?.repoImports && data?.repoImports?.totalCount > 0) || false)
    searchImport && setImports(importsData.filter(imp => imp.name?.includes(searchImport)))
  }, [data, searchImport])

  return { loading, imports, records }
}

export default useRepoImports
