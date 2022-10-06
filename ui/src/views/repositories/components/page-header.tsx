import { BreadcrumbNav, Button, Toolbar } from '@mergestat/blocks'
import { PlusIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React from 'react'
import { useRepositoriesSetState } from 'src/state/contexts/repositories.context'

export const PageHeader: React.FC = () => {
  const { setShowAddRepositoryModal } = useRepositoriesSetState()

  const router = useRouter()
  const crumbs = [
    {
      text: 'Repos',
      onClick: () => router.push('/repos'),
    }
  ]

  return (
    <div className="bg-white h-16 flex items-center w-full px-8 border-b border-gray-200">
      <Toolbar>
        <Toolbar.Left>
          <div className="text-xl font-semibold">
            <BreadcrumbNav data={crumbs} />
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
