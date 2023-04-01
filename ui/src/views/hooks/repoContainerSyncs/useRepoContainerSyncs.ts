import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { RepoContainerSyncData } from 'src/@types'
import { GET_CONTAINER_SYNCS } from 'src/api-logic/graphql/queries/get-repo-syncs'
import { mapToRepoContainerSyncsData } from 'src/api-logic/mappers/repo-container/repo-container-syncs'
import { useRepoSyncsContext, useRepoSyncsSetState } from 'src/state/contexts/repo-syncs.context'
import { GetContainerSyncsQuery } from '../../../api-logic/graphql/generated/schema'

const useRepoContainerSyncs = () => {
  const router = useRouter()
  const { repository } = router.query

  const [{ search, rows, page }] = useRepoSyncsContext()
  const { setTotal, setPage } = useRepoSyncsSetState()

  const [pageLoaded, setPageLoaded] = useState(false)
  const [records, setRecords] = useState(false)
  const [syncs, setSyncs] = useState<RepoContainerSyncData[]>([])

  const { loading, data, refetch } = useQuery<GetContainerSyncsQuery>(GET_CONTAINER_SYNCS, {
    variables: { id: repository, search, first: rows, offset: (page * rows) },
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  useEffect(() => {
    setSyncs(mapToRepoContainerSyncsData(data, `${repository}`))
    setTotal(data?.containerImages?.totalCount || 0)

    if (!pageLoaded && data?.all) {
      setRecords(data?.all?.totalCount > 0)
      setPageLoaded(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    search && setPage(0)
    refetch({ id: repository, search, first: rows, offset: (page * rows) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, search, rows, page])

  return { loading, records, syncs }
}

export default useRepoContainerSyncs
