import { differenceInSeconds } from 'date-fns'
import { RepoSyncData, RepoSyncDataType, SyncStatusDataT } from 'src/@types'
import { mapToRepoSyncStateT } from 'src/utils'
import { GetRepoSyncsQuery } from '../graphql/generated/schema'

/**
 * Method which iterate each sync and map it to RepoSyncDataType to be shown in table 
 * @param data Sync list that comes from data base in GetRepoSyncsQuery format
 * @returns RepoSyncData with syncs info and its RepoSyncDataType info by each sync
 */
const mapToSyncsData = (data: GetRepoSyncsQuery | undefined): RepoSyncData => {
  // General repo info 
  const repoData: RepoSyncData = {
    name: data?.repo?.repo.replace('https://github.com/', '') || '',
    type: data?.repo?.isGithub ? 'github' : 'other',
  }

  const mappedData: Array<RepoSyncDataType> = []

  data?.repo?.repoSyncs.nodes.forEach((s) => {
    // 1. Get sync info
    const syncData: RepoSyncDataType = {
      data: {
        title: s?.syncType || '',
        brief: s?.repoSyncTypeBySyncType?.description || '',
      },
      latestRun: s?.repoSyncQueues.nodes[0]?.createdAt,
      status: {
        data: [],
        syncState: s?.repoSyncQueues.nodes.length !== 0 ? mapToRepoSyncStateT(s?.repoSyncQueues.nodes[0]?.status || '') : 'empty',
      }
    }

    // 2. Get status data of a sync (sync queues)
    s?.repoSyncQueues.nodes.forEach((q) => {
      const queueData: SyncStatusDataT = {
        status: mapToRepoSyncStateT(q?.status || ''),
        runningTime: differenceInSeconds(new Date(q?.doneAt), new Date(q?.createdAt)),
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
