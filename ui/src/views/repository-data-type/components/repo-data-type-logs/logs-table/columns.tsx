import { Checkbox } from '@mergestat/blocks'
import { CaretDownIcon, CaretUpIcon } from '@mergestat/icons'
import React from 'react'

export const columns: Array<Record<string, any>> = [
  {
    title: '',
    className: 'w-4 ',
    dataIndex: 'collapse',
    key: 'collapse',
  },
  {
    title: "Sync Type",
    className: '',
    dataIndex: 'sync_type',
    key: 'stync_type',
  },
  {
    title: 'Records',
    className: 'text-gray-500 ',
    dataIndex: 'records',
    key: 'records',
  },
  {
    title: 'Duration',
    className: 'text-gray-500 ',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: 'Sync Start',
    className: 'text-gray-500 ',
    dataIndex: 'sync_start',
    key: 'sync_start',
  },
  {
    title: '',
    className: 'text-gray-500 ',
    dataIndex: 'options',
    key: 'options',
  },
]
