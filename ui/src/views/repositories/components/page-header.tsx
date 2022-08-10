import { BreadcrumbNav, Button, SplitButton } from '@mergestat/blocks'
import { AutoImportIcon, CogIcon, PlusIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React from 'react'
import { useRepositoriesSetState } from 'src/state/contexts/repositories.context'

export const PageHeader: React.FC = () => {
  const {
    setShowAddRepositoryModal,
    setShowAutoImportModal,
    setShowSyncRepoModal
  } = useRepositoriesSetState()

  const router = useRouter()
  const crumbs = [
    {
      text: 'Repos',
      onClick: () => router.push('/repos'),
    }
  ]

  return (
    <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
      <div className="text-xl font-semibold">
        <BreadcrumbNav data={crumbs} />
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <SplitButton
            text="Create Auto Import"
            className="z-20 text-base font-normal"
            startIcon={<AutoImportIcon className="t-icon" />}
            onButtonClick={() => setShowSyncRepoModal(true)}
            disabled={true}
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
          skin="secondary"
        >
          Add Repository
        </Button>
      </div>
    </div>
  )
}
