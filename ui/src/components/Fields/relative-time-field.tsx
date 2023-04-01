import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import { getRelativeTime } from 'src/utils'
import { SYNC_STATUS } from 'src/utils/constants'

export type RelativeTimeFieldProps = {
  date: string
  syncStatus?: string
  styles?: string
}

export const RelativeTimeField: React.FC<RelativeTimeFieldProps> = ({ date, syncStatus, styles }) => {
  const [dateRun, setDateRun] = useState<string>('-')

  const recalculateTimeAgo = () => {
    const timeAgo = getRelativeTime(new Date(date))
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
  }, [date])

  return (
    <div className={cx(styles, { 'bg-gray-50': syncStatus === SYNC_STATUS.disabled })}>
      {dateRun}
    </div>
  )
}
