import { Table } from '@mergestat/blocks'
import React from 'react'
import { columns } from './columns'
import { sampleRepositoryData } from 'src/sample-data/repository-data'

export const SycnTypesTable: React.FC = () => {
  return (
    <div className="rounded-md shadow-sm">
      <Table
        noWrapHeaders
        responsive={true}
        columns={columns}
        dataSource={sampleRepositoryData}
      />
    </div>
  )
}

