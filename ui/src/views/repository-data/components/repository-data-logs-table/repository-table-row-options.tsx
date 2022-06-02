import React from 'react'
import { Dropdown, Menu } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'
import { RepSyncStateT } from 'src/@types'

export type RepositoryDetailsRowOptionsProps = {
  state:RepSyncStateT
}

export const RepositoryTableRowOptions: React.FC<RepositoryDetailsRowOptionsProps> =
  (props) => {
    const { state } = props
    return (
      <Dropdown
        alignEnd
        trigger={<DotsHorizontalIcon className="t-icon cursor-pointer text-samantic-icon" />}
        overlay={() => (
          <Menu className='whitespace-nowrap'>
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
