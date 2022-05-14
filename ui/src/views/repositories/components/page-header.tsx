import React from 'react'
import { Button, SplitButton } from '@mergestat/blocks'
import { AutoImportIcon, CogIcon, PlusIcon } from '@mergestat/icons'
import { AutoManagedBreadCrumb } from 'src/components/bread-crumb'
import { useRepositoriesContext } from 'src/state/contexts/repositories.context'

export const PageHeader: React.FC = (props) => {
  const {
    setShowAddRepositoryModal,
    setShowAutoImportModal,
    setShowSyncRepoModal,
  } = useRepositoriesContext()

  return (
    <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
      <div className="text-xl font-semibold">
        <AutoManagedBreadCrumb />
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <SplitButton
            text="Create Auto Import"
            className="z-20 text-base font-normal"
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
          className="font-normal"
        >
          Add Repository
        </Button>
      </div>
    </div>
  )
}
