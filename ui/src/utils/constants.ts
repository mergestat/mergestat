export const DATE_FORMAT = {
  A: 'yyyy/MM/dd HH:mm',
  B: 'dd LLL yyyy - HH:mm'
}

export const API = {
  GITHUB_GRAPHQL: 'https://api.github.com/graphql',
}

export const GITHUB_URL = 'https://github.com/'

export const MERGESTAT_TITLE = 'MergeStat |'

export enum TEST_IDS {
  emptyRepositoryTable = 'empty-repository-table',
  repoListEmpty = 'repo-list-empty',
  repoTableList = 'repo-table-list',
  repoDataDropdown = 'repo-data-dropdown',
  inputRepoSearch = 'input-repo-search',
  repoNameTable = 'repo-name-table',
  addRepoInputText = 'add-repo-input-text',
  addRepoButton = 'add-repo-button',
  addRepoToDbButton = 'add-repo-to-db-button',
  addRepoTextArea = 'add-repo-text-area',
  patInputText = 'pat-input-text',
  patValidateToken = 'pat-validate-token',
  patSetToken = 'pat-set-token',
  autoImportInputText = 'auto-import-input-text',
  autoImportButton = 'auto-import-button',
  importsTableList = 'imports-table-list',
  importsRow = 'imports-row',
}

export enum ADD_REPO {
  url = 'url',
  csv = 'csv',
  ghOrg = 'gh-org',
  ghUser = 'gh-user',
}

export enum SYNC_REPO_METHOD {
  GH_ORG = 'GITHUB_ORG',
  GH_USER = 'GITHUB_USER',
}

export const LINKS_TO = {
  createPAt: 'https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token',
}
