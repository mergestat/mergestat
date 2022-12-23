import { LogBox, Panel } from '@mergestat/blocks'
import { ExternalLinkIcon, RepositoryIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SyncLogsType, SyncTypeData } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { useGlobalSetState } from 'src/state/contexts'
import { copyArrayToClipboard } from 'src/utils'
import { GITHUB_URL, SYNC_STATUS } from 'src/utils/constants'
import { LogsInfo } from './components'

const RepoDataLogsDetailsView: React.FC<SyncTypeData> = ({ repo, sync, logs }) => {
  const router = useRouter()
  const logInfo: SyncLogsType | undefined = logs && logs.length > 0 ? logs[0] : undefined
  const repoOwnerName = repo.name.split('/')[0]
  const repoName = repo.name.split('/')[1]

  const { setCrumbs } = useGlobalSetState()

  useEffect(() => {
    const crumbs = [
      {
        text: 'Repos',
        startIcon: <RepositoryIcon className='t-icon t-icon-default' />,
        onClick: () => router.push('/repos'),
      },
      {
        text: repo.name,
        startIcon: <RepoImage repoType={repo.type} orgName={repoOwnerName} size="6" />,
        endIcon: (
          <a target="_blank" href={repo.type === 'github' ? `${GITHUB_URL + repoOwnerName}/${repoName}` : repo.name} rel="noopener noreferrer">
            <ExternalLinkIcon className='t-icon t-icon-muted t-icon-small' />
          </a>
        ),
        onClick: () => router.push(`/repos/${repo.id}`),
      },
      {
        text: sync?.title || '',
        startIcon: <RepoSyncIcon type={sync?.syncState || SYNC_STATUS.empty} />,
        onClick: () => router.push(`/repos/${repo.id}/${sync?.id}`),
      },
    ]

    setCrumbs(crumbs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="w-full bg-gray-50 h-full flex flex-col overflow-hidden">
      <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
        <div className="text-xl font-semibold flex items-center space-x-1">
          <RepoSyncIcon type={logInfo?.syncType || SYNC_STATUS.empty} />
          <span className='pl-1'>{logInfo?.syncStartText || ''}</span>
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
