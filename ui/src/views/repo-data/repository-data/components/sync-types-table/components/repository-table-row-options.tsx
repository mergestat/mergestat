import { Button, Dropdown, Menu } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'
import React from 'react'

export const RepositoryTableRowOptions: React.FC = () => {
  return (
    <Dropdown
      alignEnd
      trigger={<Button skin="borderless-muted" startIcon={<DotsHorizontalIcon className="t-icon" />} isIconOnly />}
      overlay={(close) => (
        <Menu className='whitespace-nowrap'>
          <Menu.Item
            text="Edit Repo Sync"
            onClick={close}
          />
        </Menu>
      )}
    />
  )
}
