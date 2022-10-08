export type RepoSyncStateT = 'disabled' | 'running' | 'queued' | 'succeeded' | 'error' | 'empty'

export type RepoExportT = 'url' | 'gh-org' | 'gh-user' | 'gh-auto' | 'csv'

export type AlertType = 'warning' | 'info' | 'success' | 'error'

export type RepoType = 'github' | 'gitlab' | 'bitbucket' | 'other'

export interface TagType {
  title: string
  checked: boolean
  color?: string
}

/** Repositories Data Props Type */

export interface RepoSyncDataT {
  idType: string
  type: string
  idLastSync: string
  lastSync: string
}

export interface RepoDataStatusT {
  type: RepoSyncStateT
  count: number
  syncs?: RepoSyncDataT[]
}

export interface RepoDataPropsT {
  id: string
  name: string
  createdAt: Date
  type: RepoType
  autoImportFrom?: string
  tags: Array<{ title: string, checked: boolean }>
  lastSync: string
  status: RepoDataStatusT[]
}

/** Repository Data Props Type */

export interface SyncStatusDataT {
  id: string
  repoId: string
  syncTypeId: string
  runningTime: number
  runningTimeReadable: string
  status: string
  doneAt?: Date
}

export interface RepoSyncDataType {
  data: {
    id: string
    type: string
    title: string
    brief: string
  }
  latestRun: string
  avgRunningTime: string
  status: {
    data?: SyncStatusDataT[]
    syncState: RepoSyncStateT
  }
}

export interface RepoSyncData {
  id: string
  name: string
  type: RepoType
  gitHubPat: boolean
  tags: TagType[]
  autoImportFrom?: string
  syncs?: RepoSyncDataType[]
}

/** Repository Data Logs Type */
export interface SyncTypeInfo {
  id: string
  title: string
  brief: string
  syncState: RepoSyncStateT
}

export interface SyncLogsType {
  id: string
  title: string
  syncType: RepoSyncStateT
  records?: number
  duration?: string
  syncStart: string
  syncStartText: string
  collapsed?: boolean
  logs?: string[]
}

export interface SyncTypeData {
  repo: {
    id: string
    name: string
    type: RepoType
  }
  sync?: SyncTypeInfo
  logs?: SyncLogsType[]
  syncNow?: () => void
}

export interface SettingsDataType {
  isSelected?: boolean
  column: string
  type: string
}

/** Repo Imports Data Props Type */

export interface RepoImportData {
  id: string
  importDone: boolean
  source: string
  type: string
  lastSync: string
}

export interface SyncType {
  type: string
  description: string | null | undefined
  shortName: string
  checked: boolean
}

export interface ImportSync {
  name: string
  type: string
  opened: boolean
  defaultSyncs: SyncType[]
}
