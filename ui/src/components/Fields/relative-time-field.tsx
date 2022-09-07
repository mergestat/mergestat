import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import { RepoSyncDataType } from 'src/@types'
import { getRelativeTime } from 'src/utils'

export type RelativeTimeFieldProps = {
  date: string
  syncData?: RepoSyncDataType
  styles?: string
}

export const RelativeTimeField: React.FC<RelativeTimeFieldProps> = ({ date, syncData, styles }) => {
  const [dateRun, setDateRun] = useState<string>('N/A')

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
    <div className={cx(styles, { 'bg-gray-50': syncData?.status.syncState === 'disabled' })}>
      {dateRun}
    </div>
  )
}
