import { Button, Dropdown, Menu } from '@mergestat/blocks'
import { CogIcon, DotsHorizontalIcon, TrashIcon } from '@mergestat/icons'
import { useRepositoriesSetState } from 'src/state/contexts'

type RemoveRepositoryProps = {
  id: string
  name: string
  autoImported: boolean
}

export const RepositoryAdditionalActionsDropDown: React.FC<RemoveRepositoryProps> = ({ id, name, autoImported }: RemoveRepositoryProps) => {
  const { setShowRemoveRepositoryModal, setRepoToRemove } = useRepositoriesSetState()

  const prepareToRemove = () => {
    setRepoToRemove({ id, name, autoImported, redirect: false })
    setShowRemoveRepositoryModal(true)
  }

  return (
    <Dropdown
      alignEnd
      trigger={<Button skin='borderless-muted' startIcon={<DotsHorizontalIcon className='t-icon' />} isIconOnly />}
      overlay={() => (
        <Menu className='whitespace-nowrap'>
          <Menu.Item
            className='text-gray-700'
            text='Repo settings'
            withIcon
            icon={<CogIcon className='t-icon mr-2' />}
          />
          <Menu.Divider />
          <Menu.Item
            className='text-gray-700'
            text='Remove Repo'
            withIcon
            onClick={prepareToRemove}
            icon={<TrashIcon className='t-icon mr-2' />}
          />
        </Menu>
      )}
    />
  )
}
