import { Button, Spinner, Tabs, Toolbar } from '@mergestat/blocks'
import { ClockIcon, RefreshIcon } from '@mergestat/icons'
import React from 'react'
import { SyncTypeData } from 'src/@types'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { SYNC_STATUS } from 'src/utils/constants'
import { RepoDataLogs, SyncSettings } from './components'

const RepoDataTypeView: React.FC<SyncTypeData> = ({ sync, logs, syncNow }) => {
  return (
    <main className="w-full h-full bg-gray-50 flex flex-col overflow-hidden">
      <Tabs>
        <div className="bg-white">
          <Toolbar className="px-8 py-4 border-b">
            <Toolbar.Left>
              <Toolbar.Item>
                <div className="text-xl font-semibold flex items-center space-x-1">
                  <RepoSyncIcon type={sync?.syncState || SYNC_STATUS.empty} />
                  <span>{sync?.title || ''}</span>
                </div>
              </Toolbar.Item>
            </Toolbar.Left>
            <Toolbar.Right>
              <Toolbar.Item>
                <Button
                  className="ml-3"
                  startIcon={sync?.syncState === SYNC_STATUS.queued
                    ? <ClockIcon className='t-icon' />
                    : sync?.syncState === SYNC_STATUS.running
                      ? <Spinner size='sm' className='mr-2' />
                      : <RefreshIcon className="t-icon" />
                  }
                  disabled={sync?.syncState === SYNC_STATUS.queued || sync?.syncState === SYNC_STATUS.running}
                  onClick={syncNow}
                >
                  Sync Now
                </Button>
              </Toolbar.Item>
            </Toolbar.Right>
          </Toolbar>

          <Tabs.List className="bg-white w-full px-8">
            <Tabs.Item>
              Logs
            </Tabs.Item>
            <Tabs.Item>
              Sync Settings
            </Tabs.Item>
          </Tabs.List>
        </div>
        <Tabs.Panels className="p-8 overflow-auto flex-1">
          <Tabs.Panel>
            <RepoDataLogs syncData={sync} logs={logs} />
          </Tabs.Panel>
          <Tabs.Panel>
            <SyncSettings />
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </main>
  )
}

export default RepoDataTypeView
