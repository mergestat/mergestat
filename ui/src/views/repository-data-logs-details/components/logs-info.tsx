import { Navbar, KeyValue } from '@mergestat/blocks'
import React from 'react'
import { logType } from '../repository-data-logs-details-view'

type LogsInfoProps = {
  log: logType
}

export const LogsInfo: React.FC<LogsInfoProps> = (props) => {
  const { log } = props
  return (
    <div className="bg-white rounded px-6 py-7 text-gray-600 font-medium border shadow-sm">
      <div className="flex justify-between items-center max-w-4xl space-x-8">
        <KeyValue
          title="Sync start"
          value={log.syncStart}
        />
        <div className="border-l pl-8">
          <KeyValue
            title="Duration"
            value={log.duration}
          />
        </div>
        <div className="border-l pl-8">
          <KeyValue
            title="ID"
            value={log.id}
          />
        </div>
      </div>
    </div>
  )
}
