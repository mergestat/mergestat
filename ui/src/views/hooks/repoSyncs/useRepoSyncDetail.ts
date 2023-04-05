import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { GET_CONTAINER_IMAGE } from 'src/api-logic/graphql/queries/get-repo-syncs'
import { mapToContainerSyncDetail } from 'src/api-logic/mappers/repo-container/container-sync'
import { useContainerSyncDetailSetState } from 'src/state/contexts/container-sync-detail.context'
import { GetContainerImageQuery } from '../../../api-logic/graphql/generated/schema'

const useRepoSyncDetail = (containerSyncId?: string | string[]) => {
  const { setLoading, setContainerSyncDetail, setIdContainerSync } = useContainerSyncDetailSetState()

  const { loading, data } = useQuery<GetContainerImageQuery>(GET_CONTAINER_IMAGE, {
    variables: { id: containerSyncId },
    fetchPolicy: 'no-cache',
  })

  useEffect(() => {
    setContainerSyncDetail(mapToContainerSyncDetail(data))
    setIdContainerSync(containerSyncId || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    setLoading(loading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])
}

export default useRepoSyncDetail
