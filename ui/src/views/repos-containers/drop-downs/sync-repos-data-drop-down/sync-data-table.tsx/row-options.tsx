import { Dropdown, Menu } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'

export const RowOptions: React.FC = () => {
  return (
    <Dropdown
      alignEnd
      overlay={() => (
        <Menu className="absolute z-10 whitespace-nowrap right-0">
          <Menu.Item text="Disable For All" />
          <Menu.Item text="Enable For All" />
        </Menu>
      )}
      trigger={<DotsHorizontalIcon className="t-icon cursor-pointer t-icon-default" />}
    />
  )
}
