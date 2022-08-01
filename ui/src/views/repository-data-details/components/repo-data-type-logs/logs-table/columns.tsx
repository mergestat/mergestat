import React from 'react'
import type { RepoSyncStateT, SyncLogsType } from 'src/@types'
import { LogsTableRowOptions, SyncType } from './components'

export const columns: Array<Record<string, any>> = [
  {
    title: "Sync Type",
    className: 'py-3',
    dataIndex: 'syncType',
    key: 'syncType',
    render: (syncType: RepoSyncStateT, data: SyncLogsType) => (
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
      records ? <span className='text-semantic-mutedText'>{records}</span> : '-'
    )
  },
  {
    title: 'Duration',
    className: 'text-gray-500',
    headerClassName: "pl-0 w-40",
    dataIndex: 'duration',
    key: 'duration',
    render: (duration: string) => (
      <span className='text-semantic-mutedText'>{duration}</span>
    )
  },
  {
    title: 'Sync Start',
    className: 'text-gray-500',
    headerClassName: "pl-0 w-36",
    dataIndex: 'syncStart',
    key: 'syncStart',
    render: (syncStart: string) => (
      <span className='text-semantic-mutedText'>{syncStart}</span>
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
