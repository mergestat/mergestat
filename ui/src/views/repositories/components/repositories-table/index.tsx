import { Checkbox, Table } from '@mergestat/blocks'
import React from 'react'
import { columns } from './columns'
import {
  RepositoryAdditionalActions,
  RepositoryName,
  RepositoryStatus,
  RepositoryTagList,
} from './repositories-table-columns'
import { sampleRepositoriesData } from './sample-repositories-data'

const RepositoriesTable: React.FC = (props) => {
  // TODO: export this logic to a hook
  const processedData = sampleRepositoriesData.map((item, index) => ({
    checkbox: <Checkbox />,
    repository: (
      <RepositoryName
        name={item.repositoryName}
        icons={item.icons}
        lastUpdate={item.lastUpdate}
      />
    ),
    tags: <RepositoryTagList tags={item.tags} />,
    last: item.lastSync,
    status: <RepositoryStatus status={item.status} />,
    option: <RepositoryAdditionalActions />,
  }))
  return (
    <div className="mx-8 my-6 rounded-md overflow-hidden">
      <Table
        responsive
        borderless
        noWrapHeaders
        className="overflow-visible"
        columns={columns}
        dataSource={processedData}
      />
    </div>
  )
}

export default RepositoriesTable
