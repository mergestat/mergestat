import { Dropdown, Menu } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'

type RepositoryAdditionalActionsProps = {
  disabled: boolean
  syncing: boolean
}

export const RepositorySyncAdditionalActionsDropDown: React.FC<RepositoryAdditionalActionsProps> =
  (props) => {
    const { disabled, syncing } = props
    return (
      <Dropdown
        alignEnd
        trigger={<DotsHorizontalIcon className="t-icon cursor-pointer" />}
        overlay={() => (
          <Menu className={`absolute z-10 whitespace-nowrap right-0`}>
            {!disabled && (
              <Menu.Item text="Disable Data Sync" disabled={syncing} />
            )}
            {disabled && <Menu.Item text="Enable Data Sync" />}

            {!disabled && <Menu.Item text="Cancel Sync" disabled={!syncing} />}
          </Menu>
        )}
      />
    )
  }
