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
    title: "Repository",
    dataIndex: 'name',
    key: 'name',
    onSortChange: (e: 'asc' | 'desc' | undefined) => {console.log(e)},
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
    title: "Tags",
    className: 'text-gray-500',
    dataIndex: 'tags',
    key: 'tags',
    render: (tags: TagType[]) => (
      <RepositoryTagList tags={tags} />
    )
  },
  {
    title: "Last sync",
    dataIndex: 'lastSync',
    className: 'h-20',
    key: 'last',
    onSortChange: (e: 'asc' | 'desc' | undefined) => {console.log(e)},
    render: (lastSync: string) => (
      <span className='text-samantic-mutedText px-6'>{lastSync}</span>
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
