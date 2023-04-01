import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ContainerSyncLogData } from 'src/@types'
import { GET_CONTAINER_SYNC_HISTORY_LOGS } from 'src/api-logic/graphql/queries/get-sync-history-logs'
import { mapToContainerSyncLogsData } from 'src/api-logic/mappers/repo-container/container-syncs-logs'
import { useContainerSyncsLogsContext, useContainerSyncsLogsSetState } from 'src/state/contexts/container-syncs-logs.context'
import { GetContainerSyncHistoryLogsQuery } from '../../../api-logic/graphql/generated/schema'
import useContainerSyncNow from './useContainerSyncNow'

const useContainerSyncsLogs = () => {
  const router = useRouter()
  const { repository, syncId } = router.query

  const [{ rows, page, total }] = useContainerSyncsLogsContext()
  const { setTotal, setRows, setPage } = useContainerSyncsLogsSetState()

  const { loading, data, refetch } = useQuery<GetContainerSyncHistoryLogsQuery>(GET_CONTAINER_SYNC_HISTORY_LOGS, {
    variables: { repoId: repository, syncId, first: rows, offset: (page * rows) },
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  const { addSchedule, removeSchedule, syncNow } = useContainerSyncNow('getContainerSyncHistoryLogs')

  const repoData: ContainerSyncLogData = mapToContainerSyncLogsData(data)

  useEffect(() => {
    setTotal(repoData.sync?.totalExecutions || 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    refetch({ repoId: repository, syncId, first: rows, offset: (page * rows) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, rows, page])

  return {
    loading,
    repoData,
    syncId,
    addSchedule,
    removeSchedule,
    syncNow,
    rows,
    page,
    total,
    setRows,
    setPage
  }
}

export default useContainerSyncsLogs
