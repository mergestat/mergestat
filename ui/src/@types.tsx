import { ApexOptions } from 'apexcharts'
import { ReactElement } from 'react'
import { RepoSyncQueue } from './api-logic/graphql/generated/schema'
import { TAB_TYPE } from './utils/constants'

export type RepoSyncStateT = 'disabled' | 'running' | 'queued' | 'succeeded' | 'warning' | 'error' | 'empty'

export type RepoContainerSyncState = 'errored' | 'pending' | 'running' | 'success' | 'warning' | 'empty'

export type RepoExportT = 'url' | 'gh-org' | 'gh-user' | 'gh-auto' | 'csv'

export type AlertType = 'warning' | 'info' | 'success' | 'error'

export type UserTypeUI = 'Admin' | 'User' | 'Read Only' | 'Unknown'

export type UserType = 'ADMIN' | 'USER' | 'READ_ONLY'

export type ImportStatusType = 'SUCCESS' | 'FAILURE'

export type ChartType = TAB_TYPE.BAR | TAB_TYPE.LINE

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

export type TableFilter = {
  search: string
  total: number,
  rows: number,
  page: number,
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

export type RepoStats = {
  error: number,
  pending: number,
  running: number,
  success: number,
  warning: number,
  syncCount: number,
  lastSyncTime: string
}

export type RepoContainerData = {
  id: string
  name: string
  createdAt: Date
  provider: ProviderT
  autoImportFrom?: string | null
  tags: Array<{ title: string, checked: boolean }>
  stats: RepoStats
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
  externalRepoLink?: string
  tags: TagType[]
  provider: ProviderT
  autoImportFrom?: string | null
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
    externalRepoLink?: string
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

export type RepoManualImportData = {
  id: string
  name: string
  vendor: string
  vendorUrl: string
}

export type RepoImportData = {
  id: string
  importDone: boolean
  name: string
  type: string
  lastSync: string
  status: ImportStatusType
  totalRepos: number
  vendor: string
  vendorUrl: string
  importError?: string | null
}

export type SyncType = {
  type: string
  description: string | null | undefined
  shortName: string
  checked: boolean
}

export type ContainerImage = {
  id: string
  description: string | null | undefined
  name: string
  checked: boolean
}

export type ImportContainerImage = {
  name: string
  type: string
  opened?: boolean
  defaultSyncs: Array<ContainerImage>
}

export type ImportSync = {
  name: string
  type: string
  opened?: boolean
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
  chartType: string
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

export function isChartData(maybeChart: SingleMetricData | ChartData | undefined): maybeChart is ChartData {
  if (maybeChart === undefined) return false
  return (maybeChart as ChartData).xAxis !== undefined
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

/** Query History */

export type QueryHistoryData = {
  id: string
  runAt?: Date
  runBy: string
  query: string
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

export type GitSourceCSData = {
  id: string
  name: string
  description?: string | null | undefined
  createdAt: string
  settings: JSON
  vendor: string
  totalRepos: number
  totalEnabledRepos: number
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

export type DefaultRepoSync = {
  id: string
  name: string
  description?: string | null
  enabled: boolean
}

/** Schema */

export type ColumnData = {
  columnName: string | null,
  columnDescription?: string | null
}

export type TableData = {
  tableName: string | null
  columns: ColumnData[]
}

export type SchemaData = {
  schema: string | null
  tables: TableData[]
}

/** Repo syncs (Container Syncs) */

export type ContainerImageData = {
  id: string
  name: string
  description?: string | null
  version: string
  totalGitSources?: number
  totalRepos: number
}

export type ContainerSyncDetail = {
  id: string
  name: string
  description?: string | null
  type: string
  url: string
  version: string
  parameters: JSON
  totalRepos: number
}

export type JobData = {
  id: string
  repoId: string
  syncId: string
  durationMs: number
  runningTime: number
  runningTimeReadable?: string
  status: string
  createdAt?: Date
  doneAt?: Date
}

export interface JobSyncRun {
  [key: string]: {
    status: string,
    created_at: string,
    started_at: string,
    duration_ms: number,
    completed_at: string
  }
}

export type RepoContainerSyncData = {
  repo: {
    id: string
  }
  sync: {
    id: string
    scheduleId: string
    labels?: string[]
  }
  image: {
    id: string
    name: string
    description: string
  }
  latestRun: string
  avgTotalSyncs: number
  avgRunningTime: string
  syncState: RepoContainerSyncState
  latestRuns: JobData[]
}

export type ContainerSyncInfo = {
  id: string
  imageId: string
  name: string
  description: string
  parameters: JSON
  scheduleId: string
  syncState?: RepoContainerSyncState
  totalExecutions?: number
}

export type SyncContainerLogsType = {
  id: string
  title: string
  syncType: RepoContainerSyncState
  records?: number
  duration?: string
  syncStart: string
  syncStartText: string
  collapsed?: boolean
  logs?: string[]
}

export type ContainerSyncLogData = {
  sync?: ContainerSyncInfo
  logs?: SyncContainerLogsType[]
}

export type RepoBasicData = {
  id: string
  name: string
  externalRepoLink?: string
  provider: ProviderT
}

export type ContainerBasicData = {
  repo: RepoBasicData
  sync: {
    name: string
  }
}

/** Explore page */

export interface TopTenData {
  file_count?: number
  commits_count?: number
}

export interface LastModified {
  last_modified: Date
}

export interface ExploreData {
  files: number
  repos: number
  authors: number
  top_10_repos: {
    [key: string]: TopTenData
  }
  top_10_authors: {
    [key: string]: TopTenData
  }
  file_last_modified: {
    [key: string]: LastModified
  }
  repo_last_modified: {
    [key: string]: LastModified
  }
}
