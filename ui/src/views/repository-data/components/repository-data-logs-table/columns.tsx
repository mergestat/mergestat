import React from 'react'
import { RepSyncStateT } from 'src/@types'
import { getRepositorySyncIcon } from 'src/views/repository-data-details'
import {
  RepositoryData,
  RepositoryDataProps,
  RepositorySyncNow,
  RepositorySyncStatus,
} from './repository-data-logs-table-columns'
import { RepositoryTableRowOptions } from './repository-table-row-options'
import { SyncStatusDataProps } from './@type'

export const columns: Array<Record<string, any>> = [
  {
    dataIndex: 'status',
    key: 'syncStateIcon',
    className: "py-3 w-4",
    render: ({ syncState }: { syncState : RepSyncStateT }) =>
      getRepositorySyncIcon(syncState, "mx-6")
  },
  {
    title: 'Data',
    dataIndex: 'data',
    headerClassName: "pl-0",
    key: 'data',
    className: "py-3",
    render: (data: RepositoryDataProps) => (
      <RepositoryData title={data.title} brief={data.brief} />
    )
  },
  {
    title: 'Lastest Run',
    headerClassName: "pl-0",
    className: 'text-gray-500 ',
    dataIndex: 'latestRun',
    key: 'latestRun',
    render: (latestRun: string) => (
      <span className="text-sm  text-samantic-mutedText">
        {latestRun}
      </span>
    )
  },
  {
    title: 'Status',
    headerClassName: "pl-0",
    className: 'text-gray-500 ',
    dataIndex: 'status',
    key: 'status',
    render: (status: { data?: SyncStatusDataProps[], syncState: RepSyncStateT }) =>
      <RepositorySyncStatus
        data={status.data}
        disabled={status.syncState === 'disabled'}
      />
  },
  {
    dataIndex: 'status',
    key: 'syncNow',
    render: ({ syncState }: { syncState : RepSyncStateT }) =>
      <RepositorySyncNow syncStatus={syncState} />
  },
  {
    className: 'w-4 px-6',
    dataIndex: 'status',
    key: 'options',
    render: ({ syncState }: { syncState : RepSyncStateT }) => (
      <RepositoryTableRowOptions state={syncState} />
    ),
  },
]
