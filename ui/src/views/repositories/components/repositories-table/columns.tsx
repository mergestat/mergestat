import { Checkbox } from '@mergestat/blocks'
import { CaretDownIcon, CaretUpIcon } from '@mergestat/icons'
import React from 'react'
import { TagType } from 'src/@types'
import { RepositoryAdditionalActionsDropDown } from '../../drop-downs'
import {
  RepositoryName,
  RepositoryStatus,
  RepositoryTagList
} from './repositories-table-columns'
import type { RepoDataProps, RepoDataStatusT } from './@types'

export const columns: Array<Record<string, any>> = [
  {
    key: 'checkbox',
    dataIndex: 'isSelected',
    className: "px-6 w-4 h-20",
    render: (isSelected: boolean, data: RepoDataProps & { isSelected?: boolean }) => (
      <Checkbox
        checked={isSelected}
        onChange={(v) => data.isSelected = v.target.checked}
      />
    )
  },
  {
    title: (
      <p className="whiteSpace-nowrap flex items-center gap-4 text-samantic-header">
        Repository{' '}
        <span>
          <CaretUpIcon className='t-icon' />
          <CaretDownIcon className="t-icons -mt-3" />
        </span>
      </p>
    ),
    dataIndex: 'name',
    key: 'name',
    className: 'h-20',
    render: (name: string, data: RepoDataProps) => (
      <RepositoryName
        name={name}
        type={data.type}
        lastUpdate={data.lastUpdate}
        automaticImport={data.automaticImport}
      />
    )
  },
  {
    title: <h1 className='text-samantic-header'>Tags</h1>,
    className: 'text-gray-500 h-20',
    dataIndex: 'tags',
    key: 'tags',
    render: (tags: TagType[]) => (
      <RepositoryTagList tags={tags} />
    )
  },
  {
    title: (
      <p className="flex items-center gap-2 text-samantic-header">
        Last sync <CaretDownIcon className="t-icon text-blue-400" />
      </p>
    ),
    dataIndex: 'lastSync',
    className: 'h-20',
    key: 'last',
    render: (lastSync: string) => (
      <span className='text-samantic-mutedText'>{lastSync}</span>
    )
  },
  {
    dataIndex: 'status',
    key: 'status',
    className: 'h-20',
    render: (status: Array<RepoDataStatusT>) => (
      <RepositoryStatus status={status} />
    )
  },
  {
    className: 'px-6 w-4',
    key: 'option',
    render: () => <RepositoryAdditionalActionsDropDown />
  },
]
