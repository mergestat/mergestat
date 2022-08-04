import { Panel, Table, Typography } from '@mergestat/blocks'
import React from 'react'

import { sampleData } from 'src/sample-data/repo-data-sync-settings'

export const SettingsTable: React.FC = (props) => {
  const columns: Array<Record<string, any>> = [
    {
      title: "Column",
      className: 'text-semantic-text',
      dataIndex: 'column',
      key: 'column',
    },
    {
      title: "Type",
      className: 'text-gray-500 text-semantic-text',
      dataIndex: 'type',
      key: 'type',
    },
  ]

  return (
    <Panel className="shadow-sm">
      <Panel.Header>
        <Typography.Title className='text-lg text-semantic-header font-semibold'>
          Table with data
        </Typography.Title>
      </Panel.Header>
      <Panel.Body className="p-0 overflow-auto">
        <Table
          responsive
          noWrapHeaders
          borderless
          checkable
          columns={columns}
          dataSource={sampleData}
        />
      </Panel.Body>
    </Panel>
  )
}
