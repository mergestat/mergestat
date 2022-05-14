import { Navbar } from '@mergestat/blocks'
import React from 'react'
import { logType } from '../repository-data-logs-details-view'

type LogsInfoProps = {
  log: logType
}

export const LogsInfo: React.FC<LogsInfoProps> = (props) => {
  const { log } = props
  return (
    <div className="bg-white rounded px-6 py-7  text-gray-600  font-medium">
      <div className="flex justify-between items-center max-w-4xl">
        <div className="space-y-2">
          <p>Sync start</p>
          <p>{log.syncStart}</p>
        </div>

        <div className="space-y-2 border-l pl-8">
          <p>Duration</p>
          <p>{log.duration}</p>
        </div>

        <div className="space-y-2 border-l pl-8">
          <p>ID</p>
          <p>{log.id}</p>
        </div>
      </div>
    </div>
  )
}
