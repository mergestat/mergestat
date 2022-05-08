import { Table } from '@mergestat/blocks'
import React from 'react'
import { getRepositorySyncIcon } from 'src/views/repository-data-type'
import { columns } from './columns'
import {
  RepositoryData,
  RepositoryLatestSyncRun,
  RepositorySyncStatus,
  RepositorySyncNow,
} from './repository-table-columns'
import { RepositoryTableRowOptions } from './repository-table-row-options'
import { sampleRepositoryData } from './sample-data'

export const RepositoryTable: React.FC = (props) => {
  // TODO: export this logic to a hook
  const processedData = sampleRepositoryData.map((item, index) => ({
    syncStateIcon: getRepositorySyncIcon(item.syncNow.syncState),
    Data: (
      <RepositoryData
        name={item.Data.title}
        brief={item.Data.brief}
        syncStatus={item.syncNow.syncState} />
    ),
    latest_run: (
      <RepositoryLatestSyncRun
        time_ago={item.latest_run}
        disabled={item.syncNow.syncState === "disabled"} />
    ),
    status: (
      <RepositorySyncStatus
        Graph={item.status.graphNode}
        disabled={item.syncNow.syncState === "disabled"} />
    ),
    syncNow: (
      <RepositorySyncNow
        syncStatus={item.syncNow.syncState}
        doSync={item.syncNow.doSync} />
    ),
    options: (
      <RepositoryTableRowOptions
        disabled={item.syncNow.syncState === "disabled"}
        syncing={item.syncNow.syncState === "syncing"}
      />
    )
  }))
  return (
    <div className='rounded-md overflow-hidden '>
      <Table
        scrollY={'100%'}
        responsive
        borderless
        noWrapHeaders
        className="overflow-visible relative z-0"
        columns={columns}
        dataSource={processedData}
      />
    </div>

  )
}

