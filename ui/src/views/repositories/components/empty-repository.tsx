import { Avatar, Button } from '@mergestat/blocks'
import { PlusIcon, RepositoryIcon } from '@mergestat/icons'
import React from 'react'
import { useRepositoriesSetState } from 'src/state/contexts/repositories.context'
import { TEST_IDS } from 'src/utils/constants'

export const EmptyRepository: React.FC = () => {
  const { setShowAddRepositoryModal } = useRepositoriesSetState()

  return (
    <div data-testid={TEST_IDS.emptyRepository} className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col items-center">
        <Avatar icon={<RepositoryIcon className='t-icon' />} size='lg' />
        <p className="text-semantic-mutedText py-5">No repositories added yet</p>
        <Button
          startIcon={<PlusIcon className="t-icon" />}
          onClick={() => setShowAddRepositoryModal(true)}
          skin="secondary"
        >
          Add Repository
        </Button>
      </div>
    </div>
  )
}
