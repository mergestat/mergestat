import { Checkbox } from '@mergestat/blocks'
import { CaretDownIcon, CaretUpIcon } from '@mergestat/icons'
import React from 'react'

export const columns: Array<Record<string, any>> = [
  {
    title: <Checkbox />,
    className: 'w-4',
    dataIndex: 'checkbox',
    key: 'checkbox',
  },
  {
    title: (
      <p className="whiteSpace-nowrap flex items-center gap-4">
        Repository{' '}
        <span>
          <CaretUpIcon />
          <CaretDownIcon className="-mt-3" />
        </span>
      </p>
    ),
    className: '',
    dataIndex: 'repository',
    key: 'repository',
  },
  {
    title: 'Tags',
    className: 'text-gray-500',
    dataIndex: 'tags',
    key: 'tags',
  },
  {
    title: (
      <p className="flex items-center gap-4">
        Last sync <CaretDownIcon className=" text-blue-400" />
      </p>
    ),
    className: 'text-gray-500',
    dataIndex: 'last',
    key: 'last',
  },
  {
    title: '',
    className: '',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '',
    className: 'w-4',
    dataIndex: 'option',
    key: 'option',
  },
]
