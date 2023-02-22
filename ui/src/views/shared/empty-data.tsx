import { Avatar } from '@mergestat/blocks'
import React from 'react'

type EmptyDataProps = {
  message: string
  icon: React.ReactElement
}

export const EmptyData: React.FC<EmptyDataProps> = ({ message, icon }: EmptyDataProps) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col items-center">
        <Avatar icon={icon} size='lg' />
        <p className="t-text-muted py-5">{message}</p>
      </div>
    </div>
  )
}
