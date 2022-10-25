import { useRepositoriesContext } from 'src/state/contexts/repositories.context'
import { EmptyRepositoryTable, FilterHeader, PageHeader, RepositoriesTable } from './components'
import { AddRepositoryModal } from './modals/add-repository-modal'

import { Alert, ColoredBox, Spinner, Stat } from '@mergestat/blocks'
import { CircleErrorIcon, CircleErrorFilledIcon, TableIcon, RepositoryIcon } from '@mergestat/icons'
import Loading from 'src/components/Loading'
import useRepos from 'src/views/hooks/useRepos'
import { EmptyRepository } from './components/empty-repository'
import { RemoveRepositoryModal } from './modals/remove-repository-modal'

const RepositoriesView: React.FC = () => {
  const [{ showAddRepositoryModal, showRemoveRepositoryModal }] = useRepositoriesContext()
  const { showTable, loading, data, showBanner } = useRepos(true)

  /* TODO: replace with real number */
  const syncErrors = 0
  const repoSyncs = 8

  return (
    <main className='w-full flex flex-col h-full bg-gray-50 overflow-hidden'>
      <PageHeader />
      <div className='flex-1 items-center p-8 overflow-auto'>
        {showBanner &&
          <Alert
            type='info'
            theme='light'
            icon={<Spinner size='sm' className='self-center' />}
            title={(
              <div>
                <span>Auto importing repos</span>
              </div>
            )}
            className='mb-6'
          >
            Repositories from an auto-import will appear here once they are finished syncing.
          </Alert>
        }

        {/* Metrics */}
        {showTable &&
          <div className='md_grid md_grid-cols-3 gap-6 space-y-4 md_space-y-0 mb-6'>
            <Stat className='shadow-sm w-full'>
              <Stat.Left>
                  <Stat.Label>Total number of repos</Stat.Label>
                  <Stat.Number>{data?.allRepos?.totalCount}</Stat.Number>
              </Stat.Left>
              <Stat.Right>
                <ColoredBox size='12'><RepositoryIcon className='t-icon t-icon-default' /></ColoredBox>
              </Stat.Right>
            </Stat>
            <Stat className='shadow-sm w-full'>
              <Stat.Left>
                  <Stat.Label>Total number of repo syncs</Stat.Label>
                  <Stat.Number>{repoSyncs}</Stat.Number>
              </Stat.Left>
              <Stat.Right>
                <ColoredBox size='12'><TableIcon className='t-icon t-icon-default' /></ColoredBox>
              </Stat.Right>
            </Stat>
            <Stat className='shadow-sm w-full'>
              <Stat.Left>
                  <Stat.Label>Total repo sync errors</Stat.Label>
                  {/* TODO: convert static number to calculated */}
                  <Stat.Number>
                    <div className='flex items-center space-x-1.5'>
                    {syncErrors > 0 && <CircleErrorFilledIcon className='t-icon t-icon-danger' />}
                    <span>{syncErrors}</span>
                    </div>
                  </Stat.Number>
              </Stat.Left>
              <Stat.Right>
                <ColoredBox size='12'><CircleErrorIcon className='t-icon t-icon-default' /></ColoredBox>
              </Stat.Right>
            </Stat>
          </div>
        }

        {showTable && <div className='mb-8'><FilterHeader /></div>}

        {loading
          ? <Loading />
          : showTable
            ? <>
                {/* Repo table */}
                <RepositoriesTable data={data} />
            </>
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
