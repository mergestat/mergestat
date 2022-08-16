export type RepoSyncStateT = 'disabled' | 'running' | 'queued' | 'succeeded' | 'failed' | 'empty'

export type RepoExportT = 'url' | 'gh-org' | 'gh-user' | 'csv'

export type AlertType = 'warning' | 'info' | 'success' | 'error'

export type RepoType = 'github' | 'gitlab' | 'bitbucket' | 'other'

export type TagType = {
  title: string
  checked: boolean
  color?: string
}

/** Repositories Data Props Type */

export type RepoSyncDataT = {
  idType: string
  type: string
  idLastSync: string
  lastSync: string
}

export type RepoDataStatusT = {
  type: RepoSyncStateT
  count: number
  syncs?: Array<RepoSyncDataT>
}

export type RepoDataPropsT = {
  id: string
  name: string
  createdAt: Date
  type: RepoType
  automaticImport?: boolean
  tags: Array<{ title: string, checked: boolean }>
  lastSync: string
  status: Array<RepoDataStatusT>
}

/** Repository Data Props Type */

export type SyncStatusDataT = {
  runningTime: number
  runningTimeReadable: string
  status: string
  doneAt?: Date
}

export type RepoSyncDataType = {
  data: {
    id: string
    title: string
    brief: string
  }
  latestRun: string
  status: {
    data?: SyncStatusDataT[]
    syncState: RepoSyncStateT
  }
}

export type RepoSyncData = {
  name: string
  type: RepoType
  syncs?: Array<RepoSyncDataType>
}

/** Repository Data Logs Type */
export type SyncTypeInfo = {
  id: string
  title: string
  brief: string
  syncState: RepoSyncStateT
}

export type SyncLogsType = {
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

export type SyncTypeData = {
  repo: {
    id: string
    name: string
    type: RepoType
  }
  sync?: SyncTypeInfo
  logs?: Array<SyncLogsType>
}

export type SettingsDataType = {
  isSelected?: boolean
  column: string
  type: string
}
