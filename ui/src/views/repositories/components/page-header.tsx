import React from 'react'
import { BreadcrumbNav, Button, SplitButton } from '@mergestat/blocks'
import { AutoImportIcon, CogIcon, PlusIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import { AutoManagedBreadCrumb } from 'src/components/bread-crumb'
import { useRepositoriesContext } from 'src/state/contexts/repositories.context'

export const PageHeader: React.FC = (props) => {
  const {
    setShowAddRepositoryModal,
    setShowAutoImportModal,
    setShowOpenRepositoryModal,
    setShowSyncRepoModal,
  } = useRepositoriesContext()
  const router = useRouter()

  return (
    <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
      <div className="text-xl font-semibold">
        {/*<BreadcrumbNav
          data={[{ text: 'Repos', onClick: () => router.push('/repos') }]}
        />*/
        <AutoManagedBreadCrumb/>
          }
      </div>
      <div className="flex justify-between gap-3 items-center">
        <div className="relative">
          <SplitButton
            text="Create Auto Import"
            className="z-20"
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
