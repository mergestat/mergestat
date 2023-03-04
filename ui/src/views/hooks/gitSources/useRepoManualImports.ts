import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { RepoManualImportData } from 'src/@types'
import { GetAllRepoManualImportsQuery, GetRepoManualImportsQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_ALL_REPO_MANUAL_IMPORTS, GET_REPO_MANUAL_IMPORTS } from 'src/api-logic/graphql/queries/get-repo-imports'
import { mapToManualImportsData } from 'src/api-logic/mappers/imports'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'

const useRepoManualImports = () => {
  const [{ idProvider, searchManualImport, rowsManualRepos, pageManualRepos }] = useGitSourceDetailContext()
  const { setTotalManualRepos } = useGitSourceDetailSetState()

  const [repos, setRepos] = useState<RepoManualImportData[]>([])
  const [records, setRecords] = useState<boolean>(false)

  const { data: allRepos } = useQuery<GetAllRepoManualImportsQuery>(GET_ALL_REPO_MANUAL_IMPORTS, {
    variables: { idProvider },
    fetchPolicy: 'no-cache'
  })

  const { loading, data, refetch } = useQuery<GetRepoManualImportsQuery>(GET_REPO_MANUAL_IMPORTS, {
    variables: { idProvider, search: searchManualImport, first: rowsManualRepos, offset: (pageManualRepos * rowsManualRepos) },
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    setRecords((allRepos?.repos?.totalCount && allRepos?.repos?.totalCount > 0) || false)
  }, [allRepos])

  useEffect(() => {
    setTotalManualRepos(data?.repos?.totalCount || 0)
    setRepos(mapToManualImportsData(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    refetch({ idProvider, search: searchManualImport, first: rowsManualRepos, offset: (pageManualRepos * rowsManualRepos) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchManualImport, rowsManualRepos, pageManualRepos])

  return { loading, repos, records }
}

export default useRepoManualImports
