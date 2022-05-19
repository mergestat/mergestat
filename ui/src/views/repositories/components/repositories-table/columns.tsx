import { Checkbox } from '@mergestat/blocks'
import { CaretDownIcon, CaretUpIcon } from '@mergestat/icons'
import React from 'react'
import { repSyncState, tagType } from 'src/@types'
import { RepositoryAdditionalActionsDropDown } from '../../drop-downs'
import {
  RepositoryName,
  RepositoryNameProps,
  RepositoryStatus,
  RepositoryTagList
} from './repositories-table-columns'

export const columns: Array<Record<string, any>> = [
  {
    dataIndex: 'checkbox',
    key: 'checkbox',
    className: "px-6 w-4",
    render: (params: { selected: boolean, onChange: (name: string) => void }) => (
      <Checkbox
        checked={params.selected}
        onChange={params.onChange as any}
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
    dataIndex: 'repository',
    key: 'repository',
    render: (repo: RepositoryNameProps) => (
      <RepositoryName name={repo.name} icons={repo.icons} lastUpdate={repo.lastUpdate} />
    )
  },
  {
    title: <h1 className='text-samantic-header'>Tags</h1>,
    className: 'text-gray-500',
    dataIndex: 'tags',
    key: 'tags',
    render: (tags: tagType[]) => (
      <RepositoryTagList tags={tags} />
    )
  },
  {
    title: (
      <p className="flex items-center gap-2 text-samantic-header">
        Last sync <CaretDownIcon className="t-icon text-blue-400" />
      </p>
    ),
    className: 'text-gray-500',
    dataIndex: 'last',
    key: 'last',
    render: (lastsync: string) => <span className=' text-samantic-mutedText'>{lastsync}</span>
  },
  {
    title: '',
    className: '',
    dataIndex: 'status',
    key: 'status',
    render: (RepoStatus: { count: number; icon: repSyncState }[]) => (
      <RepositoryStatus status={RepoStatus} />
    )
  },
  {
    title: '',
    className: 'px-6 w-4',
    dataIndex: 'option',
    key: 'option',
    render: () => <RepositoryAdditionalActionsDropDown />
  },
]
