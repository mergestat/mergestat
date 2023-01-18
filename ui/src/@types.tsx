import { ReactElement } from 'react'

export type RepoSyncStateT = 'disabled' | 'running' | 'queued' | 'succeeded' | 'warning' | 'error' | 'empty'

export type RepoExportT = 'url' | 'gh-org' | 'gh-user' | 'gh-auto' | 'csv'

export type AlertType = 'warning' | 'info' | 'success' | 'error'

export type RepoType = 'github' | 'gitlab' | 'bitbucket' | 'other'

export type UserTypeUI = 'Admin' | 'User' | 'Read Only' | 'Unknown'

export type UserType = 'ADMIN' | 'USER' | 'READ_ONLY'

export type ImportStatusType = 'SUCCESS' | 'FAILURE'

export type TagType = {
  title: string
  checked: boolean
  color?: string
}

export type CrumbData = {
  text: string
  startIcon?: ReactElement
  endIcon?: ReactElement
  onClick?: () => void
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
  autoImportFrom?: string
  tags: Array<{ title: string, checked: boolean }>
  lastSync: string
  status: Array<RepoDataStatusT>
}

/** Repository Data Props Type */

export type SyncStatusDataT = {
  id: string
  repoId: string
  syncTypeId: string
  runningTime: number
  runningTimeReadable: string
  status: string
  doneAt?: Date
}

export type RepoSyncDataType = {
  data: {
    id: string
    type: string
    title: string
    brief: string
    scheduleEnabled: boolean
    typeGroup: string
  }
  latestRun: string
  avgRunningTime: string
  status: {
    data?: SyncStatusDataT[]
    syncState: RepoSyncStateT
  }
}

export type RepoSyncData = {
  id: string
  name: string
  type: RepoType
  gitHubPat: boolean
  tags: TagType[]
  autoImportFrom?: string
  syncs?: Array<RepoSyncDataType>
}

/** Repository Data Logs Type */
export type SyncTypeInfo = {
  id: string
  title: string
  brief: string
  scheduleEnabled: boolean
  typeGroup: string
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
  syncNow?: () => void
}

export type SettingsDataType = {
  isSelected?: boolean
  column: string
  type: string
}

/** Repo Imports Data Props Type */

export type RepoImportData = {
  id: string
  importDone: boolean
  source: string
  type: string
  lastSync: string
  status: ImportStatusType
}

export type SyncType = {
  type: string
  description: string | null | undefined
  shortName: string
  checked: boolean
}

export type ImportSync = {
  name: string
  type: string
  opened: boolean
  defaultSyncs: Array<SyncType>
}

export type AutoImportData = {
  id: string
  name: string
  type: string
  error?: string | null
}

/** Users Props Type */

export type UserData = {
  name: string
  role: UserTypeUI
  createdAt?: string
}

/** Query Props Type */

export type QueryResultProps = {
  rowCount?: number | null
  columns?: Array<{ name: string | number | boolean, format: string }> | null
  rows?: Array<Array<string | number | boolean>> | null
}

/** Query Tab Types */

export type LineChartData = {
  anyProp: string
}

export type BarChartData = {
  anyProp: string
}

export type SingleMetricData = {
  label?: string
  selectedColumnName?: string
  selectedColumnIndex?: number
  stat?: string
}

export type ActionType = {
  tab: number
  payload: SingleMetricData | BarChartData | LineChartData
}

export type TabsState = {
  [key: number]: SingleMetricData | BarChartData | LineChartData
}
