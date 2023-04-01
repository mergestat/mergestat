import { Button, ListItem, Toolbar } from '@mergestat/blocks'
import { PencilIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
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
  const router = useRouter()
  useContainerSyncCrumb(repo)

  const {
    loading, repoData: { sync, logs }, addSchedule, removeSchedule, syncNow,
    rows, page, total, setRows, setPage
  } = useContainerSyncsLogs()

  return (
    <>
      {loading
        ? <Loading />
        : <>
          <div className="bg-white">
            <Toolbar className="px-8 py-4 border-b">
              <Toolbar.Left>
                <Toolbar.Item>
                  <div className='flex items-center'>
                    <div className='ml-2 mr-6'>
                      <RepoSyncIcon type={sync?.syncState || SYNC_STATUS.empty} />
                    </div>
                    <ListItem
                      title={sync?.name || ''}
                      subline={sync?.description}
                    />
                  </div>
                </Toolbar.Item>
              </Toolbar.Left>
              <Toolbar.Right>
                <Toolbar.Item>
                  <Button
                    label='Edit Sync'
                    skin='secondary'
                    startIcon={<PencilIcon className='t-icon' />}
                    onClick={() => router.push(`/repos/repo-syncs/${sync?.imageId}`)}
                  />
                </Toolbar.Item>
              </Toolbar.Right>
            </Toolbar>
          </div>

          <SyncSettings sync={sync} addSchedule={addSchedule} removeSchedule={removeSchedule} syncNow={syncNow} />

          <LogsTable logs={logs || []} />
          <FilterFooter total={total} rows={rows} page={page} setRows={setRows} setPage={setPage} />
        </>
      }
    </>
  )
}

export default ContainerSyncsDataView
