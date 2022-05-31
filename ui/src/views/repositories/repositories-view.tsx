import React from 'react'
import {
  useRepositoriesContext,
  useRepositoriesSetState,
} from 'src/state/contexts/repositories.context'
import {
  EmptyRepositoryTable,
  FilterHeader,
  PageHeader,
  RepositoriesTable,
} from './components'
import { AddRepositoryModal } from './modals/add-repository-modal'
import { ManageAutoImportReposModal } from './modals/auto-import-repository-modals/manage-auto-imports-modal'
import { SyncAutoImportReposModal } from './modals/auto-import-repository-modals/sync-auto-import-modal'

export const RepositoriesView: React.FC = () => {
  const [{
    showAddRepositoryModal,
    showAutoImportModal,
    showSyncRepoModal,
  }] = useRepositoriesContext()

  const {
    setShowAutoImportModal,
    setShowSyncRepoModal
  } = useRepositoriesSetState()

  return (
    <main className="w-full h-full grid grid-rows-content-layout bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <PageHeader />
        <FilterHeader />
      </div>
      <div className="flex flex-col items-center p-6">
        {false && <EmptyRepositoryTable />}
        {true && <RepositoriesTable />}
      </div>
      {showAddRepositoryModal && <AddRepositoryModal />}
      {showAutoImportModal && (
        <ManageAutoImportReposModal
          onClose={() => setShowAutoImportModal(false)}
          onSyncModalOpen={() => {
            setShowSyncRepoModal(true)
          }}
        />
      )}
      {showSyncRepoModal && (
        <SyncAutoImportReposModal
          onClose={() => {
            setShowSyncRepoModal(false)
          }}
        />
      )}
    </main>
  )
}
