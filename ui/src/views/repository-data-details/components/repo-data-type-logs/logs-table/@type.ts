import { RepSyncStateT } from 'src/@types'

export type SyncLogsType = {
  id: string
  collapsed: boolean
  sync_type: RepSyncStateT
  records: number
  duration: string
  sync_start: string
}
