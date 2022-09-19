import { RepoDataPropsT, RepoDataStatusT, RepoSyncStateT } from 'src/@types'
import { capitalize, mapToRepoSyncStateT } from 'src/utils'
import { GITHUB_URL, SYNC_REPO_METHOD } from 'src/utils/constants'
import { GetReposQuery, Repo, RepoSync, RepoSyncQueue } from '../graphql/generated/schema'

interface SyncTypeFlatten {
  idType: string
  type: string
  idLastSync: string
  lastSync: string
  status: string
}

interface SyncCounter {
  count: number
  syncs: Array<SyncTypeFlatten>
}

/**
 * Method which iterate each repo and map it to RepoDataPropsT to be shown in table
 * @param data Repo list that comes from data base in GetReposQuery format
 * @returns Repo list from data base mapped to RepoDataPropsT list
 */
const mapToRepoData = (data: GetReposQuery | undefined): Array<RepoDataPropsT> => {
  const mappedData: Array<RepoDataPropsT> = []

  data?.repos?.nodes.forEach((r) => {
    // Consolidated Repo info
    const repoInfo: RepoDataPropsT = {
      id: r?.id,
      name: r?.repo.replace(GITHUB_URL, '') || '',
      createdAt: new Date(r?.createdAt),
      autoImportFrom: r?.repoImport
        ? r?.repoImport?.type === SYNC_REPO_METHOD.GH_USER
          ? `user: ${r?.repoImport?.settings.user}`
          : `org: ${r?.repoImport?.settings.org}`
        : undefined,
      lastSync: '',
      type: r?.isGithub ? 'github' : 'other',
      tags: r?.tags.map((t: string) => ({ title: t, checked: true })),
      status: [],
    }

    repoInfo.status = getSyncStatuses(r as Repo, repoInfo)
    mappedData.push(repoInfo)
  })

  return mappedData
}

/**
 * Method to group sync statuses with its quantity
 * @param r Specific repo to iterate its syncs
 * @param repoInfo Repo main info where info is being consolidated
 * @returns List of sync statuses with its corresponding quantity
 */
const getSyncStatuses = (r: Repo, repoInfo: RepoDataPropsT): Array<RepoDataStatusT> => {
  // 1. Syncs info is flatten in a simple object
  const syncTypes = r?.repoSyncs.nodes.map((st: RepoSync) => {
    const syncObj: SyncTypeFlatten = {
      idType: st?.id,
      type: capitalize(st?.syncType.replace(/_/ig, ' ')),
      idLastSync: '',
      status: '',
      lastSync: ''
    }

    st?.repoSyncQueues.nodes.forEach((ls: RepoSyncQueue) => {
      syncObj.idLastSync = ls?.id || ''
      syncObj.lastSync = ls?.createdAt || ''
      syncObj.status = ls?.status || ''
    })

    return syncObj
  })

  // 2. Syncs are grouped by status with its corresponding quantity
  const mapSyncs = new Map<RepoSyncStateT, SyncCounter>()
  syncTypes?.forEach((st: SyncTypeFlatten) => {
    const status = mapToRepoSyncStateT(st.status)
    let syncCounter = mapSyncs.get(status)

    // 2.1. Grouping syncs to show in 'pop up'
    if (syncCounter) {
      syncCounter = {
        count: ++syncCounter.count,
        syncs: [...syncCounter.syncs, st]
      }
    } else {
      syncCounter = {
        count: 1,
        syncs: [st]
      }
    }
    mapSyncs.set(status, syncCounter)
  })

  // 3. Previous info is transform to necesary RepoDataStatusT object
  const mappedSyncs: Array<RepoDataStatusT> = []
  mapSyncs?.forEach((value, key) => {
    mappedSyncs.push({ type: key, count: value.count, syncs: value.syncs })
  })

  // 4. Is setted up last sync regarding sync status
  repoInfo.lastSync = syncTypes.length !== 0 ? syncTypes[0].lastSync : ''

  return mappedSyncs
}

export { mapToRepoData }
