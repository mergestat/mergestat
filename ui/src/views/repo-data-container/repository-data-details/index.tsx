import { Button, Spinner, Toolbar } from '@mergestat/blocks'
import { ClockIcon, RefreshIcon } from '@mergestat/icons'
import React from 'react'
import { ContainerBasicData } from 'src/@types'
import Loading from 'src/components/Loading'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { SYNC_STATUS } from 'src/utils/constants'
import useContainerSyncCrumb from 'src/views/hooks/repoContainerSyncs/useContainerSyncCrumb'
import useContainerSyncsLogs from 'src/views/hooks/repoContainerSyncs/useContainerSyncsLogs'
import { FilterFooter } from 'src/views/shared/filter-footer'
import { SyncSettings } from './components'
import { LogsTable } from './components/logs-table'

const ContainerSyncsDataView: React.FC<ContainerBasicData> = ({ repo }) => {
  useContainerSyncCrumb(repo)

  const {
    loading, repoData: { sync, logs }, addSchedule, removeSchedule, syncNow,
    rows, page, total, setRows, setPage
  } = useContainerSyncsLogs()

  return (
    <>
      <div className='flex flex-col flex-1 overflow-hidden'>
        {loading
          ? <Loading />
          : <>
            <div className="bg-white">
              <Toolbar className="px-8 py-4 border-b">
                <Toolbar.Left>
                  <Toolbar.Item>
                    <div className='flex items-center space-x-5'>
                      <RepoSyncIcon type={sync?.syncState || SYNC_STATUS.empty} />
                      <div className='space-y-1'>
                        <h3 className='t-h2 mb-0'>{sync?.name || ''}</h3>
                        <p className='t-text-muted text-sm'>{sync?.description}</p>
                      </div>
                    </div>
                  </Toolbar.Item>
                </Toolbar.Left>
                <Toolbar.Right>
                  <Toolbar.Item>
                      <Button
                      className="ml-3"
                      label='Sync Now'
                      startIcon={sync?.syncState === SYNC_STATUS.queued
                        ? <ClockIcon className='t-icon' />
                        : sync?.syncState === SYNC_STATUS.running
                          ? <Spinner size='sm' className='mr-2' />
                          : <RefreshIcon className="t-icon" />
                      }
                      disabled={sync?.syncState === SYNC_STATUS.queued || sync?.syncState === SYNC_STATUS.running}
                      onClick={() => syncNow({ variables: { sync: `${sync?.id}` } })}
                    />
                  </Toolbar.Item>
                </Toolbar.Right>
              </Toolbar>
            </div>

            <div className='flex-1 w-full overflow-auto'>
              <SyncSettings sync={sync} addSchedule={addSchedule} removeSchedule={removeSchedule} syncNow={syncNow} />
              <LogsTable logs={logs || []} />
            </div>

            <FilterFooter total={total} rows={rows} page={page} setRows={setRows} setPage={setPage} />
          </>
        }
      </div>
    </>
  )
}

export default ContainerSyncsDataView
