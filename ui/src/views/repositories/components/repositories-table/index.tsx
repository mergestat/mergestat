import { Button, Checkbox, EmptyState, Table } from '@mergestat/blocks'
import { PlusIcon, RepositoryIcon } from '@mergestat/icons'
import React, { useState } from 'react'
import { RepositoryAdditionalActionsDropDown } from '../../drop-downs'
import { EmptyRepositoryTable } from '../empty-repository-table'
import { columns } from './columns'
import {
  RepositoryLastSync,
  RepositoryName,
  RepositoryOptions,
  RepositoryStatus,
  RepositoryTagList,
} from './repositories-table-columns'

import { sampleRepositoriesData } from './sample-data'

export const RepositoriesTable: React.FC = (props) => {
  // TODO: export this logic to a hook
  const processedData = sampleRepositoriesData.map((item, index) => ({
    checkbox: <Checkbox className=' gap-0' />,
    repository: (
      <RepositoryName
        name={item.repositoryName}
        icons={item.icons}
        lastUpdate={item.lastUpdate}
      />
    ),
    tags: <RepositoryTagList tags={item.tags} />,
    last: <RepositoryLastSync>{item.lastSync}</RepositoryLastSync>,
    status: <RepositoryStatus status={item.status} />,
    option: <RepositoryAdditionalActionsDropDown  />,
  }))

  return (
    <div className="mx-8 my-6 rounded-md flex-grow ">
      <Table
        borderless
        noWrapHeaders
        tableWrapperClassName="overflow-visible"
        className="overflow-visible relative z-0 over"
        columns={columns}
        dataSource={processedData}
      />
    </div>
  )
}

