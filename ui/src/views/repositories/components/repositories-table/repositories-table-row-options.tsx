import { Menu } from '@mergestat/blocks'
import { CogIcon, DotsHorizontalIcon, TrashIcon } from '@mergestat/icons'
import React from 'react'

type RepositoriesTableRowOptionsProps = {
  index: number
  reposData: Array<any>
}

export const RepositoriesTableRowOptions: React.FC<RepositoriesTableRowOptionsProps> =
  (props) => {
    const [open, setOpen] = React.useState('')

    return (
      <div className="relative">
        <DotsHorizontalIcon
          className="cursor-pointer"
          onClick={() => {
            setOpen(`menu_${props.index}`)
          }}
        />
        {open === `menu_${props.index}` && (
          <Menu
            className={`absolute z-1 whitespace-nowrap right-0  ${
              props.index === props.reposData.length - 1 && 'bottom-0 '
            }`}
          >
            <Menu.Item
              text="Repo settings"
              withIcon
              icon={<CogIcon className="mr-2" />}
            />
            <Menu.Divider />
            <Menu.Item
              text="Remove Repo"
              withIcon
              icon={<TrashIcon className="mr-2" />}
            />
          </Menu>
        )}
      </div>
    )
  }
