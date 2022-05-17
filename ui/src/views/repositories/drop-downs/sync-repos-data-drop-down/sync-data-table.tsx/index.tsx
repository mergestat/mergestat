
import { alertStack, Table } from '@mergestat/blocks'
import React from 'react'
import { AlertType } from 'src/@types'
import { columns } from './columns'
import { sampleSyncData } from './samle-data'

export const SyncDataTable: React.FC = (props) => {
  const showAlertStack = (type: AlertType, message: string) =>
    alertStack[type]({
      className: 'fixed h-16 w-full max-w-md bottom-0 right-0 text-red-500',
      message: message,
      title: '',
      onClose: () => {
        console.log('Close');
      },
    });

  // TODO: export this logic to a hook
  const processedData = sampleSyncData.map((item, index) => ({
    dataType: {
      title: item.dataType,
      brief: (
        item.disablefor === item.reposCount ?
          "Disabled for all" :
          `Enabled for ${item.disablefor} out of ${item.reposCount} repos`
      )
    },
    syncNow: {
      disabled: item.disablefor === item.reposCount,
      doSync: () => showAlertStack('info', `${item.dataType} sync started for ${item.reposCount - item.disablefor} repos`)
    },
    option: "",
  }))

  return (
    <Table
      noWrapHeaders
      tableWrapperClassName="rounded shadow"
      className="w-150"
      columns={columns}
      dataSource={processedData}
    />
  )
}

