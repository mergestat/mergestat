import { LogBox, Panel } from '@mergestat/blocks'
import React from 'react'
import { SyncLogsType, SyncTypeData } from 'src/@types'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { copyArrayToClipboard } from 'src/utils'
import { SYNC_STATUS } from 'src/utils/constants'
import { LogsInfo } from './components'

const RepoDataLogsDetailsView: React.FC<SyncTypeData> = ({ repo, sync, logs }) => {
  const logInfo: SyncLogsType | undefined = logs && logs.length > 0 ? logs[0] : undefined

  return (
    <main className="w-full bg-gray-50 h-full flex flex-col overflow-hidden">
      <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
        <div className="text-xl font-semibold flex items-center space-x-1">
          <RepoSyncIcon type={logInfo?.syncType || SYNC_STATUS.empty} />
          <span>{logInfo?.syncStartText || ''}</span>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-8 space-y-8">
        <LogsInfo id={logInfo?.id || ''} syncStart={logInfo?.syncStart || ''} duration={logInfo?.duration || ''} />
        {logInfo?.logs?.length
          ? <LogBox logs={logInfo?.logs || []} onCopy={() => copyArrayToClipboard(logInfo?.logs)} />
          : (
            <Panel>
              <Panel.Body className="flex items-center justify-center py-8">
                <span className='t-text-muted text-sm'>No log entries yet</span>
              </Panel.Body>
            </Panel>)}
      </div>
    </main>
  )
}

export default RepoDataLogsDetailsView
