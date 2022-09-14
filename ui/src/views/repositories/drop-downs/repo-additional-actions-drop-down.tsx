import { Dropdown, Menu } from '@mergestat/blocks'
import { CogIcon, DotsHorizontalIcon, TrashIcon } from '@mergestat/icons'
import { useRepositoriesSetState } from 'src/state/contexts'
import { TEST_IDS } from 'src/utils/constants'

type RemoveRepositoryProps = {
  id: string
  name: string
}

export const RepositoryAdditionalActionsDropDown: React.FC<RemoveRepositoryProps> = ({ id, name }: RemoveRepositoryProps) => {
  const { setShowRemoveRepositoryModal, setRepoToRemove } = useRepositoriesSetState()

  const prepareToRemove = () => {
    setRepoToRemove({ id, name })
    setShowRemoveRepositoryModal(true)
  }

  return (
    <Dropdown
      alignEnd
      data-testid={TEST_IDS.removeRepoThreeDots}
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
            onClick={prepareToRemove}
            icon={<TrashIcon className="t-icon mr-2" />}
          />
        </Menu>
      )}
    />
  )
}
