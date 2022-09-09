import { Button, Dropdown, Menu } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'
import React from 'react'
import { RepoSyncStateT } from 'src/@types'
import { SYNC_STATUS } from 'src/utils/constants'

export type RepositoryDetailsRowOptionsProps = {
  state: RepoSyncStateT
}

export const RepositoryTableRowOptions: React.FC<RepositoryDetailsRowOptionsProps> =
  (props) => {
    const { state } = props
    return (
      <Dropdown
        alignEnd
        trigger={<Button skin="borderless-muted" startIcon={<DotsHorizontalIcon className="t-icon" />} isIconOnly />}
        overlay={() => (
          <Menu className='whitespace-nowrap'>
            {(state === SYNC_STATUS.disabled)
              ? <Menu.Item text="Enable Data Sync" />
              : <React.Fragment>
                <Menu.Item text="Disable Data Sync" disabled={state === SYNC_STATUS.running} />
                <Menu.Item text="Cancel Sync" disabled={state !== SYNC_STATUS.running} />
              </React.Fragment>
            }
          </Menu>
        )}
      />
    )
  }
