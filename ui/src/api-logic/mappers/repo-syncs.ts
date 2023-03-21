import { differenceInMilliseconds } from 'date-fns'
import { RepoSyncData, RepoSyncDataType, RepoSyncQueueW, SyncStatusDataT } from 'src/@types'
import { getExternalRepoLink, getRepoFromUrl, getSimpleDurationTime, getSimpleDurationTimeSeconds, getStatus } from 'src/utils'
import { SYNC_REPO_METHOD, SYNC_STATUS, VENDOR_TYPE } from 'src/utils/constants'
import { GetRepoDataQuery, GetRepoSyncsQuery } from '../graphql/generated/schema'

/**
 * Method to get Repo data into RepoSyncData
 * @param data Repo data that comes from data base in GetRepoDataQuery format
 * @returns RepoSyncData with the Repo data
 */
const mapToRepoData = (data: GetRepoDataQuery | undefined): RepoSyncData => {
  // General repo info
  const repoData: RepoSyncData = {
    id: data?.repo?.id,
    name: getRepoFromUrl(data?.repo?.repo || ''),
    externalRepoLink: getExternalRepoLink(data?.repo?.repo),
    tags: data?.repo?.tags.map((t: string) => ({ title: t, checked: true })),
    autoImportFrom: data?.repo?.repoImport && (
      data?.repo?.provider?.vendor === VENDOR_TYPE.GITHUB
        ? `${data?.repo?.repoImport?.settings.type === SYNC_REPO_METHOD.GH_USER ? 'user' : 'org'}: ${data?.repo?.repoImport?.settings.userOrOrg}`
        : data?.repo?.provider?.vendor === VENDOR_TYPE.GITLAB
          ? `${data?.repo?.repoImport?.settings.type === SYNC_REPO_METHOD.GL_USER ? 'user' : 'group'}: ${data?.repo?.repoImport?.settings.userOrGroup}`
          : data?.repo?.provider?.vendor === VENDOR_TYPE.BITBUCKET ? `${data?.repo?.repoImport?.settings.owner}` : undefined
    ),
    provider: {
      id: data?.repo?.provider?.id,
      name: data?.repo?.provider?.name || '',
      vendor: data?.repo?.provider?.vendor || '',
      url: data?.repo?.provider?.settings?.url,
    },
  }

  return repoData
}

/**
 * Method which iterate each sync and map it to RepoSyncDataType to be shown in table
 * @param data Sync list that comes from data base in GetRepoSyncsQuery format
 * @returns RepoSyncData with syncs info and its RepoSyncDataType info by each sync
 */
const mapToRepoSyncsData = (data: GetRepoSyncsQuery | undefined): RepoSyncDataType[] => {
  const syncsData: Array<RepoSyncDataType> = []

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
        scheduleEnabled: syncType?.scheduleEnabled || false,
        typeGroup: st.typeGroup,
        labels: st.labels.nodes.map(l => l.label)
      },
      latestRun: syncType?.repoSyncQueues.nodes[0]?.doneAt ?? syncType?.repoSyncQueues.nodes[1]?.doneAt,
      avgRunningTime: '-',
      status: {
        data: [],
        syncState: syncType?.repoSyncQueues.nodes.length !== 0 ? getStatus(syncType?.repoSyncQueues.nodes[0] as RepoSyncQueueW) : SYNC_STATUS.empty,
      }
    }

    // 3. Get status data of a sync (sync queues)
    let succeededSyncs: number[] = []
    syncType?.repoSyncQueues.nodes.forEach((q) => {
      const queueData: SyncStatusDataT = {
        id: q.id,
        repoId: data?.repo?.id,
        syncTypeId: syncType?.id,
        status: getStatus(q as RepoSyncQueueW),
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

    syncsData.push(syncData)
  })

  return syncsData
}

export { mapToRepoData, mapToRepoSyncsData }
