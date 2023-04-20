import { JobData, JobSyncRun, RepoContainerSyncData, RepoContainerSyncState } from 'src/@types'
import { getSimpleDurationTimeMilliseconds } from 'src/utils'
import { SYNC_CONTAINER_STATUS } from 'src/utils/constants'
import { GetContainerSyncsQuery } from '../../graphql/generated/schema'

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
    const latestRuns = syncData?.latestSyncRuns as JobSyncRun

    // 2. Sort the syncs
    const sortedSyncs: JobData[] = latestRuns
      ? Object.entries(latestRuns).map(([jobId, jobData]) => ({
        id: jobId,
        repoId,
        syncId: syncData?.id,
        durationMs: jobData.duration_ms,
        runningTime: jobData.duration_ms,
        status: jobData.status,
        createdAt: jobData.created_at ? new Date(jobData.created_at) : undefined,
        doneAt: jobData.completed_at ? new Date(jobData.completed_at) : undefined
      })).sort((a, b) => (
        (b.createdAt ? b.createdAt.getTime() : new Date().getTime()) - (a.createdAt ? a.createdAt.getTime() : new Date().getTime())
      ))
      : []

    // 3. Get sync info
    const sync: RepoContainerSyncData = {
      repo: {
        id: repoId
      },
      sync: {
        id: syncData?.id,
        scheduleId: syncData?.schedule?.id,
        labels: []
      },
      image: {
        id: im.id,
        name: im?.name || '',
        description: im.description || ''
      },
      latestRun: (sortedSyncs[0]?.doneAt?.toString() ?? sortedSyncs[1]?.doneAt?.toString()) || '',
      avgRunningTime: '-',
      avgTotalSyncs: 0,
      syncState: sortedSyncs[0]?.status as RepoContainerSyncState,
      latestRuns: sortedSyncs
    }

    const jobsDurations = sortedSyncs?.filter(job => job.status === SYNC_CONTAINER_STATUS.success).map(job => job.durationMs)
    if (jobsDurations.length > 0) {
      const avg = jobsDurations.reduce((prev, cur) => (cur += prev), 0) / jobsDurations.length
      sync.avgTotalSyncs = jobsDurations.length
      sync.avgRunningTime = getSimpleDurationTimeMilliseconds(avg)
    }

    syncsData.push(sync)
  })

  console.log('Data: ', syncsData)

  return syncsData.sort((a, b) => a.image.name.localeCompare(b.image.name))
}

export { mapToRepoContainerSyncsData }
