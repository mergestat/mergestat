import { RepoDataPropsT, RepoDataStatusT } from 'src/@types'
import { mapToRepoSyncStateT } from 'src/utils'
import { GITHUB_URL } from 'src/utils/constants'
import { GetReposQuery, Repo, RepoSync, RepoSyncQueue } from '../graphql/generated/schema'

interface SyncTypeFlatten {
  type: string
  status: string
  lastSync: string
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
      lastSync: '',
      type: r?.isGithub ? 'github' : 'other',
      tags: [],
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
      type: st?.syncType,
      status: '',
      lastSync: ''
    }

    st?.repoSyncQueues.nodes.forEach((ls: RepoSyncQueue) => {
      syncObj.status = ls?.status || ''
      syncObj.lastSync = ls?.createdAt || ''
    })

    return syncObj
  })

  // 2. Syncs are grouped by status with its corresponding quantity
  const mapSyncs = new Map()
  syncTypes?.forEach((st: SyncTypeFlatten) => {
    const status = mapToRepoSyncStateT(st.status)
    let statusCount = mapSyncs.get(status)
    mapSyncs.set(status, statusCount ? ++statusCount : 1)
  })

  // 3. Previous info is transform to necesary RepoDataStatusT object
  const mappedSyncs: Array<RepoDataStatusT> = []
  mapSyncs?.forEach((value, key) => {
    mappedSyncs.push({ type: key, count: value })
  })

  // 4. Is setted up last sync regarding sync status
  repoInfo.lastSync = syncTypes.length !== 0 ? syncTypes[0].lastSync : ''

  return mappedSyncs
}

export { mapToRepoData }
