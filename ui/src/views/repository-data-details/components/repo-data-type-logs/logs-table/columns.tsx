import { Checkbox, Typography } from '@mergestat/blocks'
import { CaretDownIcon, CaretUpIcon } from '@mergestat/icons'
import React from 'react'
import { LogsTableRowOptions } from './log-table-row-options'
import { CollapseTrigger, SyncType, SyncTypeProps } from './logs-table-columns'


export const columns: Array<Record<string, any>> = [
  {
    title: '',
    className: 'pl-5 pr-0 gap-0 w-4',
    dataIndex: 'collapse',
    key: 'collapse',
    render: (collabsed: boolean) => <CollapseTrigger collapsed={collabsed} />
  },
  {
    title: "Sync Type",
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
    className: 'text-gray-500 ',
    dataIndex: 'records',
    key: 'records',
    render: (records: string) => (
      <span className='text-samantic-mutedText'>{records}</span>
    )
  },
  {
    title: 'Duration',
    className: 'text-gray-500 ',
    dataIndex: 'duration',
    key: 'duration',
    render: (duration: string) => (
      <span className='text-samantic-mutedText'>{duration}</span>
    )
  },
  {
    title: 'Sync Start',
    className: 'text-gray-500 ',
    dataIndex: 'sync_start',
    key: 'sync_start',
    render: (sync_start: string) => (
      <span className='text-samantic-mutedText'>{sync_start}</span>
    )
  },
  {
    title: '',
    className: 'text-gray-500 ',
    dataIndex: 'options',
    key: 'options',
    render: () => <LogsTableRowOptions />
  },
]
