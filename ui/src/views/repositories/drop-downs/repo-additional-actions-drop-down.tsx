import { Dropdown, Menu } from "@mergestat/blocks"
import { CogIcon, DotsHorizontalIcon, TrashIcon } from "@mergestat/icons"

type RepositoryAdditionalActionsProps = {}

export const RepositoryAdditionalActionsDropDown: React.FC<RepositoryAdditionalActionsProps> =
  (prpos) => {
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
  