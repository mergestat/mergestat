import { repSyncState } from 'src/@types'

export type SyncLogsType = {
  id: string
  collapsed: boolean
  sync_type: repSyncState
  records: number
  duration: string
  sync_start: string
}
