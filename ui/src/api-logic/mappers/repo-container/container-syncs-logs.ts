import { format, lightFormat } from 'date-fns'
import { ContainerSyncLogData, SyncLogsType } from 'src/@types'
import { getExternalRepoLink, getRepoFromUrl, getSimpleDurationTime, mapToContainerSyncState } from 'src/utils'
import { DATE_FORMAT, SYNC_STATUS } from 'src/utils/constants'
import { GetContainerSyncHistoryLogsQuery } from '../../graphql/generated/schema'

/**
 * Method which iterate each sync and map it to ContainerSyncLogData to be shown in table
 * @param data Sync list that comes from data base in GetContainerSyncHistoryLogsQuery format
 * @returns ContainerSyncLogData with syncs info and its SyncLogsType info by each sync
 */
const mapToContainerSyncLogsData = (data: GetContainerSyncHistoryLogsQuery | undefined): ContainerSyncLogData => {
  // General repo info
  const repoData: ContainerSyncLogData = {
    repo: {
      id: data?.repo?.id,
      name: getRepoFromUrl(data?.repo?.repo || ''),
      externalRepoLink: getExternalRepoLink(data?.repo?.repo),
      provider: {
        id: data?.repo?.provider?.id,
        name: data?.repo?.provider?.name || '',
        vendor: data?.repo?.provider?.vendor || '',
        url: data?.repo?.provider?.settings?.url,
      },
    }
  }

  // 1. Get Sync general info
  data?.repo?.containerSyncs.nodes.forEach((cs) => {
    repoData.sync = {
      id: cs.id,
      name: cs?.image?.name || '',
      description: cs?.image?.description || '',
      scheduleId: cs?.schedule.nodes[0]?.id,
      syncState: cs?.executions.nodes.length !== 0 ? mapToContainerSyncState(cs?.executions.nodes[0].job?.status) : SYNC_STATUS.empty,
    }

    // 2. Get logs data of the sync
    const logsData: Array<SyncLogsType> = []

    cs?.executions.nodes.forEach((ex) => {
      const logData: SyncLogsType = {
        id: ex.job?.id,
        title: cs?.image?.name || '',
        syncType: mapToContainerSyncState(ex.job?.status),
        records: ex.job?.logs.totalCount,
        duration: ex.job?.completedAt ? getSimpleDurationTime(new Date(ex.job?.startedAt), new Date(ex.job?.completedAt)) : '-',
        syncStart: ex.job?.startedAt,
        syncStartText: ex.job?.startedAt ? `Sync ${format(new Date(ex.job?.startedAt), DATE_FORMAT.B)}` : '-'
      }

      // 3. Get list logs info. (e.g.: '2021/06/09 02:21 INFO: This is a log line')
      logData.logs = ex.job?.logs.nodes.map((log) => `${lightFormat(new Date(log.loggedAt), DATE_FORMAT.A)} ${log.level}: ${log.message}`)
      logsData.push(logData)
    })

    repoData.logs = logsData
  })

  return repoData
}

export { mapToContainerSyncLogsData }
