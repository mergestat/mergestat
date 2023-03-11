import { ImportStatusType, RepoImportData, RepoManualImportData } from 'src/@types'
import { getRepoFromUrl, getVendorProp } from 'src/utils'
import { SYNC_REPO_METHOD, VENDOR_TYPE } from 'src/utils/constants'
import { GetRepoImportsQuery, GetRepoManualImportsQuery } from '../graphql/generated/schema'

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
      type: imp.provider?.vendor === VENDOR_TYPE.GITHUB ? (imp.settings.type === SYNC_REPO_METHOD.GH_USER ? 'GitHub user' : 'GitHub org') : '',
      name: imp.settings[getVendorProp(imp.provider?.vendor || '')],
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

/**
 * Method which iterate each repo manual import and map it to RepoManualImportData to be shown in table
 * @param data Repo manual import list that comes from data base in GetRepoManualImportsQuery format
 * @returns Repo manual import list from data base mapped to RepoManualImportData list
 */
const mapToManualImportsData = (data: GetRepoManualImportsQuery | undefined): Array<RepoManualImportData> => {
  const mappedData: Array<RepoManualImportData> = []

  data?.repos?.nodes.forEach((repo) => {
    const repoInfo: RepoManualImportData = {
      id: repo.id,
      name: getRepoFromUrl(repo.repo),
      vendor: repo.provider?.vendor || '',
      vendorUrl: repo.provider?.settings.url
    }
    mappedData.push(repoInfo)
  })
  return mappedData
}

export { mapToImportsData, mapToManualImportsData }
