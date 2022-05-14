import { Checkbox } from '@mergestat/blocks'
import { CaretDownIcon, CaretUpIcon } from '@mergestat/icons'
import React from 'react'
import { repSyncState } from 'src/@types'
import { getRepositorySyncIcon } from 'src/views/repository-data-details'
import { RepositoryData, RepositoryDataProps, RepositorySyncNow, RepositorySyncNowProps, RepositorySyncStatus, RepositorySyncStatusProps } from './repository-data-logs-table-columns'
import { RepositoryDetailsRowOptionsProps, RepositoryTableRowOptions } from './repository-table-row-options'

export const columns: Array<Record<string, any>> = [
  {
    title: '',
    className: 'pl-5 pr-0 gap-0 w-4',
    dataIndex: 'syncStateIcon',
    key: 'syncStateIcon',
    render: (syncStateIcon: repSyncState) => getRepositorySyncIcon(syncStateIcon)
  },
  {
    title: 'Data',
    dataIndex: 'data',
    key: 'data',
    render: (data: RepositoryDataProps) => <RepositoryData title={data.title} brief={data.brief} />
  },
  {
    title: 'Lastest Run',
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
    className: 'w-4',
    dataIndex: 'options',
    key: 'options',
    render:(options:RepositoryDetailsRowOptionsProps )=>(
      <RepositoryTableRowOptions
        state={options.state}
      />
    ),
  },
]
