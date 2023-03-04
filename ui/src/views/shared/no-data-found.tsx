import { Panel } from '@mergestat/blocks'
import React from 'react'

type NoDataFoundProps = {
  message: string
}

export const NoDataFound: React.FC<NoDataFoundProps> = ({ message }: NoDataFoundProps) => {
  return (
    <div className='flex justify-center py-5'>
      <Panel className='rounded-md w-full shadow-sm mx-8'>
        <Panel.Body className='p-0'>
          <div className='flex justify-center items-center bg-white py-5'>
            {message}
          </div>
        </Panel.Body>
      </Panel>
    </div>
  )
}
