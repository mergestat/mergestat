import { Dropdown, Menu } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'
import React from 'react'

export const LogsTableRowOptions: React.FC = () => {
  return (
    <Dropdown
      alignEnd
      trigger={<DotsHorizontalIcon className="t-icon cursor-pointer text-semantic-icon ml-6" />}
      overlay={() => (
        <Menu className='whitespace-nowrap'>
          <Menu.Item text="Cancel Sync" disabled />
        </Menu>
      )}
    />
  )
}
