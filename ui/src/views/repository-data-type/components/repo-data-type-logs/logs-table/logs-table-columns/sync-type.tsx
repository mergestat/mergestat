import { CircleCheckFilledIcon, CircleErrorFilledIcon } from '@mergestat/icons'
import React from 'react'
import { syncType } from '../@type'


type SyncTypeProps = {
  sync_type: syncType
}
export const SyncType: React.FC<SyncTypeProps> = (props) => {
  const { sync_type } = props
  switch (sync_type) {
    case 'failed':
      return (
        <div className=' flex gap-2 items-center '>
          <CircleErrorFilledIcon className='w-5 h-5 text-red-600 mt-1' />
          <span className=' hover_text-blue-600 cursor-pointer '>Failed</span> 
        </div>
      )
    case 'succeeded':
      return (
        <div className=' flex gap-2 items-center '>
          <CircleCheckFilledIcon className='w-5 h-5 text-green-600 mt-1' />
          <span  className=' hover_text-blue-600 cursor-pointer '>Succeeded</span>
        </div>
      )
    default:
      return <div>{sync_type}</div>
  }
  return (
    <div>SyncType</div>
  )
}
