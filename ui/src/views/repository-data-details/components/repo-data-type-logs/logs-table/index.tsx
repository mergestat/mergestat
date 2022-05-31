import { Panel, Table, Typography } from '@mergestat/blocks'
import React from 'react'
import { numberWithCommas } from 'src/utils'
import { columns } from './columns'
import { LogsTableRowOptions } from './log-table-row-options'
import { CollapseTrigger, SyncType } from './logs-table-columns'

import { sampleDatatypesettingsData } from './sample-data'

export const LogsTable: React.FC = (props) => {
  // TODO: export this logic to a hook
  const processedData = sampleDatatypesettingsData.map((item, index) => ({
    collapse: item.collapsed,
    sync_type: {
      id: item.id,
      sync_type: item.sync_type,
      sync_start: item.sync_start
    },
    records: numberWithCommas(item.records),
    duration: item.duration,
    sync_start: item.sync_start,
    options: "",
  }))

  return (
   <div className='border-md shadow-sm'>
     <Table
          scrollY={'100%'}
          responsive
          noWrapHeaders
          className="overflow-visible relative z-0"
          columns={columns}
          dataSource={processedData}
        />
   </div>
  )
}
