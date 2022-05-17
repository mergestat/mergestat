import React from 'react'
import { LogsTableRowOptions } from './log-table-row-options'
import { CollapseTrigger, SyncType, SyncTypeProps } from './logs-table-columns'


export const columns: Array<Record<string, any>> = [
  {
    dataIndex: 'collapse',
    key: 'collapse',
    className: 'px-3 w-4',
    render: (collabsed: boolean) => <CollapseTrigger collapsed={collabsed} />
  },
  {
    title: "Sync Type",
    headerClassName: "pl-0",
    className: 'py-3',
    dataIndex: 'sync_type',
    key: 'stync_type',
    render: (params: SyncTypeProps) => (
      <SyncType
        id={params.id}
        sync_type={params.sync_type}
        sync_start={params.sync_start}
      />
    )
  },
  {
    title: 'Records',
    className: 'text-gray-500',
    headerClassName: "pl-0 w-40",
    dataIndex: 'records',
    key: 'records',
    render: (records: string) => (
      <span className='text-samantic-mutedText'>{records}</span>
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
