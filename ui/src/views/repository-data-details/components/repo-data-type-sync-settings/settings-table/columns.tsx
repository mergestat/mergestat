import { Checkbox } from '@mergestat/blocks'
import React from 'react'

export const columns: Array<Record<string, any>> = [
  {
    title: '',
    className: 'w-4',
    dataIndex: 'checked',
    key: 'checked',
    render:(checked: boolean) => <Checkbox checked={checked} onChange={(e)=>{}} />,
  },
  {
    title:"Column",
    className: '',
    dataIndex: 'column',
    key: 'column',
    render: (columnName: string) => (
      <div className='text-samantic-text'>
        {columnName}
      </div>
    )
  },
  {
    title:"Type" ,
    className: 'text-gray-500 ',
    dataIndex: 'type',
    key: 'type',
    render: (type: string) => (
      <div className='text-samantic-text'>
        {type}
      </div>
    )
  },
]
