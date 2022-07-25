import { RepoDataPropsT, RepoDataStatusT } from 'src/@types'
import { getTimeAgoFromNow } from 'src/utils'
import { GetReposQuery } from '../graphql/generated/schema'

const mapToRepoData = (data: GetReposQuery): Array<RepoDataPropsT> => {
  const mappedData: Array<RepoDataPropsT> = []

  data.repos?.nodes.forEach((r) => {
    let repoInfo: RepoDataPropsT = {
      name: `${r?.githubRepoInfo?.owner}/${r?.githubRepoInfo?.name}` || '',
      urlIcon: r?.githubRepoInfo?.openGraphImageUrl || '',
      lastUpdate:
        getTimeAgoFromNow(new Date(r?.githubRepoInfo?.updatedAt)) || '',
      lastSync: '',
      type: r?.isGithub ? 'github' : 'other',
      tags: [],
      status: [],
    }

    repoInfo.status = getStatusFromRepo(r, repoInfo)
    mappedData.push(repoInfo)
  })

  return mappedData
}

const getStatusFromRepo = (
  r: any,
  repoInfo: RepoDataPropsT
): Array<RepoDataStatusT> => {
  const syncTypes = r?.repoSyncs.nodes.map((st: any) => {
    const syncObj: Record<string, any> = {
      type: st?.syncType,
    }

    st?.repoSyncQueues.nodes.forEach((ls: any) => {
      syncObj.status = ls?.status || ''
      syncObj.lastSync = ls?.createdAt || ''
    })

    return syncObj
  })

  const mapSyncs = new Map()
  syncTypes?.forEach((st: any) => {
    const status = mapToRepSyncStateT(st.status)
    let statusCount = mapSyncs.get(status)
    mapSyncs.set(status, statusCount ? ++statusCount : 1)
  })

  const mappedSyncs: Array<RepoDataStatusT> = []
  mapSyncs?.forEach((value, key) => {
    mappedSyncs.push({ type: key, count: value })
  })
  repoInfo.lastSync = getTimeAgoFromNow(new Date(syncTypes[0].lastSync))

  return mappedSyncs
}

const mapToRepSyncStateT = (status: string) => {
  let newStatus
  switch (status) {
    case 'DONE':
      newStatus = 'succeeded'
      break
    case 'RUNNING':
      newStatus = 'running'
      break
    default:
      newStatus = 'failed'
      break
  }
  return newStatus
}

export { mapToRepoData }
