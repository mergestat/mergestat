import { KeyValue } from '@mergestat/blocks'
import React from 'react'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'

type LogsInfoProps = {
  id: string
  syncStart: string
  duration: string
}

export const LogsInfo: React.FC<LogsInfoProps> = (props) => {
  return (
    <div className="bg-white rounded-md px-6 py-7 text-gray-600 font-medium border shadow-sm">
      <div className="flex justify-between items-center max-w-3xl space-x-8">
        <div className="flex flex-col">
          <KeyValue title="Sync start" />
          <RelativeTimeField date={props.syncStart} />
        </div>

        <div className="border-l pl-8">
          <KeyValue
            title="Duration"
            value={props.duration}
          />
        </div>

        <div className="border-l pl-8">
          <KeyValue
            title="ID"
            value={props.id}
          />
        </div>
      </div>
    </div>
  )
}
