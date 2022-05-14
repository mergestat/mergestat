import { LogBox } from '@mergestat/blocks'
import React from 'react'

type LogsDetailsProps = {
  logDetails: {
    time: string
    info: string
  }[]
}
export const LogsDetails: React.FC<LogsDetailsProps> = (props) => {
  const { logDetails } = props

  const data = logDetails.map((item) => ({
    massage: (
      <div className="flex gap-8">
        <p>{item.time}</p> <p>{item.info} </p>{' '}
      </div>
    ),
  }))

  return (
    <div className="relative">
      <LogBox data={data} onClick={() => {}} />
    </div>
  )
}
