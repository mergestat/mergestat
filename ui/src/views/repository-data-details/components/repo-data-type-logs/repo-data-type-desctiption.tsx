import { Button, Typography } from '@mergestat/blocks'
import React from 'react'

type RepoDataDescriptionProps={
    title:string
    description:string
}
export const RepoDataTypeDescription:React.FC<RepoDataDescriptionProps> = (props) => {
  return (
    <div className="p-6 bg-white rounded flex flex-col gap-3 border border-gray-200">
        <Typography.Text size="lg" className=" font-semibold" >
            {props.title}
        </Typography.Text>
        <Typography.Text className=" text-gray-500 text-sm">
            {props.description}
        </Typography.Text>
        <p className=' text-blue-500 cursor-pointer'>Learn more</p>
    </div>
  )
}
