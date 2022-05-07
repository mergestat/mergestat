import React from 'react'
import { useRepositoriesContext } from 'src/state/contexts/repositories.context'
import AutoImportManage from '../Repos/AutoImportManage'
import SyncRepoModal from '../Repos/SyncRepoModal'
import { EmptyRepositoryTable } from './components/empty-repository-table'
import FilterHeader from './components/filter-header'
import PageHeader from './components/page-header'
import RepositoriesTable from './components/repositories-table'
import { AddRepositoryModal } from './modals/add-repository-modal'
import { ManageAutoImportReposModal } from './modals/auto-import-repository-modals/manage-auto-imports-modal'
import { SyncAutoImportReposModal } from './modals/auto-import-repository-modals/sync-auto-import-modal'

const RepositoriesPage: React.FC = () => {
  const {
    showAddRepositoryModal,
    showAutoImportModal,
    setShowAutoImportModal,
    showSyncRepoModal,
    setShowSyncRepoModal,
  } = useRepositoriesContext()

  return (
    <main className="w-full bg-gray-100">
      <PageHeader />
      <FilterHeader />
      {false && <EmptyRepositoryTable />}
      {true && <RepositoriesTable />}
      {showAddRepositoryModal && <AddRepositoryModal />}
      {showAutoImportModal &&
        <ManageAutoImportReposModal
          onClose={() => setShowAutoImportModal(false)}
          onSyncModalOpen={() => {
            setShowSyncRepoModal(true)
          }} />
      }
      {showSyncRepoModal &&
        <SyncAutoImportReposModal 
        onClose={() => {
          setShowSyncRepoModal(false)
        }
      } />
      }
    </main>
  )
}

export default RepositoriesPage
