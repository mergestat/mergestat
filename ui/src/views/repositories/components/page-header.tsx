import { BreadcrumbNav, Button, SplitButton } from '@mergestat/blocks'
import { AutoImportIcon, CogIcon, PlusIcon } from '@mergestat/icons'
import React, { useState } from 'react'
import { useRepositoriesContext } from 'src/state/contexts/repositories.context'

const PageHeader: React.FC = (props) => {
  const {
    setShowAddRepositoryModal,
    setShowAutoImportModal,
    setShowOpenRepositoryModal,
    setShowSyncRepoModal,
  } = useRepositoriesContext()

  return (
    <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
      <div className="text-xl font-semibold">
        <BreadcrumbNav data={[{ text: 'Repos' }]} />
      </div>
      <div className="flex justify-between gap-3 items-center">
        <div className="relative">
          <SplitButton
            text="Create Auto Import"
            startIcon={<AutoImportIcon className="t-icon" />}
            onButtonClick={() => setShowSyncRepoModal(true)}
            items={[
              {
                text: 'Manage auto imports',
                icon: <CogIcon className="t-icon mr-2" />,
              },
            ]}
            onItemClick={() => setShowAutoImportModal(true)}
          />
        </div>

        <Button
          startIcon={<PlusIcon className="t-icon" />}
          onClick={() => setShowAddRepositoryModal(true)}
        >
          Add Repository
        </Button>
      </div>
    </div>
  )
}

export default PageHeader
