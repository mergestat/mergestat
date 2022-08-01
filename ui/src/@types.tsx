export type RepoSyncStateT =
  | 'disabled'
  | 'running'
  | 'queued'
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
  type: RepoSyncStateT
  count: number
}

export type RepoType = 'github' | 'gitlab' | 'bitbucket' | 'other'

export type RepoDataPropsT = {
  id: string
  name: string
  createdAt: Date
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
  runningTime: number
  runningTimeReadable: string
  status: string
  doneAt?: Date
}

export type RepoSyncDataType = {
  data: {
    title: string
    brief: string
  }
  latestRun: string
  status: {
    data?: SyncStatusDataT[]
    syncState: RepoSyncStateT
  }
}

/** Repository Data Logs Type */
export type SyncLogsType = {
  id: string
  title: string
  syncType: RepoSyncStateT
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
