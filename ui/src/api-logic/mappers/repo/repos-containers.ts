import { RepoContainerData } from 'src/@types'
import { getRepoFromUrl } from 'src/utils'
import { SYNC_REPO_METHOD, VENDOR_TYPE } from 'src/utils/constants'
import { GetReposContainersQuery } from '../../graphql/generated/schema'

/**
 * Method which iterate each repo and map it to RepoContainerData to be shown in table
 * @param data Repo list that comes from data base in GetReposContainersQuery format
 * @returns Repo list from data base mapped to RepoContainerData list
 */
const mapToRepoData = (data: GetReposContainersQuery | undefined): Array<RepoContainerData> => {
  const repos: RepoContainerData[] = []

  data?.repos?.nodes.forEach((r) => {
    // Consolidated Repo info
    const repoInfo: RepoContainerData = {
      id: r?.id,
      name: getRepoFromUrl(r?.repo || ''),
      createdAt: new Date(r?.createdAt),
      autoImportFrom: r?.repoImport && (
        r?.provider?.vendor === VENDOR_TYPE.GITHUB
          ? `${r?.repoImport?.settings.type === SYNC_REPO_METHOD.GH_USER ? 'user' : 'org'}: ${r?.repoImport?.settings.userOrOrg}`
          : r?.provider?.vendor === VENDOR_TYPE.GITLAB
            ? `${r?.repoImport?.settings.type === SYNC_REPO_METHOD.GL_USER ? 'user' : 'group'}: ${r?.repoImport?.settings.userOrGroup}`
            : r?.provider?.vendor === VENDOR_TYPE.BITBUCKET ? `${r?.repoImport?.settings.owner}` : undefined
      ),
      provider: {
        id: r?.provider?.id,
        name: r?.provider?.name || '',
        vendor: r?.provider?.vendor || '',
        url: r?.provider?.settings?.url,
      },
      tags: r?.tags.map((t: string) => ({ title: t, checked: true })),
      stats: {
        error: r.stats.error,
        pending: r.stats.pending,
        running: r.stats.running,
        success: r.stats.success,
        warning: r.stats.warning,
        syncCount: r.stats.sync_count,
        lastSyncTime: r.stats.last_sync_time
      }
    }
    repos.push(repoInfo)
  })

  return repos
}

export { mapToRepoData }
