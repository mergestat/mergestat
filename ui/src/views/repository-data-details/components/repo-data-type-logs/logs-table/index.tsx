import { LogBox, Table } from '@mergestat/blocks'
import React from 'react'
import { columns } from './columns'

import { sampleData } from 'src/sample-data/repo-data-logs'

export const LogsTable: React.FC = (props) => {
  return (
    <Table
      scrollY='100%'
      responsive
      noWrapHeaders
      columns={columns}
      dataSource={sampleData}
      collapsible
      renderCollapse={(d: any) => (
        <LogBox logs={d.logs} onCopy={() => {}} />
      )}
    />
  )
}
