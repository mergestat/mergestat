import { Button, Toolbar } from '@mergestat/blocks'
import { PlusIcon } from '@mergestat/icons'
import React from 'react'
import { useRepositoriesSetState } from 'src/state/contexts/repositories.context'

export const PageHeader: React.FC = () => {
  const { setShowAddRepositoryModal } = useRepositoriesSetState()

  return (
    <div className="bg-white h-16 flex items-center w-full px-8 border-b border-gray-200">
      <Toolbar>
        <Toolbar.Left>
          <div className="text-xl font-semibold">
            Repos
          </div>
        </Toolbar.Left>
        <Toolbar.Right>
          <Button
            startIcon={<PlusIcon className="t-icon" />}
            onClick={() => setShowAddRepositoryModal(true)}
            skin="primary"
          >
            Add Repositories
          </Button>
        </Toolbar.Right>
      </Toolbar>

    </div>
  )
}
