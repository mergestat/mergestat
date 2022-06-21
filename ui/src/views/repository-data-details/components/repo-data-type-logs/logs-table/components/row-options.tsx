import { Dropdown, Menu } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'

export const LogsTableRowOptions: React.FC = (props) => {
  return (
    <Dropdown
      alignEnd
      trigger={<DotsHorizontalIcon className="t-icon cursor-pointer text-semantic-icon" />}
      overlay={() => (
        <Menu className='whitespace-nowrap'>
          <Menu.Item text="Cancel Sync" disabled  />
        </Menu>
      )}
    />
  )
}
