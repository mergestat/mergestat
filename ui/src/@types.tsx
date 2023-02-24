import { ApexOptions } from 'apexcharts'
import { ReactElement } from 'react'
import { RepoSyncQueue } from './api-logic/graphql/generated/schema'

export type RepoSyncStateT = 'disabled' | 'running' | 'queued' | 'succeeded' | 'warning' | 'error' | 'empty'

export type RepoExportT = 'url' | 'gh-org' | 'gh-user' | 'gh-auto' | 'csv'

export type AlertType = 'warning' | 'info' | 'success' | 'error'

export type UserTypeUI = 'Admin' | 'User' | 'Read Only' | 'Unknown'

export type UserType = 'ADMIN' | 'USER' | 'READ_ONLY'

export type ImportStatusType = 'SUCCESS' | 'FAILURE'

export type ChartType = 'line' | 'bar'

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

export type ProviderT = {
  id: string
  name: string
  vendor: string
  url: string
}

export type RepoDataPropsT = {
  id: string
  name: string
  createdAt: Date
  provider: ProviderT
  autoImportFrom?: string | null
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
    labels?: string[]
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
  tags: TagType[]
  provider: ProviderT
  autoImportFrom?: string | null
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
    provider: ProviderT
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

export interface RepoSyncQueueW extends RepoSyncQueue {
  warnings?: {
    totalCount: number
  }
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

/** Apex Charts */

export interface ApexDataSerie {
  x: Date | string | number
  y: string | number
}

export interface ApexSerie {
  name: string,
  data: ApexDataSerie[]
}

export type ChartData = {
  serie?: string
  xAxis?: string
  xAxisType?: string
  yAxis?: string
  options?: ApexOptions
  series?: ApexSerie[]
}

export type SingleMetricData = {
  label?: string
  selectedColumnName?: string
  selectedColumnIndex?: number
  stat?: string
}

export type ActionType = {
  reset?: boolean
  tab?: string
  remove?: boolean
  payload?: SingleMetricData | ChartData
}

export type TabsState = {
  [key: string]: SingleMetricData | ChartData
}

export interface TabData {
  tabId: string
  title: ReactElement | string
  content: ReactElement | string
  disabled?: boolean
  closable?: boolean
}

export interface ColumnInfo {
  name: string,
  format: string
}

/** Saved Queries */

export type SavedQueryData = {
  id: string
  createdAt?: string
  createdBy?: string | null | undefined
  name?: string | null | undefined
  description?: string | null | undefined
}

/** Git Sources */

export type GitSourceData = {
  id: string
  name: string
  description?: string | null | undefined
  createdAt: string
  settings: JSON
  vendor: string
  reposByProvider: {
    totalCount: number
  }
}

export type AuthDetail = {
  id?: string
  type?: string
  credentials?: string | null
  createdAt?: string
}

export type RepoAuto = {
  id: string
  settings: JSON
  totalRepos: number
}

export type RepoManual = {
  id: string
  repo: string
  settings: JSON
}

export type GitSourceDetail = {
  id: string
  name: string
  description?: string | null
  vendor: string
  settings: JSON

  auth?: AuthDetail
  auto: RepoAuto[]
  manual: RepoManual[]

  totalAuto: number
  totalManual: number
  totalRepos: number
}
