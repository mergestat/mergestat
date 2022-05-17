import { Dropdown, Menu } from '@mergestat/blocks'
import { CogIcon, DotsHorizontalIcon, TrashIcon } from '@mergestat/icons'

type RepositoryAdditionalActionsProps = {}

export const RepositoryAdditionalActionsDropDown: React.FC<RepositoryAdditionalActionsProps> =
  (props) => {
    return (
      <Dropdown
        alignEnd
        trigger={<DotsHorizontalIcon className="cursor-pointer" />}
        overlay={() => (
          <Menu className={`absolute z-10 whitespace-nowrap right-0`}>
            <Menu.Item
              className='text-gray-700'
              text="Repo settings"
              withIcon
              icon={<CogIcon className="mr-2 text-samantic-icon" />}
            />
            <Menu.Divider />
            <Menu.Item
              className='text-gray-700'
              text="Remove Repo"
              withIcon
              icon={<TrashIcon className="mr-2 text-samantic-icon" />}
            />
          </Menu>
        )}
      />
    )
  }
