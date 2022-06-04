import { LogBox, Table } from '@mergestat/blocks'
import React from 'react'
import { columns } from './columns'

import { sampleDatatypesettingsData } from 'src/sample-data/repo-data-logs'

export const LogsTable: React.FC = (props) => {
  return (
   <div className='border-md shadow-sm'>
     <Table
        scrollY='100%'
        responsive
        noWrapHeaders
        className="overflow-visible relative z-0"
        columns={columns}
        dataSource={sampleDatatypesettingsData}
        collapsible
        renderCollapse={(d: any) => (
          <LogBox logs={d.logs} onCopy={() => {}} />
        )}
      />
   </div>
  )
}
