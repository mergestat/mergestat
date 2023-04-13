import { GitSourceCSData } from 'src/@types'
import { GetGitSourcesListCsQuery } from '../../graphql/generated/schema'

const mapToGitSourceCS = (data: GetGitSourcesListCsQuery | undefined): GitSourceCSData[] => {
  const gitSourcesCS: GitSourceCSData[] = []

  data?.providers?.nodes.forEach((p) => {
    const provider: GitSourceCSData = {
      id: p.id,
      name: p.name,
      description: p.description,
      createdAt: p.createdAt,
      settings: p.settings,
      vendor: p.vendor,
      totalRepos: p.reposByProvider.totalCount,
      totalEnabledRepos: data?.containerSyncs?.nodes.filter(cs => cs.scheduled && cs.repo?.provider === p.id).length || 0
    }
    gitSourcesCS.push(provider)
  })

  return gitSourcesCS
}

export { mapToGitSourceCS }
