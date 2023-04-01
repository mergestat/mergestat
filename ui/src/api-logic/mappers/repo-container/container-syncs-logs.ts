import { format, lightFormat } from 'date-fns'
import { ContainerBasicData, ContainerSyncLogData, SyncLogsType } from 'src/@types'
import { getExternalRepoLink, getRepoFromUrl, getSimpleDurationTime, mapToContainerSyncState } from 'src/utils'
import { DATE_FORMAT, SYNC_STATUS } from 'src/utils/constants'
import { GetContainerBasicDataQuery, GetContainerSyncHistoryLogsQuery, GetLogsOfContainerSyncQuery } from '../../graphql/generated/schema'

/**
 * Method to get basic data into ContainerBasicData
 * @param data Basic container data in GetContainerBasicDataQuery format
 * @returns ContainerBasicData with repo and sync info
 */
const mapToContainerBasicData = (data: GetContainerBasicDataQuery | undefined): ContainerBasicData => {
  // General repo info
  const basicData: ContainerBasicData = {
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
    },
    sync: {
      name: data?.repo?.containerSyncs.nodes[0]?.image?.name || ''
    }
  }
  return basicData
}

/**
 * Method which iterate each sync and map it to ContainerSyncLogData to be shown in table
 * @param data Sync list that comes from data base in GetContainerSyncHistoryLogsQuery format
 * @returns ContainerSyncLogData with syncs info and its SyncLogsType info by each sync
 */
const mapToContainerSyncLogsData = (data: GetContainerSyncHistoryLogsQuery | GetLogsOfContainerSyncQuery | undefined): ContainerSyncLogData => {
  const repoData: ContainerSyncLogData = {}

  // 1. Get Sync general info
  data?.repo?.containerSyncs.nodes.forEach((cs) => {
    repoData.sync = {
      id: cs.id,
      imageId: cs?.image?.id,
      name: cs?.image?.name || '',
      description: cs?.image?.description || '',
      parameters: cs.parameters,
      scheduleId: cs?.schedule.nodes[0]?.id,
      syncState: cs?.executions.nodes.length !== 0 ? mapToContainerSyncState(cs?.executions.nodes[0].job?.status) : SYNC_STATUS.empty,
      totalExecutions: cs?.executions.totalCount
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

export { mapToContainerBasicData, mapToContainerSyncLogsData }
