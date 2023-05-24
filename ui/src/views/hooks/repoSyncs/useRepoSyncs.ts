import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { GetRepoSyncsQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_REPO_SYNCS } from 'src/api-logic/graphql/queries/get-repo-syncs'
import { mapToRepoSyncsData } from 'src/api-logic/mappers/repo/repo-syncs'
import { useRepoSyncsContext, useRepoSyncsSetState } from 'src/state/contexts/repo-syncs.context'

const useRepoSyncs = () => {
  const router = useRouter()
  const { repository } = router.query

  const [{ search, rows, page, total }] = useRepoSyncsContext()
  const { setTotal, setPage } = useRepoSyncsSetState()

  const [pageLoaded, setPageLoaded] = useState(false)
  const [records, setRecords] = useState(false)

  const { loading, data, refetch } = useQuery<GetRepoSyncsQuery>(GET_REPO_SYNCS, {
    variables: { id: repository, search, first: rows, offset: (page * rows) },
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  const syncs = useMemo(() => mapToRepoSyncsData(data), [data])

  useEffect(() => {
    setTotal(data?.repoSyncTypes?.totalCount || 0)

    if (!pageLoaded && data?.allSyncTypes) {
      setRecords(data?.allSyncTypes?.totalCount > 0)
      setPageLoaded(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    refetch({ id: repository, search, first: rows, offset: (page * rows) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, search, rows, page])

  useEffect(() => {
    if (total) {
      (page * rows) + 1 > total && setPage(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  return { loading, records, repoId: `${repository}`, syncs }
}

export default useRepoSyncs
