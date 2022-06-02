import { Panel, Table, Typography } from '@mergestat/blocks'
import React from 'react'

import { sampleDatatypesettingsData } from './sample-data'

export const SettingsTable: React.FC = (props) => {
  const columns: Array<Record<string, any>> = [
    {
      title: "Column",
      className: 'text-samantic-text',
      dataIndex: 'column',
      key: 'column',
    },
    {
      title: "Type" ,
      className: 'text-gray-500 text-samantic-text',
      dataIndex: 'type',
      key: 'type',
    },
  ]

  return (
    <Panel>
      <Panel.Header>
        <Typography.Title className='text-lg text-samantic-header font-semibold'>
          Table with data
        </Typography.Title>
      </Panel.Header>
      <Panel.Body className="p-0">
        <Table
          responsive
          noWrapHeaders
          borderless
          checkable
          columns={columns}
          dataSource={sampleDatatypesettingsData}
        />
      </Panel.Body>
    </Panel>
  )
}
