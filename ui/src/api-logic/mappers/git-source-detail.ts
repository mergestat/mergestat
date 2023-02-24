import { AuthDetail, GitSourceDetail, RepoAuto, RepoManual } from 'src/@types'
import { GetGitSourceQuery } from '../graphql/generated/schema'

const mapToGitSourceDetail = (data: GetGitSourceQuery | undefined): GitSourceDetail => {
  const authData = data?.provider?.auth.nodes[0]

  const detail = {
    id: data?.provider?.id,
    name: data?.provider?.name || '',
    description: data?.provider?.description,
    vendor: data?.provider?.vendor || '',
    settings: data?.provider?.settings,
    auth: authData
      ? { id: authData.id, type: authData.type, credentials: authData.credentials } as AuthDetail
      : undefined,
    auto: [] as RepoAuto[],
    manual: [] as RepoManual[],
    totalAuto: 0,
    totalManual: 0,
    totalRepos: 0
  }

  let totalAuto = 0
  data?.provider?.auto.nodes.forEach((a) => {
    const repo: RepoAuto = {
      id: a.id,
      settings: a.settings,
      totalRepos: a.repos.totalCount
    }

    totalAuto += a.repos.totalCount
    detail.auto.push(repo)
  })

  data?.provider?.manual.nodes.forEach((m) => {
    const repo: RepoManual = {
      id: m.id,
      repo: m.repo,
      settings: m.settings
    }
    detail.manual.push(repo)
  })

  detail.totalAuto = totalAuto
  detail.totalManual = data?.provider?.manual.totalCount || 0
  detail.totalRepos = detail.totalAuto + detail.totalManual

  return detail
}

export { mapToGitSourceDetail }