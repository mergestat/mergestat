import React from 'react'
import type { RepSyncStateT } from 'src/@types'
import { LogsTableRowOptions } from './log-table-row-options'
import { SyncType } from './logs-table-columns'
import type { SyncLogsType } from './@type'

export const columns: Array<Record<string, any>> = [
  {
    title: "Sync Type",
    className: 'py-3',
    dataIndex: 'sync_type',
    key: 'stync_type',
    render: (syncType: RepSyncStateT, data: SyncLogsType) => (
      <SyncType id={data.id} syncType={syncType} />
    )
  },
  {
    title: 'Records',
    className: 'text-gray-500',
    headerClassName: "pl-0 w-40",
    dataIndex: 'records',
    key: 'records',
    render: (records?: string) => (
      records ? <span className='text-samantic-mutedText'>{records}</span> : '-'
    )
  },
  {
    title: 'Duration',
    className: 'text-gray-500',
    headerClassName: "pl-0 w-40",
    dataIndex: 'duration',
    key: 'duration',
    render: (duration: string) => (
      <span className='text-samantic-mutedText'>{duration}</span>
    )
  },
  {
    title: 'Sync Start',
    className: 'text-gray-500',
    headerClassName: "pl-0 w-36",
    dataIndex: 'sync_start',
    key: 'sync_start',
    render: (sync_start: string) => (
      <span className='text-samantic-mutedText'>{sync_start}</span>
    )
  },
  {
    className: 'text-gray-500 mx-6',
    headerClassName: "w-10",
    dataIndex: 'options',
    key: 'options',
    render: () => <LogsTableRowOptions />
  },
]
