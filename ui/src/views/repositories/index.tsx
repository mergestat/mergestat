import React from 'react'
import { useRepositoriesContext, useRepositoriesSetState } from 'src/state/contexts/repositories.context'
import { EmptyRepositoryTable, FilterHeader, PageHeader, RepositoriesTable } from './components'
import { AddRepositoryModal } from './modals/add-repository-modal'
import { ManageAutoImportReposModal } from './modals/auto-import-repository-modals/manage-auto-imports-modal'
import { SyncAutoImportReposModal } from './modals/auto-import-repository-modals/sync-auto-import-modal'
import { SyncDataDropDown } from './drop-downs/sync-repos-data-drop-down'

import { Button, Toolbar } from '@mergestat/blocks'
import { CaretDownIcon, PencilIcon, RefreshIcon } from '@mergestat/icons'
import Loading from 'src/components/Loading'
import { useQuery } from '@apollo/client'
import GET_REPOS from 'src/api-logic/graphql/queries/get-repos.query'
import { showErrorAlert } from 'src/utils/alerts'

const RepositoriesView: React.FC = () => {
  const [{ showAddRepositoryModal, showAutoImportModal, showSyncRepoModal }] = useRepositoriesContext()

  const { setShowAutoImportModal, setShowSyncRepoModal } = useRepositoriesSetState()

  const { loading, error, data } = useQuery(GET_REPOS, {
    pollInterval: 5000,
  })

  // - Todo: connect selectedRepositoriesCount from RepositoriesTable
  const selectedRepositoriesCount = 0

  if (error) {
    showErrorAlert(error.message)
  }

  return (
    <main className="w-full flex flex-col h-full bg-gray-50 overflow-hidden">
      <div className="bg-white border-b border-gray-200">
        <PageHeader />
        {data && <FilterHeader />}
      </div>
      <div className="flex-1 items-center p-8 overflow-auto">
        {loading
          ? <Loading />
          : (data ? <RepositoriesTable data={data} /> : <EmptyRepositoryTable />)
        }
      </div>

      {data && (
        <div className="bg-white h-14  border-t flex items-center px-8">
          <Toolbar>
            <Toolbar.Left>
              <Toolbar.Item className="mr-2">
                <div className="flex items-center gap-6">
                  <p className="font-medium text-sm text-semantic-mutedText">
                    {selectedRepositoriesCount} of{' '}
                    { } repos selected
                  </p>
                </div>
              </Toolbar.Item>
              <Toolbar.Item>
                <div className="flex items-center gap-2">
                  <SyncDataDropDown
                    triger={
                      <Button
                        endIcon={<CaretDownIcon className="t-icon" />}
                        startIcon={<RefreshIcon className="t-icon" />}
                        skin="secondary"
                        size="small"
                      // disabled={selectedRepositoriesCount === 0}
                      >
                        Sync Data
                      </Button>
                    }
                  />

                  <Button
                    endIcon={<CaretDownIcon className="t-icon" />}
                    startIcon={<PencilIcon className="t-icon" />}
                    skin="secondary"
                    size="small"
                  // disabled={selectedRepositoriesCount === 0}
                  >
                    Edit Tags
                  </Button>
                </div>
              </Toolbar.Item>
            </Toolbar.Left>
          </Toolbar>
        </div>
      )}
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

export default RepositoriesView
