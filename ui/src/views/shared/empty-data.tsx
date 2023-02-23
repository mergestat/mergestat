import { Avatar } from '@mergestat/blocks'
import React from 'react'
import { TEST_IDS } from 'src/utils/constants'

type EmptyDataProps = {
  message: string
  icon: React.ReactElement
}

export const EmptyData: React.FC<EmptyDataProps> = ({ message, icon }: EmptyDataProps) => {
  return (
    <div data-testid={TEST_IDS.emptyData} className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col items-center">
        <Avatar icon={icon} size='lg' />
        <p className="t-text-muted py-5">{message}</p>
      </div>
    </div>
  )
}
