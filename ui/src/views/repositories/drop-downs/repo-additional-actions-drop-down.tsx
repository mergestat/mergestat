import { Dropdown, Menu } from '@mergestat/blocks'
import { CaretRightIcon, CogIcon, DotsHorizontalIcon, TrashIcon } from '@mergestat/icons'
import { TagsListDropDown } from './tags-list-drop-down'

type RepositoryAdditionalActionsProps = {

}

export const RepositoryAdditionalActionsDropDown: React.FC<RepositoryAdditionalActionsProps> =
  (props) => {
    return (
      <Dropdown
        alignEnd
        trigger={<DotsHorizontalIcon className="cursor-pointer" />}
        overlay={() => (
          <Menu className={`absolute z-10 whitespace-nowrap right-0`}>
            <Menu.Item
              text="Repo settings"
              withIcon
              icon={<CogIcon className="mr-2" />}
            />
            <TagsListDropDown
              trigger={
                <div className=' relative  text-gray-600'>
                  <Menu.Item
                    className=' w-full'
                    text="Tags"
                    withIcon
                    icon={<CogIcon className="mr-2" />}
                  />
                  <CaretRightIcon className=' absolute right-3 top-3' />
                </div>
	            }
            />
            <Menu.Divider />
            <Menu.Item
              text="Remove Repo"
              withIcon
              icon={<TrashIcon className="mr-2" />}
            />
          </Menu>
        )}
      />
    )
  }
