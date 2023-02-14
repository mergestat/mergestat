import { Avatar } from '@mergestat/blocks'
import { TerminalIcon } from '@mergestat/icons'
import React from 'react'

export const EmptySavedQueries: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col items-center">
        <Avatar icon={<TerminalIcon className="t-icon" />} size='lg' />
        <p className="t-text-muted py-5">No saved queries yet</p>
      </div>
    </div>
  )
}
