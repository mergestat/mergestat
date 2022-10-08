import { BreadcrumbNav, Button, LogBox, Panel } from '@mergestat/blocks'
import { DotsHorizontalIcon, ExternalLinkIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React from 'react'
import { SyncLogsType, SyncTypeData } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { GITHUB_URL, SYNC_STATUS } from 'src/utils/constants'
import { LogsInfo } from './components'

const RepoDataLogsDetailsView: React.FC<SyncTypeData> = ({ repo, sync, logs }) => {
  const router = useRouter()
  const logInfo: SyncLogsType | undefined = (logs != null) && logs.length > 0 ? logs[0] : undefined
  const repoName = repo.name.split('/')[0]

  const crumbs = [
    {
      text: 'Repos',
      onClick: async () => await router.push('/repos'),
    },
    {
      text: repo.name,
      startIcon: <RepoImage repoType={repo.type} orgName={repoName} />,
      endIcon: (
        <a target='_blank' href={repo.type === 'github' ? GITHUB_URL + repoName : repoName} rel="noopener noreferrer">
          <ExternalLinkIcon className='t-icon t-icon-small' />
        </a>
      ),
      onClick: async () => await router.push(`/repos/${repo.id}`),
    },
    {
      text: sync?.title || '',
      startIcon: <RepoSyncIcon type={sync?.syncState || SYNC_STATUS.empty} />,
      onClick: async () => await router.push(`/repos/${repo.id}/${sync?.id}`),
    },
    {
      text: logInfo?.syncStartText || '',
      startIcon: <RepoSyncIcon type={logInfo?.syncType || SYNC_STATUS.empty} />,
    }
  ]

  return (
    <main className="w-full bg-gray-50 h-full flex flex-col overflow-hidden">
      <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
        <div className="text-xl font-semibold">
          <BreadcrumbNav data={crumbs} />
        </div>
        <div className="flex gap-3">
          <Button
            skin="secondary"
            isIconOnly
            startIcon={<DotsHorizontalIcon className="t-icon" />}
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto p-8 space-y-8">
        <LogsInfo id={logInfo?.id || ''} syncStart={logInfo?.syncStart || ''} duration={logInfo?.duration || ''} />
        {logInfo?.logs?.length
          ? <LogBox logs={logInfo?.logs || []} onCopy={() => null} />
          : (
            <Panel>
              <Panel.Body className="flex items-center justify-center py-8">
                <span className='text-semantic-mutedText text-sm'>No log entries yet</span>
              </Panel.Body>
            </Panel>)}
      </div>
    </main>
  )
}

export default RepoDataLogsDetailsView
