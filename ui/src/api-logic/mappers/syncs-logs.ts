import { differenceInSeconds, lightFormat } from 'date-fns'
import { SyncLogsType, SyncTypeData } from 'src/@types'
import { getTimeAgoFromNow, mapToRepoSyncStateT } from 'src/utils'
import { DATE_FORMAT, GITHUB_URL } from 'src/utils/constants'
import { GetSyncHistoryLogsQuery } from '../graphql/generated/schema'

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
      name: data?.repo?.repo.replace(GITHUB_URL, '') || '',
      type: data?.repo?.isGithub ? 'github' : 'other',
    }
  }

  // 1. Get Sync general info
  data?.repo?.repoSyncs.nodes.forEach((s) => {
    const syncInfo = {
      id: s.id,
      title: s?.syncType || '',
      brief: s?.repoSyncTypeBySyncType?.description || '',
      syncState: s?.repoSyncQueues.nodes.length !== 0 ? mapToRepoSyncStateT(s?.repoSyncQueues.nodes[0]?.status || '') : 'empty',
    }
    repoData.sync = syncInfo

    // 2. Get logs data of the sync
    const logsData: Array<SyncLogsType> = []

    s?.repoSyncQueues.nodes.forEach((q) => {
      const logData: SyncLogsType = {
        id: q.id,
        title: s?.syncType || '',
        syncType: q.status ? mapToRepoSyncStateT(q.status) : 'empty',
        records: q.repoSyncLogs.totalCount,
        duration: `${differenceInSeconds(new Date(q?.doneAt), new Date(q?.startedAt))}s`,
        syncStart: q?.startedAt,
      }

      // 3. Get list logs info 2021/06/09 02:21 This is a log line ...
      const logs: Array<string> = []
      q.repoSyncLogs.nodes.forEach((log) => {
        logs.push(`${lightFormat(new Date(log.createdAt), DATE_FORMAT)} ${log.logType}: ${log.message} ...`)
      })

      logData.logs = logs
      logsData.push(logData)
    })

    repoData.logs = logsData
  })

  return repoData
}


export { mapToSyncLogsData }
