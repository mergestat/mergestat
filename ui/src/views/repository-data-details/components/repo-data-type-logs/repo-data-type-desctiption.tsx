import { Button, Typography } from '@mergestat/blocks'
import React from 'react'

type RepoDataDescriptionProps = {
  title: string
  description: string
}
export const RepoDataTypeDescription: React.FC<RepoDataDescriptionProps> = (
  props
) => {
  return (
    <div className="p-6 bg-white rounded flex flex-col gap-3 border border-gray-200">
      <h4 className="text-samantic-header font-medium">
        {props.title}
      </h4>
      <span className="text-samantic-mutedText">
        {props.description}
      </span>
      <p className="text-blue-600 cursor-pointer">Learn more</p>
    </div>
  )
}
