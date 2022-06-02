import { Table } from '@mergestat/blocks'
import React from 'react'
import { columns } from './columns'
import { sampleRepositoryData } from './sample-data'

export const RepositoryTable: React.FC = (props) => {
  return (
    <div className="rounded-md shadow-sm">
      <Table
        scrollY='100%'
        noWrapHeaders
        columns={columns}
        dataSource={sampleRepositoryData}
      />
    </div>
  )
}

