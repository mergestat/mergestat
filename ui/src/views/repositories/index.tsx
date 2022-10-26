import { useRepositoriesContext } from 'src/state/contexts/repositories.context'
import { EmptyRepositoryTable, FilterHeader, PageHeader, RepositoriesTable } from './components'
import { AddRepositoryModal } from './modals/add-repository-modal'

import { Alert, Spinner } from '@mergestat/blocks'
import Loading from 'src/components/Loading'
import useRepos from 'src/views/hooks/useRepos'
import { EmptyRepository } from './components/empty-repository'
import { RemoveRepositoryModal } from './modals/remove-repository-modal'

const RepositoriesView: React.FC = () => {
  const [{ showAddRepositoryModal, showRemoveRepositoryModal }] = useRepositoriesContext()
  const { showTable, loading, data, showBanner } = useRepos(true)

  return (
    <main className="w-full flex flex-col h-full bg-gray-50 overflow-hidden">
      <div className="bg-white border-b border-gray-200">
        <PageHeader />
        {showTable && <FilterHeader />}
      </div>
      <div className="flex-1 items-center p-8 overflow-auto">
        {showBanner &&
          <Alert
            type="info"
            theme="light"
            icon={<Spinner size='sm' className='self-center' />}
            title={(
              <div>
                <span>Auto importing repos</span>
              </div>
            )}
            className='mb-5'
          >
            Repositories from an auto-import will appear here once they are finished syncing.
          </Alert>
        }

        {loading
          ? <Loading />
          : data?.allRepos?.totalCount && data?.allRepos?.totalCount > 0
            ? <RepositoriesTable data={data} />
            : data?.serviceAuthCredentials?.totalCount && data?.serviceAuthCredentials?.totalCount > 0
              ? <EmptyRepository />
              : <EmptyRepositoryTable />
        }
      </div>

      {showRemoveRepositoryModal && <RemoveRepositoryModal />}
      {showAddRepositoryModal && <AddRepositoryModal />}
    </main>
  )
}

export default RepositoriesView
