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
    const keysJobs = latestRuns && Object.keys(latestRuns)

    // 2. Get sync info
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
      latestRun: latestRuns && (latestRuns[keysJobs[0]].completed_at ?? latestRuns[keysJobs[1]]?.completed_at),
      avgRunningTime: '-',
      avgTotalSyncs: 0,
      syncState: latestRuns ? latestRuns[keysJobs[0]].status as RepoContainerSyncState : SYNC_CONTAINER_STATUS.empty,
      latestRuns: latestRuns
        ? getLatestRunOrdered(
          Object.entries(latestRuns).map(([jobId, jobData]) => ({
            id: jobId,
            repoId,
            syncId: syncData?.id,
            runningTime: jobData.duration_ms,
            status: jobData.status,
            doneAt: jobData.completed_at ? new Date(jobData.completed_at) : undefined
          }))
        )
        : []
    }

    if (latestRuns) {
      const jobsDurations = Object.entries(latestRuns).filter(job => job[1].status === SYNC_CONTAINER_STATUS.success).map(job => job[1].duration_ms)

      if (jobsDurations.length > 0) {
        const avg = jobsDurations.reduce((prev, cur) => (cur += prev), 0) / jobsDurations.length
        sync.avgTotalSyncs = jobsDurations.length
        sync.avgRunningTime = getSimpleDurationTimeMilliseconds(avg)
      }
    }

    syncsData.push(sync)
  })

  return syncsData.sort((a, b) => a.image.name.localeCompare(b.image.name))
}

const getLatestRunOrdered = (latestRuns: JobData[]): JobData[] => {
  const runningJob = latestRuns.find(job => !job.doneAt)
  const completedJobs = latestRuns.filter(job => job.doneAt).sort((a, b) => ((b.doneAt ? b.doneAt.getTime() : new Date().getTime()) - (a.doneAt ? a.doneAt.getTime() : new Date().getTime())))
  return runningJob ? [runningJob, ...completedJobs] : completedJobs
}

export { mapToRepoContainerSyncsData }
