import React from 'react'
import { Dropdown, Menu } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'
import { repSyncState } from 'src/@types'

export type RepositoryDetailsRowOptionsProps = {
  state:repSyncState
}

export const RepositoryTableRowOptions: React.FC<RepositoryDetailsRowOptionsProps> =
  (props) => {
    const { state } = props
    return (
      <Dropdown
        alignEnd
        trigger={<DotsHorizontalIcon className="t-icon cursor-pointer text-samantic-icon" />}
        overlay={() => (
          <Menu className={`absolute z-10 whitespace-nowrap right-0`}>
            {(state === "disabled")
              ? <Menu.Item text="Enable Data Sync" />
              : (
                <React.Fragment>
                  <Menu.Item text="Disable Data Sync" disabled={state === "loading"} />
                  <Menu.Item text="Cancel Sync" disabled={state !== "loading"} />
                </React.Fragment>
              )
            }
          </Menu>
        )}
      />
    )
  }
