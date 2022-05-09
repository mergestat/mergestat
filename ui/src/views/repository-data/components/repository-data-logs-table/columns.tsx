import { Checkbox } from '@mergestat/blocks'
import { CaretDownIcon, CaretUpIcon } from '@mergestat/icons'
import React from 'react'

export const columns: Array<Record<string, any>> = [
  {
    title: '',
    className: 'w-4',
    dataIndex: 'syncStateIcon',
    key: 'syncStateIcon',
  },
  {
    title: "Data",
    className: '',
    dataIndex: 'Data',
    key: 'Data',
  },
  {
    title: 'Lastest Run',
    className: 'text-gray-500 ',
    dataIndex: 'latest_run',
    key: 'latest_run',
  },
  {
    title:"Status",
    className: 'text-gray-500 ',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '',
    className: '',
    dataIndex: 'syncNow',
    key: 'syncNow',
  },
  {
    title: '',
    className: 'w-4',
    dataIndex: 'options',
    key: 'options',
  },
]
