import React from 'react'
import { Button, Dropdown, Menu } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'
import { RepoSyncStateT } from 'src/@types'

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
            {(state === "disabled")
              ? <Menu.Item text="Enable Data Sync" />
              : (
                <React.Fragment>
                  <Menu.Item text="Disable Data Sync" disabled={state === "running"} />
                  <Menu.Item text="Cancel Sync" disabled={state !== "running"} />
                </React.Fragment>
              )
            }
          </Menu>
        )}
      />
    )
  }
