import React from 'react'

type RepositoryLatestSyncRunProps = {
  time_ago: string
  disabled?: boolean
}

export const RepositoryLatestSyncRun: React.FC<RepositoryLatestSyncRunProps> = (
  props
) => {
  const { time_ago, disabled } = props
  return <p className="text-sm text-gray-500">{disabled ? '-' : time_ago}</p>
}
