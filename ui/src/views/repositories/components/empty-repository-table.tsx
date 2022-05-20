import { Button, EmptyState } from '@mergestat/blocks'
import { PlusIcon, RepositoryIcon } from '@mergestat/icons'
import React from 'react'
import { useRepositoriesSetState } from 'src/state/contexts/repositories.context'

export const EmptyRepositoryTable: React.FC = () => {
  const { setShowAddRepositoryModal } = useRepositoriesSetState()

  return (
    <div className="h-4/5 p-8">
      <EmptyState
        text="No repositories added yet"
        action={
          <Button
            skin="secondary"
            startIcon={<PlusIcon className="t-icon" />}
            onClick={() => setShowAddRepositoryModal(true)}
          >
            Add Repository
          </Button>
        }
        topIcon={
          <div className="t-circle-icon">
            <RepositoryIcon className='t-icon' />
          </div>
        }
      />
    </div>
  )
}
