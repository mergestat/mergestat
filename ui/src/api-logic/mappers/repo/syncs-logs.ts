import { format, lightFormat } from 'date-fns'
import { RepoSyncQueueW, SyncLogsType, SyncTypeData } from 'src/@types'
import { getExternalRepoLink, getRepoFromUrl, getSimpleDurationTime, getStatus } from 'src/utils'
import { DATE_FORMAT, SYNC_STATUS } from 'src/utils/constants'
import { GetSyncHistoryLogsQuery } from '../../graphql/generated/schema'

/**
 * Method which iterate each sync and map it to SyncTypeData to be shown in table
 * @param data Sync list that comes from data base in GetSyncHistoryLogsQuery format
 * @returns SyncTypeData with syncs info and its SyncLogsType info by each sync
 */
const mapToSyncLogsData = (data: GetSyncHistoryLogsQuery | undefined): SyncTypeData => {
  // General repo info
  const repoData: SyncTypeData = {
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
  data?.repo?.repoSyncs.nodes.forEach((s) => {
    repoData.sync = {
      id: s.id,
      title: s?.repoSyncTypeBySyncType?.shortName || '',
      brief: s?.repoSyncTypeBySyncType?.description || '',
      scheduleEnabled: s?.scheduleEnabled || false,
      typeGroup: s.repoSyncTypeBySyncType?.typeGroup || '',
      syncState: s?.repoSyncQueues.nodes.length !== 0 ? getStatus(s?.repoSyncQueues.nodes[0] as RepoSyncQueueW) : SYNC_STATUS.empty,
    }

    // 2. Get logs data of the sync
    const logsData: Array<SyncLogsType> = []

    s?.repoSyncQueues.nodes.forEach((q) => {
      const logData: SyncLogsType = {
        id: q.id,
        title: s?.syncType || '',
        syncType: q.status ? getStatus(q as RepoSyncQueueW) : SYNC_STATUS.empty,
        records: q.repoSyncLogs.totalCount,
        duration: q?.doneAt ? getSimpleDurationTime(new Date(q?.startedAt), new Date(q?.doneAt)) : '-',
        syncStart: q?.startedAt,
        syncStartText: q?.startedAt ? `Sync ${format(new Date(q?.startedAt), DATE_FORMAT.B)}` : '-'
      }

      // 3. Get list logs info. (e.g.: '2021/06/09 02:21 INFO: This is a log line')
      logData.logs = q.repoSyncLogs.nodes.map((log) => `${lightFormat(new Date(log.createdAt), DATE_FORMAT.A)} ${log.logType}: ${log.message}`)
      logsData.push(logData)
    })

    repoData.logs = logsData
  })

  return repoData
}

export { mapToSyncLogsData }
