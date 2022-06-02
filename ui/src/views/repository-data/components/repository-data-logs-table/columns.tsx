import React from 'react'
import cx from 'classnames'
import { RepSyncStateT } from 'src/@types'
import { getRepositorySyncIcon } from 'src/views/repository-data-details'
import {
  RepositoryData,
  RepositoryDataProps,
  RepositorySyncNow,
  RepositorySyncStatus,
} from './repository-data-logs-table-columns'
import { RepositoryTableRowOptions } from './repository-table-row-options'
import type { RepoSyncDataType, SyncStatusDataProps } from './@type'

export const columns: Array<Record<string, any>> = [
  {
    dataIndex: 'status',
    key: 'syncStateIcon',
    className: "w-12 h-20 p-0",
    render: ({ syncState }: { syncState : RepSyncStateT }) => (
      <div className={cx('h-full px-6 flex', { 'bg-gray-50': syncState === 'disabled' })}>
        {getRepositorySyncIcon(syncState, 'my-auto')}
      </div>
    )
  },
  {
    title: 'Data',
    dataIndex: 'data',
    headerClassName: "pl-0",
    key: 'data',
    className: "h-20 p-0",
    render: (data: RepositoryDataProps, d: RepoSyncDataType) => (
      <RepositoryData
        title={data.title}
        brief={data.brief}
        disabled={d.status.syncState === 'disabled'}
      />
    )
  },
  {
    title: 'Lastest Run',
    headerClassName: "pl-0",
    className: 'text-gray-500 h-20 p-0',
    dataIndex: 'latestRun',
    key: 'latestRun',
    render: (latestRun: string, d: RepoSyncDataType) => (
      <div
        className={cx("text-samantic-mutedText h-full leading-20", {
          'bg-gray-50': d.status.syncState === 'disabled'
        })}
      >
        {latestRun}
      </div>
    )
  },
  {
    title: 'Status',
    headerClassName: "pl-0",
    className: 'text-gray-500 h-20 p-0',
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
    className: 'h-20 p-0',
    key: 'syncNow',
    render: ({ syncState }: { syncState : RepSyncStateT }) =>
      <RepositorySyncNow syncStatus={syncState} />
  },
  {
    className: 'w-4 p-0 h-20',
    dataIndex: 'status',
    key: 'options',
    render: ({ syncState }: { syncState : RepSyncStateT }) => (
      <div className={cx('h-full flex', { 'bg-gray-50': syncState === 'disabled' })}>
        <div className='my-auto mx-6'>
          <RepositoryTableRowOptions state={syncState} />
        </div>
      </div>
    ),
  },
]
