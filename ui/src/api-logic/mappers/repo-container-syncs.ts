import { RepoContainerSyncData } from 'src/@types'
import { SYNC_STATUS } from 'src/utils/constants'
import { GetContainerSyncsQuery } from '../graphql/generated/schema'

/**
 * Method which iterate each sync and map it to RepoContainerSyncData to be shown in table
 * @param data Sync list that comes from data base in GetContainerSyncsQuery format
 * @returns RepoSyncData with syncs info and its RepoContainerSyncData info by each sync
 */
const mapToRepoContainerSyncsData = (data: GetContainerSyncsQuery | undefined): RepoContainerSyncData[] => {
  const syncsData: Array<RepoContainerSyncData> = []

  data?.containerSyncs?.nodes.forEach((cs) => {
    // 2. Get sync info
    const syncData: RepoContainerSyncData = {
      image: {
        id: '',
        title: cs.image?.name || '',
        brief: cs.image?.description || '',
        scheduleEnabled: false,
        labels: []
      },
      latestRun: '',
      avgRunningTime: '-',
      status: {
        data: [],
        syncState: SYNC_STATUS.empty,
      }
    }

    syncsData.push(syncData)
  })

  return syncsData
}

export { mapToRepoContainerSyncsData }
