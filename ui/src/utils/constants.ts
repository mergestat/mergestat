export const DATE_FORMAT = {
  A: 'MM/dd/yyyy HH:mm:ss',
  B: 'dd LLL yyyy - HH:mm',
  C: 'dd-MM-yyyy',
  D: 'LLL dd, yyyy'
}

export const API = {
  GITHUB_GRAPHQL: 'https://api.github.com/graphql',
}

export const GITHUB_URL = 'https://github.com/'

export const MERGESTAT_TITLE = '- MergeStat'

export const FONT_FAMILY = 'Inter, ui-sans-serif, system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif'

export const MSM_NON_READ_ONLY = 'Non read-only queries are able to make changes in the underlying database, be careful!'

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
  removeRepoButtonModal = 'remove-repo-button-modal',
  inputUserSearch = 'input-user-search',
  usersTableList = 'users-table-list',
  usersTableListAddUser = 'users-table-list-add-user',
  usersListEmpty = 'users-list-empty',
  usersNameTable = 'users-name-table',
  usersAddUsername = 'users-add-username',
  usersAddPassword = 'users-add-password',
  usersAddPasswordConfirm = 'users-add-password-confirm',
  usersAddRole = 'users-add-role',
  usersAddButton = 'users-add-button',
  usersEditUser = 'users-edit-user',
  usersEditPassword = 'users-edit-password',
  usersEditPasswordConfirm = 'users-edit-password-confirm',
  usersEditRole = 'users-edit-role',
  usersEditButton = 'users-edit-button',
  usersRemoveUser = 'users-remove-user',
  usersRemoveUserButton = 'users-remove-user-button',
  usersSettingsPassword = 'users-settings-password',
  usersSettingsPasswordConfirm = 'users-settings-password-confirm',
  usersSettingsChangeModal = 'users-settings-change-modal',
  usersSettingsChangeButton = 'users-settings-change-button',
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
  warning = 'warning',
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

export enum USER_TYPE_UI {
  ADMIN = 'Admin',
  USER = 'User',
  READ_ONLY = 'Read Only',
  UNKNOWN = 'Unknown'
}

export enum USER_TYPE {
  ADMIN = 'ADMIN',
  USER = 'USER',
  READ_ONLY = 'READ_ONLY'
}

export enum IMPORT_STATUS_TYPE {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}

export enum TAB_TYPE {
  LINE = 'LINE',
  BAR = 'BAR',
  SINGLE_METRIC = 'SINGLE_METRIC'
}

export enum XAXIS_TYPE {
  DATETIME = 'datetime',
  CATEGORY = 'category',
  NUMERIC = 'numeric'
}

export enum XAXIS_TYPE_LABEL {
  DATE = 'date',
  STRING = 'string',
  NUMBER = 'number'
}

export const USER_ROLES = [
  {
    key: 'ADMIN',
    name: 'Admin',
    desc: 'Admins can take any action'
  },
  {
    key: 'USER',
    name: 'User',
    desc: 'Users can take most actions, but cannot create new users'
  },
  {
    key: 'READ_ONLY',
    name: 'Read Only',
    desc: 'Read Only users can only read data'
  },
]
