import React from 'react'
import { repSyncState } from 'src/@types'
import { getRepositorySyncIcon } from 'src/views/repository-data-details'
import {
  RepositoryData,
  RepositoryDataProps,
  RepositorySyncNow,
  RepositorySyncNowProps,
  RepositorySyncStatus,
  RepositorySyncStatusProps
} from './repository-data-logs-table-columns'
import {
  RepositoryDetailsRowOptionsProps,
  RepositoryTableRowOptions
} from './repository-table-row-options'

export const columns: Array<Record<string, any>> = [
  {
    dataIndex: 'syncStateIcon',
    key: 'syncStateIcon',
    className: "py-3 w-4",
    render: (syncStateIcon: repSyncState) => getRepositorySyncIcon(syncStateIcon, "mx-6")
  },
  {
    title: 'Data',
    dataIndex: 'data',
    headerClassName: "pl-0",
    key: 'data',
    className: "py-3",
    render: (data: RepositoryDataProps) => <RepositoryData title={data.title} brief={data.brief} />
  },
  {
    title: 'Lastest Run',
    headerClassName: "pl-0",
    className: 'text-gray-500 ',
    dataIndex: 'latest_run',
    key: 'latest_run',
    render: (params: { time_ago: string, disabled: boolean }) => (
      <span className="text-sm  text-samantic-mutedText">
        {params.disabled ? '-' : params.time_ago}
      </span>
    )
  },
  {
    title: 'Status',
    headerClassName: "pl-0",
    className: 'text-gray-500 ',
    dataIndex: 'status',
    key: 'status',
    render: (status: RepositorySyncStatusProps) => <RepositorySyncStatus
      graphNode={status.graphNode}
      disabled={status.disabled}
    />
  },
  {
    title: '',
    dataIndex: 'syncNow',
    key: 'syncNow',
    render:(syncNow:RepositorySyncNowProps)=>(
    <RepositorySyncNow syncStatus={syncNow.syncStatus} doSync={syncNow.doSync} />
    )
  },
  {
    title: '',
    className: 'w-4 px-6',
    dataIndex: 'options',
    key: 'options',
    render:(options:RepositoryDetailsRowOptionsProps )=>(
      <RepositoryTableRowOptions
        state={options.state}
      />
    ),
  },
]
