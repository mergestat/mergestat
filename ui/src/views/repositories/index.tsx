import { useRepositoriesContext } from 'src/state/contexts/repositories.context'
import { EmptyRepositoryTable, FilterHeader, PageHeader, RepositoriesTable } from './components'
import { AddRepositoryModal } from './modals/add-repository-modal'

import { Alert, ColoredBox, Spinner, Stat } from '@mergestat/blocks'
import { ClockIcon, TableIcon, RepositoryIcon } from '@mergestat/icons'
import Loading from 'src/components/Loading'
import useRepos from 'src/views/hooks/useRepos'
import { EmptyRepository } from './components/empty-repository'
import { RemoveRepositoryModal } from './modals/remove-repository-modal'

const RepositoriesView: React.FC = () => {
  const [{ showAddRepositoryModal, showRemoveRepositoryModal }] = useRepositoriesContext()
  const { showTable, loading, data, showBanner } = useRepos(true)

  const AvgSync = () => {
    if (data && data.repos && data.allRepos) {
      return Math.round(data.repos.nodes.reduce((total, next) => total + next.repoSyncs.totalCount, 0) / data.allRepos.totalCount)
    }
  }

  return (
    <main className='w-full flex flex-col h-full bg-gray-50 overflow-hidden'>
      <div className='bg-white border-b border-gray-200'>
        <PageHeader />
        {showTable && <FilterHeader />}
      </div>
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
        <div className='md_grid md_grid-cols-3 gap-6 space-y-4 md_space-y-0 mb-6'>
          <Stat className='shadow-sm w-full'>
            <Stat.Left>
                <Stat.Label>Number of repos</Stat.Label>
                <Stat.Number>{data?.allRepos?.totalCount}</Stat.Number>
            </Stat.Left>
            <Stat.Right>
              <ColoredBox size='12'><RepositoryIcon className='t-icon t-icon-default' /></ColoredBox>
            </Stat.Right>
          </Stat>
          <Stat className='shadow-sm w-full'>
            <Stat.Left>
                <Stat.Label>Avg. number of syncs</Stat.Label>
                <Stat.Number>{AvgSync()}</Stat.Number>

            </Stat.Left>
            <Stat.Right>
              <ColoredBox size='12'><TableIcon className='t-icon t-icon-default' /></ColoredBox>
            </Stat.Right>
          </Stat>
          <Stat className='shadow-sm w-full'>
            <Stat.Left>
                <Stat.Label>Avg. sync run time</Stat.Label>
                {/* TODO: convert static number to calculated */}
                <Stat.Number>1m</Stat.Number>
            </Stat.Left>
            <Stat.Right>
              <ColoredBox size='12'><ClockIcon className='t-icon t-icon-default' /></ColoredBox>
            </Stat.Right>
          </Stat>
        </div>
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
