import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { GetGitSourceQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_GIT_SOURCE } from 'src/api-logic/graphql/queries/get-git-sources'
import { mapToGitSourceDetail } from 'src/api-logic/mappers/git-source-detail'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'

const useGitSourceDetail = (gitSourceId?: string | string[]) => {
  const { setLoading, setGsDetail, setIdProvider } = useGitSourceDetailSetState()
  const [{ searchImport }] = useGitSourceDetailContext()

  const { loading, data } = useQuery<GetGitSourceQuery>(GET_GIT_SOURCE, {
    variables: { id: gitSourceId },
    fetchPolicy: 'no-cache',
  })

  useEffect(() => {
    setGsDetail(mapToGitSourceDetail(data, searchImport))
    setIdProvider(gitSourceId || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, searchImport])

  useEffect(() => {
    setLoading(loading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])
}

export default useGitSourceDetail
