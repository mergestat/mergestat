import { Dropdown, Menu } from '@mergestat/blocks'
import { CogIcon, DotsHorizontalIcon, TrashIcon } from '@mergestat/icons'

export const RepositoryAdditionalActionsDropDown: React.FC = () => {
  return (
    <Dropdown
      alignEnd
      trigger={<DotsHorizontalIcon className="t-icon cursor-pointer" />}
      overlay={() => (
        <Menu className="whitespace-nowrap">
          <Menu.Item
            className='text-gray-700'
            text="Repo settings"
            withIcon
            icon={<CogIcon className="t-icon mr-2" />}
          />
          <Menu.Divider />
          <Menu.Item
            className='text-gray-700'
            text="Remove Repo"
            withIcon
            icon={<TrashIcon className="t-icon mr-2" />}
          />
        </Menu>
      )}
    />
  )
}
