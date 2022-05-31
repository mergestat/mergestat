import { Table } from '@mergestat/blocks'
import React from 'react'
import { columns } from './columns'
import { sampleRepositoryData } from './sample-data'

export const RepositoryTable: React.FC = (props) => {
  // TODO: export this logic to a hook
  const processedData = sampleRepositoryData.map((item, index) => ({
    syncStateIcon: item.syncNow.syncState,
    data: {
      title: item.Data.title,
      brief: item.Data.brief,
    },
    latest_run: {
      time_ago: item.latest_run,
      disabled: item.syncNow.syncState === 'disabled'
    },
    status:{
      graphNode:item.status.graphNode,
      disabled:item.syncNow.syncState === 'disabled'
    },
    syncNow:{
      syncStatus:item.syncNow.syncState,
      doSync:item.syncNow.doSync
    } ,
    options:{
     state:item.syncNow.syncState
    },
  }))
  return (
    <div className="rounded-md shadow-sm">
      <Table
        scrollY={'100%'}
        noWrapHeaders
        columns={columns}
        dataSource={processedData}
      />
    </div>
  )
}

