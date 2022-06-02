import React from 'react'
import { RepSyncStateT } from 'src/@types'

export type SyncLogsType = {
  id: string
  sync_type: RepSyncStateT
  records?: number
  duration?: string
  sync_start: string
  logs?: string[]
}
