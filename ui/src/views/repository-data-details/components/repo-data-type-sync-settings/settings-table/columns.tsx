import { Checkbox } from '@mergestat/blocks'
import { CaretDownIcon, CaretUpIcon } from '@mergestat/icons'
import React from 'react'

export const columns: Array<Record<string, any>> = [
  {
    title: '',
    className: 'w-4',
    dataIndex: 'checked',
    key: 'checked',
  },
  {
    title: 'Column',
    className: '',
    dataIndex: 'column',
    key: 'column',
  },
  {
    title: 'Type',
    className: 'text-gray-500 ',
    dataIndex: 'type',
    key: 'type',
  },
]
