import { Checkbox, Panel, Table, Typography } from '@mergestat/blocks'
import React, { useState } from 'react'
import { selectAllState } from 'src/utils'

import type { SettingsDataType } from './@type'
import { sampleDatatypesettingsData } from './sample-data'

export const SettingsTable: React.FC = (props) => {
  const [tableData, setTableData] = useState<SettingsDataType[]>(sampleDatatypesettingsData)

  const columns: Array<Record<string, any>> = [
    {
      title:
        <Checkbox
          onChange = {
            (e) => setTableData([...tableData.map(data => ({
              ...data, isSelected: e.target.checked
            }))])
          }
          className="ml-6"
          value = {selectAllState(tableData)}
        />,
      className: 'w-4',
      dataIndex: 'isSelected',
      key: 'isSelected',
      render:(isSelected: boolean, data: SettingsDataType) =>
        <Checkbox
          checked={isSelected}
          className="ml-6"
          onChange={(e) => {
            setTableData([...tableData.map(d => {
              return (d === data) ? {
                ...d,
                isSelected: e.target.checked
              } : d
            })])
          }}
        />,
    },
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
          columns={columns}
          dataSource={tableData}
        />
      </Panel.Body>
    </Panel>
  )
}
