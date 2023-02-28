import { ImportStatusType, RepoImportData } from 'src/@types'
import { SYNC_REPO_METHOD } from 'src/utils/constants'
import { GetRepoImportsQuery } from '../graphql/generated/schema'

/**
 * Method which iterate each repo import and map it to RepoImportData to be shown in table
 * @param data Repo import list that comes from data base in GetRepoImportsQuery format
 * @returns Repo import list from data base mapped to RepoImportData list
 */
const mapToImportsData = (data: GetRepoImportsQuery | undefined): Array<RepoImportData> => {
  const mappedData: Array<RepoImportData> = []

  data?.repoImports?.nodes.forEach((imp) => {
    // Consolidated Import info
    const importInfo: RepoImportData = {
      id: imp.id,
      importDone: !!imp.lastImport,
      type: imp.settings.type === SYNC_REPO_METHOD.GH_USER ? 'GitHub user' : 'GitHub org',
      name: imp.settings.userOrOrg,
      lastSync: imp.lastImport ? imp.lastImport : '',
      status: imp.importStatus as ImportStatusType,
      totalRepos: imp.repos.totalCount,
      vendor: imp.provider?.vendor || '',
      vendorUrl: imp.provider?.settings.url
    }
    mappedData.push(importInfo)
  })

  return mappedData
}

export { mapToImportsData }
