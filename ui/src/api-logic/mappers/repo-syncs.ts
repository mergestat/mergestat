import { differenceInMilliseconds } from 'date-fns'
import { RepoSyncData, RepoSyncDataType, SyncStatusDataT } from 'src/@types'
import { getSimpleDurationTime, getSimpleDurationTimeSeconds, getStatus } from 'src/utils'
import { GITHUB_URL, SYNC_REPO_METHOD, SYNC_STATUS } from 'src/utils/constants'
import { GetRepoSyncsQuery, RepoSyncQueue } from '../graphql/generated/schema'

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
    gitHubPat: (data?.serviceAuthCredentials?.totalCount && data?.serviceAuthCredentials?.totalCount > 0) || false,
    tags: data?.repo?.tags.map((t: string) => ({ title: t, checked: true })),
    autoImportFrom: data?.repo?.repoImport
      ? data?.repo?.repoImport?.type === SYNC_REPO_METHOD.GH_USER
        ? `user: ${data?.repo?.repoImport?.settings.user}`
        : `org: ${data?.repo?.repoImport?.settings.org}`
      : undefined,
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
      latestRun: syncType?.repoSyncQueues.nodes[0]?.doneAt ?? syncType?.repoSyncQueues.nodes[1]?.doneAt,
      avgRunningTime: '-',
      status: {
        data: [],
        syncState: syncType?.repoSyncQueues.nodes.length !== 0 ? getStatus(syncType?.repoSyncQueues.nodes[0] as RepoSyncQueue) : SYNC_STATUS.empty,
      }
    }

    // 3. Get status data of a sync (sync queues)
    let succeededSyncs: number[] = []
    syncType?.repoSyncQueues.nodes.forEach((q) => {
      const queueData: SyncStatusDataT = {
        id: q.id,
        repoId: data?.repo?.id,
        syncTypeId: syncType?.id,
        status: getStatus(q as RepoSyncQueue),
        runningTime: q?.doneAt ? differenceInMilliseconds(new Date(q?.doneAt), new Date(q?.startedAt)) : 0,
        runningTimeReadable: q?.doneAt ? getSimpleDurationTime(new Date(q?.startedAt), new Date(q?.doneAt)) : q?.startedAt ? SYNC_STATUS.running : SYNC_STATUS.queued,
        doneAt: q?.doneAt ?? new Date(q?.doneAt)
      }

      if (queueData.status === SYNC_STATUS.succeeded) {
        succeededSyncs = [...succeededSyncs, queueData.runningTime]
      }
      syncData.status.data?.push(queueData)
    })

    if (succeededSyncs.length > 0) {
      const avg = succeededSyncs.reduce((prev, cur) => (cur += prev)) / succeededSyncs.length
      syncData.avgRunningTime = getSimpleDurationTimeSeconds(avg / 1000)
    }

    mappedData.push(syncData)
  })

  repoData.syncs = mappedData
  return repoData
}

export { mapToSyncsData }
