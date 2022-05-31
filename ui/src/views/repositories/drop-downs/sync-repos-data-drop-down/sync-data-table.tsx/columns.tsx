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
        <h4 className="font-medium mb-0.5 text-samantic-text cursor-pointer hover_text-blue-600">
          {params.title}
        </h4>
        <p className="text-sm text-samantic-mutedText whitespace-nowrap">
          {params.brief}
        </p>
      </div>
    )
  },
  {
    dataIndex: 'syncNow',
    key: 'syncNow',
    render:  (params:{disabled:boolean, doSync: () => void}) => (
      <Button
        className='whitespace-nowrap'
        skin='secondary'
        size="small"
        startIcon={
          <RefreshIcon className={`t-icon ${params.disabled ? "text-samantic-mutedIcon":"text-samantic-icon"}`} />
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
