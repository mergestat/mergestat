export const DATE_FORMAT = {
  A: 'MM/dd/yyyy HH:mm:ss',
  B: 'dd LLL yyyy - HH:mm'
}

export const API = {
  GITHUB_GRAPHQL: 'https://api.github.com/graphql',
}

export const GITHUB_URL = 'https://github.com/'

export const MERGESTAT_TITLE = 'MergeStat |'

export enum TEST_IDS {
  emptyRepository = 'empty-repository',
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
  syncsTypesRow = 'syncs-types-row',
  syncsTypesSyncNowButton = 'syncs-types-sync-now-button',
  removeRepoSettingsTab = 'remove-repo-settings-tab',
  removeRepoButton = 'remove-repo-button',
  removeRepoButtonModal = 'remove-repo-button-modal'
}

export enum ADD_REPO {
  url = 'url',
  csv = 'csv',
  ghAuto = 'gh-auto',
}

export enum SYNC_REPO_METHOD {
  GH_ORG = 'GITHUB_ORG',
  GH_USER = 'GITHUB_USER',
}

export enum SYNC_STATUS {
  disabled = 'disabled',
  running = 'running',
  queued = 'queued',
  succeeded = 'succeeded',
  error = 'error',
  empty = 'empty'
}

export enum COOKIE {
  jwt = 'jwt'
}

export const LINKS_TO = {
  createPAt: 'https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic',
}

export enum States {
  Empty = 'Empty',
  Loading = 'Loading',
  Filled = 'Filled',
  Canceled = 'Canceled',
  Error = 'Error'
}

export enum EXPORT_FORMAT {
  JSON = 'JSON',
  CSV = 'CSV',
}

export const REPOS_REFETCHES = ['getRepos', 'getRepoTotalCount', 'getAllEnabledRepos', 'getSyncErrors']
