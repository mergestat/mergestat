import React from 'react'
import { LogsDetails, LogsInfo, PageHeader } from './components'

type RepositoryDataLogsDetailsViewProps = {
  logID: string
}
export const RepositoryDataLogsDetailsView: React.FC<RepositoryDataLogsDetailsViewProps> =
  (props) => {
    const { logID } = props
    const log = getLogDetailsByID(logID)
    return (
      <main className="w-full bg-gray-100">
        <PageHeader />
        <div className="p-8 space-y-8">
          <LogsInfo log={log} />
          <LogsDetails logDetails={log.logdetails} />
        </div>
      </main>
    )
  }

export type logType = {
  id: string
  syncStart: string
  duration: string
  logdetails: {
    time: string
    info: string
  }[]
}
function getLogDetailsByID(id: string): logType {
  return {
    id: 'd41ffc09-5254-4fa8-adcf-5aa0b0a00959',
    syncStart: '4 hours Ago',
    duration: '1h 45m 10s',
    logdetails: [
      { time: '2021/06/09 02:21', info: 'This is a log line ...' },
      { time: '2021/06/09 02:21', info: 'This is a log line ...' },
      { time: '2021/06/09 02:21', info: 'This is a log line ...' },
      { time: '2021/06/09 02:21', info: 'This is a log line ...' },
      { time: '2021/06/09 02:34', info: 'Making API request ...' },
    ],
  }
}
