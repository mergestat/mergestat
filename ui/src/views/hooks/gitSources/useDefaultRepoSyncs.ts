import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { DefaultRepoSync } from 'src/@types'
import { GET_DEFAULT_REPO_SYNCS } from 'src/api-logic/graphql/queries/get-git-sources'
import { mapToDefaultRepoSyncs } from 'src/api-logic/mappers/git-sources/default-repo-syncs'
import { useDefaultRepoSyncsContext, useDefaultRepoSyncsSetState } from 'src/state/contexts/default-repo-syncs.context'
import { GetDefaultRepoSyncsQuery } from '../../../api-logic/graphql/generated/schema'

const useDefaultRepoSyncs = () => {
  // const router = useRouter()
  // const { gitSourceId } = router.query

  const [{ search, rows, page }] = useDefaultRepoSyncsContext()
  const { setTotal, setPage } = useDefaultRepoSyncsSetState()

  const [pageLoaded, setPageLoaded] = useState(false)
  const [records, setRecords] = useState(false)
  const [defaultSyncs, setDefaultSyncs] = useState<DefaultRepoSync[]>([])

  const { loading, data, refetch } = useQuery<GetDefaultRepoSyncsQuery>(GET_DEFAULT_REPO_SYNCS, {
    variables: { search, first: rows, offset: (page * rows) },
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    setDefaultSyncs(mapToDefaultRepoSyncs(data))
    setTotal(data?.containerImages?.totalCount || 0)

    if (!pageLoaded && data?.all) {
      setRecords(data?.all?.totalCount > 0)
      setPageLoaded(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    search && setPage(0)
    refetch({ search, first: rows, offset: (page * rows) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, search, rows, page])

  return { loading, records, defaultSyncs }
}

export default useDefaultRepoSyncs
