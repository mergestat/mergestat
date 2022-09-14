import { differenceInSeconds } from 'date-fns'
import { RepoSyncData, RepoSyncDataType, SyncStatusDataT } from 'src/@types'
import { getSimpleDurationTime, mapToRepoSyncStateT } from 'src/utils'
import { GITHUB_URL, SYNC_STATUS } from 'src/utils/constants'
import { GetRepoSyncsQuery } from '../graphql/generated/schema'

/**
 * Method which iterate each sync and map it to RepoSyncDataType to be shown in table
 * @param data Sync list that comes from data base in GetRepoSyncsQuery format
 * @returns RepoSyncData with syncs info and its RepoSyncDataType info by each sync
 */
const mapToSyncsData = (data: GetRepoSyncsQuery | undefined): RepoSyncData => {
  // General repo info
  const repoData: RepoSyncData = {
    id: data?.repo?.id,
    name: data?.repo?.repo.replace(GITHUB_URL, '') || '',
    type: data?.repo?.isGithub ? 'github' : 'other',
    gitHubPat: (data?.serviceAuthCredentials?.totalCount && data?.serviceAuthCredentials?.totalCount > 0) || false
  }

  const mappedData: Array<RepoSyncDataType> = []

  data?.repoSyncTypes?.nodes.forEach((st) => {
    // 1. Find sync type data
    const syncType = data?.repo?.repoSyncs.nodes.find(rs => st.type === rs.syncType)

    // 2. Get sync info
    const syncData: RepoSyncDataType = {
      data: {
        id: syncType?.id,
        type: st.type || '',
        title: st.shortName || '',
        brief: st.description || '',
      },
      latestRun: syncType?.repoSyncQueues.nodes[0]?.startedAt ?? syncType?.repoSyncQueues.nodes[1]?.startedAt,
      status: {
        data: [],
        syncState: syncType?.repoSyncQueues.nodes.length !== 0 ? mapToRepoSyncStateT(syncType?.repoSyncQueues.nodes[0]?.status || '') : SYNC_STATUS.empty,
      }
    }

    // 3. Get status data of a sync (sync queues)
    syncType?.repoSyncQueues.nodes.forEach((q) => {
      const queueData: SyncStatusDataT = {
        status: mapToRepoSyncStateT(q?.status || ''),
        runningTime: q?.doneAt ? differenceInSeconds(new Date(q?.doneAt), new Date(q?.startedAt)) : 0, // Determine chart height
        runningTimeReadable: q?.doneAt ? getSimpleDurationTime(new Date(q?.startedAt), new Date(q?.doneAt)) : q?.startedAt ? SYNC_STATUS.running : SYNC_STATUS.queued,
        doneAt: q?.doneAt ?? new Date(q?.doneAt)
      }
      syncData.status.data?.push(queueData)
    })

    mappedData.push(syncData)
  })

  repoData.syncs = mappedData
  return repoData
}

export { mapToSyncsData }
