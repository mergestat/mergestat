import { useRepositoriesContext } from 'src/state/contexts/repositories.context'
import Link from 'next/link'
import { EmptyRepositoryTable, FilterHeader, PageHeader, RepositoriesTable } from './components'
import { AddRepositoryModal } from './modals/add-repository-modal'

import { Alert, ColoredBox, Spinner, Stat } from '@mergestat/blocks'
import { CircleErrorFilledIcon, CircleErrorIcon, RepositoryIcon, TableIcon } from '@mergestat/icons'
import { useEffect, useState } from 'react'
import { RepoDataPropsT } from 'src/@types'
import { mapToRepoData } from 'src/api-logic/mappers/repos'
import Loading from 'src/components/Loading'
import useMetrics from 'src/views/hooks/useMetrics'
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
      {loading ? <Spinner size="sm" /> : new Intl.NumberFormat().format(metric)}
    </div>
  )
}

const RepositoriesView: React.FC = () => {
  const [{ showAddRepositoryModal, showRemoveRepositoryModal }] = useRepositoriesContext()
  const { showTable, loading, data, runningImports, failedImports } = useRepos()
  const { loadingAllRepos, allRepos, loadingAllEnabledRepos, enabledRepos, loadingSyncErrors, syncErrors } = useMetrics()

  const [repos, setRepos] = useState<Array<RepoDataPropsT>>()

  useEffect(() => {
    setRepos(mapToRepoData(data))
  }, [data])

  return (
    <main className='w-full flex flex-col h-full bg-gray-50 overflow-hidden'>
      <PageHeader />
      <div className='flex-1 items-center p-8 overflow-auto'>
        {failedImports.length > 0 &&
          <Alert
            type='error'
            theme='light'
            icon={<CircleErrorFilledIcon className="mt-1 t-icon t-icon-danger" />}
            title={(<div><span>Auto import error</span></div>)}
            className='mb-6'
          >
            <span className='flex flex-col'>
              {failedImports.map((imp, index) => (
                <li key={`failed-imports-${index}`}><Link href={'/settings/repo-auto-imports'}><span className='font-bold cursor-pointer'>{`${imp.name} `}</span></Link>{`(${imp.type}): ${imp.error}`}</li>
              ))}
            </span>
          </Alert>}

        {runningImports.length > 0 &&
          <Alert
            type='info'
            theme='light'
            icon={<Spinner size='sm' className='mt-1' />}
            title={(<div><span>Auto importing repos</span></div>)}
            className='mb-6'
          >
            <span className='flex flex-col'>
              {runningImports.map((imp, index) => (
                <li key={`running-imports-${index}`}><b>{`${imp.name} `}</b>{`(${imp.type})`}</li>
              ))}
            </span>
          </Alert>}

        {/* Metrics */}
        {showTable &&
          <div className='md_grid md_grid-cols-3 gap-6 space-y-4 md_space-y-0 mb-8'>
            <Stat className='shadow-sm w-full'>
              <Stat.Left>
                <Stat.Label>Total repos</Stat.Label>
                <Stat.Number>
                  <MetricNumber loading={loadingAllRepos} metric={allRepos || 0} />
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
                  <MetricNumber loading={loadingAllEnabledRepos} metric={enabledRepos || 0} />
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
                    {syncErrors > 0 && <CircleErrorFilledIcon className='t-icon t-icon-danger' />}
                    <MetricNumber loading={loadingSyncErrors} metric={syncErrors || 0} />
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
