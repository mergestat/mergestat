import { Alert, ColoredBox, Spinner, Stat } from '@mergestat/blocks'
import { CircleErrorFilledIcon, CircleErrorIcon, RepositoryIcon, TableIcon } from '@mergestat/icons'
import cx from 'classnames'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { RepoDataPropsT } from 'src/@types'
import { mapToRepoData } from 'src/api-logic/mappers/repo/repos'
import Loading from 'src/components/Loading'
import { useGlobalContext, useGlobalSetState } from 'src/state/contexts'
import { useRepositoriesContext } from 'src/state/contexts/repositories.context'
import useMetrics from 'src/views/hooks/useMetrics'
import useRepos from 'src/views/hooks/useRepos'
import { EmptyData } from '../shared/empty-data'
import { FilterFooter } from '../shared/filter-footer'
import { FilterHeader } from '../shared/filter-header'
import { MetricNumber } from '../shared/metric-number'
import { PageHeader, RepositoriesTable } from './components'
import { RemoveRepositoryModal } from './modals/remove-repository-modal'

const RepositoriesView: React.FC = () => {
  const { setSearchRepos, setRowsRepos, setPageRepos } = useGlobalSetState()
  const [{ showRemoveRepositoryModal }] = useRepositoriesContext()
  const [{ reposFilter: { search, total, rows, page } }] = useGlobalContext()
  const { loading, data, runningImports, failedImports, showReposTable } = useRepos()
  const { loadingAllRepos, allRepos, loadingAllEnabledRepos, enabledRepos, loadingSyncErrors, syncErrors } = useMetrics()
  const [repos, setRepos] = useState<Array<RepoDataPropsT>>()

  useEffect(() => {
    setRepos(mapToRepoData(data))
  }, [data, showReposTable])

  return (
    <>
      <PageHeader />
      <div className={cx('flex-1 flex flex-col overflow-auto', { 'h-full': !showReposTable })}>
        <div className='p-8'>
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
                  <li key={`failed-imports-${index}`}><Link href={'/repos/repo-auto-imports'}><span className='font-bold cursor-pointer'>{`${imp.name} `}</span></Link>{`${imp.type}: ${imp.error}`}</li>
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
                  <li key={`running-imports-${index}`}><b>{`${imp.name} `}</b>{`${imp.type}`}</li>
                ))}
              </span>
            </Alert>}

          {/* Metrics */}
          {showReposTable &&
            <div className='md_grid md_grid-cols-3 gap-6 space-y-4 md_space-y-0'>
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
        </div>

        {showReposTable && <div className='border-t pt-3'><FilterHeader initValue={search} setSearch={setSearchRepos} /></div>}

        {loading
          ? <Loading />
          : showReposTable
            ? <RepositoriesTable repos={repos || []} />
            : <EmptyData message='No repos yet' icon={<RepositoryIcon className="t-icon" />} />
        }
      </div>

      {showReposTable && <FilterFooter total={total} rows={rows} page={page} setRows={setRowsRepos} setPage={setPageRepos} />}

      {showRemoveRepositoryModal && <RemoveRepositoryModal />}
    </>
  )
}

export default RepositoriesView
