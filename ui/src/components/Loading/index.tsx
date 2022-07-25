import { Spinner } from '@mergestat/blocks'
import React from 'react'

const Loading: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner />
    </div>
  )
}

export default Loading
