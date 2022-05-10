import { repSyncState } from 'src/views/@types'

export type SyncLogsType = {
  id: string
  collapsed: boolean
  sync_type: repSyncState
  records: number
  duration: string
  sync_start: string
}
