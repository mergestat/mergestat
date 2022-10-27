import { useRepositoriesContext } from 'src/state/contexts/repositories.context'
import { EmptyRepositoryTable, FilterHeader, PageHeader, RepositoriesTable } from './components'
import { AddRepositoryModal } from './modals/add-repository-modal'

import { Alert, ColoredBox, Spinner, Stat } from '@mergestat/blocks'
import { CircleErrorFilledIcon, CircleErrorIcon, RepositoryIcon, TableIcon } from '@mergestat/icons'
import { useEffect, useState } from 'react'
import { RepoDataPropsT, RepoMetrics } from 'src/@types'
import { mapToRepoData } from 'src/api-logic/mappers/repos'
import Loading from 'src/components/Loading'
import useRepos from 'src/views/hooks/useRepos'
import { EmptyRepository } from './components/empty-repository'
import { RemoveRepositoryModal } from './modals/remove-repository-modal'

interface MetricNumberProp {
  loading: boolean
  metric: number
}

const MetricNumber: React.FC<MetricNumberProp> = ({ loading, metric }: MetricNumberProp) => {
  return (
    <div>
      {loading ? <Spinner size="sm" /> : metric}
    </div>
  )
}

const RepositoriesView: React.FC = () => {
  const [{ showAddRepositoryModal, showRemoveRepositoryModal }] = useRepositoriesContext()
  const { showTable, loading, data, showBanner } = useRepos(true)

  const [repos, setRepos] = useState<Array<RepoDataPropsT>>()
  const [metrics, setMetrics] = useState<RepoMetrics>()

  useEffect(() => {
    const { repos, metrics } = mapToRepoData(data)
    setRepos(repos)
    setMetrics(metrics)
  }, [data])

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
          <div className='md_grid md_grid-cols-3 gap-6 space-y-4 md_space-y-0 mb-8'>
            <Stat className='shadow-sm w-full'>
              <Stat.Left>
                <Stat.Label>Total repos</Stat.Label>
                <Stat.Number>
                  <MetricNumber loading={loading} metric={data?.allRepos?.totalCount || 0} />
                </Stat.Number>
              </Stat.Left>
              <Stat.Right>
                <ColoredBox size='12'><RepositoryIcon className='t-icon t-icon-default' /></ColoredBox>
              </Stat.Right>
            </Stat>
            <Stat className='shadow-sm w-full'>
              <Stat.Left>
                <Stat.Label>Total repo syncs</Stat.Label>
                <Stat.Number>
                  <MetricNumber loading={loading} metric={metrics?.totalRepoSyncs || 0} />
                </Stat.Number>
              </Stat.Left>
              <Stat.Right>
                <ColoredBox size='12'><TableIcon className='t-icon t-icon-default' /></ColoredBox>
              </Stat.Right>
            </Stat>
            <Stat className='shadow-sm w-full'>
              <Stat.Left>
                <Stat.Label>Total syncs with errors</Stat.Label>
                <Stat.Number>
                  <div className='flex space-x-1.5 items-center'>
                    {metrics && metrics?.totalRepoSyncsError > 0 && <CircleErrorFilledIcon className='t-icon t-icon-danger' />}
                    <MetricNumber loading={loading} metric={metrics?.totalRepoSyncsError || 0} />
                  </div>
                </Stat.Number>
              </Stat.Left>
              <Stat.Right>
                <ColoredBox size='12'><CircleErrorIcon className='t-icon t-icon-default' /></ColoredBox>
              </Stat.Right>
            </Stat>
          </div>
        }

        {showTable && <FilterHeader />}

        {loading
          ? <Loading />
          : showTable
            ? <>
              {/* Repo table */}
              <RepositoriesTable repos={repos || []} />
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
