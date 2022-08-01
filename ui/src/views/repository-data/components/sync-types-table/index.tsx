import { Table } from '@mergestat/blocks'
import React from 'react'
import { columns } from './columns'
import { RepoSyncDataType } from 'src/@types'

type SycnTypesTableProps = {
  data: Array<RepoSyncDataType>
  children?: React.ReactNode
}

export const SycnTypesTable: React.FC<SycnTypesTableProps> = ({ data }: SycnTypesTableProps) => {
  return (
    <div className="rounded-md shadow-sm">
      <Table
        noWrapHeaders
        responsive={true}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}

