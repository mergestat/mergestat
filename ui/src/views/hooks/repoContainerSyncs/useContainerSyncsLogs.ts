import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ContainerSyncInfo, ContainerSyncLogData, RepoContainerSyncState } from 'src/@types'
import { GET_CONTAINER_SYNC_GENERAL_DATA, GET_CONTAINER_SYNC_HISTORY_LOGS } from 'src/api-logic/graphql/queries/get-sync-history-logs'
import { mapToContainerSyncGeneralData, mapToContainerSyncLogsData } from 'src/api-logic/mappers/repo-container/container-syncs-logs'
import { useContainerSyncsLogsContext, useContainerSyncsLogsSetState } from 'src/state/contexts/container-syncs-logs.context'
import { GetContainerSyncGeneralDataQuery, GetContainerSyncHistoryLogsQuery } from '../../../api-logic/graphql/generated/schema'
import useContainerSyncNow from './useContainerSyncNow'

const useContainerSyncsLogs = () => {
  const router = useRouter()
  const { repository, syncId } = router.query

  const [{ rows, page, total }] = useContainerSyncsLogsContext()
  const { setTotal, setRows, setPage } = useContainerSyncsLogsSetState()

  const [syncInfo, setSyncInfo] = useState<ContainerSyncInfo>()
  const [repoData, setRepoData] = useState<ContainerSyncLogData>()
  const [statusSync, setStatusSync] = useState<RepoContainerSyncState>()

  const { loading: loadingGeneralInfo, data: dataInfo } = useQuery<GetContainerSyncGeneralDataQuery>(GET_CONTAINER_SYNC_GENERAL_DATA, {
    variables: { repoId: repository, syncId },
    fetchPolicy: 'no-cache',
  })

  const { loading: loadingLogs, data: dataLogs, refetch } = useQuery<GetContainerSyncHistoryLogsQuery>(GET_CONTAINER_SYNC_HISTORY_LOGS, {
    variables: { repoId: repository, syncId, first: rows, offset: (page * rows) },
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  const { addSchedule, removeSchedule, syncNow } = useContainerSyncNow('getContainerSyncHistoryLogs')

  useEffect(() => {
    setSyncInfo(mapToContainerSyncGeneralData(dataInfo))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataInfo])

  useEffect(() => {
    const repoData = mapToContainerSyncLogsData(dataLogs)
    setTotal(repoData.sync?.totalExecutions || 0)
    setStatusSync(repoData.sync?.syncState)
    setRepoData(repoData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataLogs])

  useEffect(() => {
    refetch({ repoId: repository, syncId, first: rows, offset: (page * rows) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, rows, page])

  return {
    loadingGeneralInfo,
    loadingLogs,
    statusSync,
    repoData,
    syncInfo,
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
