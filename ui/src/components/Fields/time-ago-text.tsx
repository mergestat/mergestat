import React, { useEffect, useState } from 'react'
import { getRelativeTime, simplifyTime } from 'src/utils'

export type TimeAgoTextProps = {
  date: string
  prefix?: string
  suffix?: string
}

export const TimeAgoText: React.FC<TimeAgoTextProps> = ({ date, prefix = '', suffix = '' }) => {
  const [dateRun, setDateRun] = useState<string>('')

  const recalculateTimeAgo = () => {
    const timeAgo = simplifyTime(getRelativeTime(new Date(date)))
    setDateRun(timeAgo)
  }

  useEffect(() => {
    let intervalId: NodeJS.Timer
    if (date && date !== '') {
      recalculateTimeAgo()
      intervalId = setInterval(recalculateTimeAgo, 30000)
    }
    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <span>{`${prefix} ${dateRun} ${suffix}`}</span>
}
