import { Dropdown, Menu } from "@mergestat/blocks"
import { CogIcon, DotsHorizontalIcon, TrashIcon } from "@mergestat/icons"


export const LogsTableRowOptions: React.FC = (props) => {
  return (
    <Dropdown
      alignEnd
      trigger={<DotsHorizontalIcon className="cursor-pointer" />}
      overlay={() => (
        <Menu className={` whitespace-nowrap `}>
          <Menu.Item text="Cancel Sync"  />
        </Menu>
      )}
    />
  )
}