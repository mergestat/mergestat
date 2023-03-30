import { differenceInMilliseconds } from 'date-fns'
import { JobData, RepoContainerSyncData } from 'src/@types'
import { getSimpleDurationTime, getSimpleDurationTimeSeconds, mapToContainerSyncState } from 'src/utils'
import { SYNC_STATUS } from 'src/utils/constants'
import { GetContainerSyncsQuery, JobStates } from '../../graphql/generated/schema'

/**
 * Method which iterate each sync and map it to RepoContainerSyncData to be shown in table
 * @param data Sync list that comes from data base in GetContainerSyncsQuery format
 * @param repoId Repo id to list its container syncs
 * @returns RepoSyncData with syncs info and its RepoContainerSyncData info by each sync
 */
const mapToRepoContainerSyncsData = (data: GetContainerSyncsQuery | undefined, repoId: string): RepoContainerSyncData[] => {
  const syncsData: Array<RepoContainerSyncData> = []

  // 0. Iterate over images (container_images)
  data?.containerImages?.nodes.forEach((im) => {
    // 1. Find sync data (container_syncs)
    const syncData = data?.containerSyncs?.nodes.find(sd => sd.image?.id === im.id)

    // 2. Get sync info
    const sync: RepoContainerSyncData = {
      order: 0,
      repo: {
        id: repoId
      },
      sync: {
        id: syncData?.id,
        scheduleId: syncData?.schedule.nodes[0]?.id,
        labels: []
      },
      image: {
        id: im.id,
        name: im?.name || '',
        description: im.description || ''
      },
      latestRun: syncData?.executions.nodes[0]?.job?.completedAt ?? syncData?.executions.nodes[1]?.job?.completedAt,
      avgRunningTime: '-',
      status: {
        data: [],
        syncState: syncData?.executions.nodes.length !== 0 ? mapToContainerSyncState(syncData?.executions.nodes[0].job?.status) : SYNC_STATUS.empty,
      }
    }

    // 3. Get status data of a sync (container_sync_executions)
    let succeededSyncs: number[] = []
    syncData?.executions.nodes.forEach((ex) => {
      const jobData: JobData = {
        id: ex.job?.id,
        repoId: syncData.repo?.id,
        syncId: syncData.id,
        status: mapToContainerSyncState(ex.job?.status),
        runningTime: ex?.job?.completedAt ? differenceInMilliseconds(new Date(ex?.job?.completedAt), new Date(ex?.job?.startedAt)) : 0,
        runningTimeReadable: ex?.job?.completedAt ? getSimpleDurationTime(new Date(ex?.job?.startedAt), new Date(ex?.job?.completedAt)) : ex?.job?.startedAt ? SYNC_STATUS.running : SYNC_STATUS.queued,
        doneAt: ex?.job?.completedAt ?? new Date(ex?.job?.completedAt)
      }

      if (jobData.status === JobStates.Success) {
        succeededSyncs = [...succeededSyncs, jobData.runningTime]
      }

      sync.order = 1
      sync.status.data?.push(jobData)
    })

    if (succeededSyncs.length > 0) {
      const avg = succeededSyncs.reduce((prev, cur) => (cur += prev)) / succeededSyncs.length
      sync.avgRunningTime = getSimpleDurationTimeSeconds(avg / 1000)
    }

    syncsData.push(sync)
  })

  return syncsData
}

export { mapToRepoContainerSyncsData }
