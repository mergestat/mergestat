import { Button, Typography } from '@mergestat/blocks'
import { RefreshIcon } from '@mergestat/icons'
import React from 'react'
import { RowOptions } from './row-options'

export const columns: Array<Record<string, any>> = [
  {
    title: ( 
      <Typography.Title className='text-samantic-header font-semibold ml-6'>
        Sync Data
      </Typography.Title>
    ),
    className: 'pr-40',
    dataIndex: 'dataType',
    key: 'dataType',
    render: (params: { title: string, brief?: string }) => (
      <div className='ml-6 my-3'>
        <Typography.Title className="text-samantic-text cursor-pointer hover_text-blue-600">
          {params.title}
        </Typography.Title>
        <Typography.Text size="sm" className="text-samantic-mutedText whitespace-nowrap">
          {params.brief}
        </Typography.Text>
      </div>
    )
  },
  {
    dataIndex: 'syncNow',
    key: 'syncNow',
    render:  (params:{disabled:boolean, doSync: () => void}) => (
      <Button
        className='flex gap-2 text-samantic-text whitespace-nowrap'
        skin='secondary'
        startIcon={
          <RefreshIcon className={`w-4 h-4 ${params.disabled ? "text-samantic-mutedIcon":"text-samantic-icon"}`} />
        }
        onClick={params.doSync}
        disabled={params.disabled}
      >
        Sync Now For Enabled
      </Button>
    )
  },
  {
    className: 'w-4 px-6',
    dataIndex: 'option',
    key: 'option',
    render: () => <RowOptions />
  },
]
