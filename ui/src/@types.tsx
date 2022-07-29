export type RepSyncStateT =
  | 'disabled'
  | 'running'
  | 'succeeded'
  | 'failed'
  | 'empty'

export type AlertType = 'warning' | 'info' | 'success' | 'error'

export type TagType = {
  title: string
  checked: boolean
  color?: string
}

/** Repositories Data Props Type */
export type RepoDataStatusT = {
  type: RepSyncStateT
  count: number
}

export type RepoType = 'github' | 'gitlab' | 'bitbucket' | 'other'

export type RepoDataPropsT = {
  id: string
  name: string
  lastUpdate: string
  type: RepoType
  automaticImport?: boolean
  tags: Array<{ title: string; checked: boolean }>
  lastSync: string
  status: Array<RepoDataStatusT>
}

/** Repository Data Props Type */
export type RepoSyncData = {
  name: string
  type: RepoType
  syncs?: Array<RepoSyncDataType>
}

export type SyncStatusDataT = {
  value: number
  status: string
  doneAt: string
}

export type RepoSyncDataType = {
  data: {
    title: string
    brief: string
  }
  latestRun: string
  status: {
    data?: SyncStatusDataT[]
    syncState: RepSyncStateT
  }
}

/** Repository Data Logs Type */
export type SyncLogsType = {
  id: string
  title: string
  syncType: RepSyncStateT
  records?: number
  duration?: string
  syncStart: string
  logs?: string[]
}

export type SettingsDataType = {
  isSelected?: boolean
  column: string
  type: string
}
