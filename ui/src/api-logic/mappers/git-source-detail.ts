import { format } from 'date-fns'
import { AuthDetail, GitSourceDetail, RepoAuto, RepoManual } from 'src/@types'
import { DATE_FORMAT } from 'src/utils/constants'
import { GetGitSourceQuery } from '../graphql/generated/schema'

const mapToGitSourceDetail = (data: GetGitSourceQuery | undefined, searchAuto?: string, searchManual?: string): GitSourceDetail => {
  const authData = data?.provider?.auth.nodes[0]

  const detail = {
    id: data?.provider?.id,
    name: data?.provider?.name || '',
    description: data?.provider?.description,
    vendor: data?.provider?.vendor || '',
    settings: data?.provider?.settings,
    auth: authData
      ? {
        id: authData.id,
        type: authData.type,
        credentials: authData.credentials,
        createdAt: format(new Date(authData.createdAt?.toString()), DATE_FORMAT.D)
      } as AuthDetail
      : undefined,
    auto: [] as RepoAuto[],
    manual: [] as RepoManual[],
    totalAuto: 0,
    totalManual: 0,
    totalRepos: 0
  }

  let totalAuto = 0
  let nodesAuto = data?.provider?.auto.nodes || []
  if (searchAuto) nodesAuto = nodesAuto?.filter(n => n.settings.userOrOrg?.includes(searchAuto))

  nodesAuto.forEach((a) => {
    const repo: RepoAuto = {
      id: a.id,
      settings: a.settings,
      totalRepos: a.repos.totalCount
    }

    totalAuto += a.repos.totalCount
    detail.auto.push(repo)
  })

  let nodesManual = data?.provider?.manual.nodes || []
  if (searchManual) nodesManual = nodesManual?.filter(n => n.repo.includes(searchManual))
  nodesManual.forEach((m) => {
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
