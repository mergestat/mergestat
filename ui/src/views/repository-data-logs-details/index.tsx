import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BreadcrumbNav, Button, LogBox } from '@mergestat/blocks'
import { DotsHorizontalIcon, ExternalLinkIcon } from '@mergestat/icons'
import { SyncTypeData } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'

import { LogsInfo } from './components'
import { GITHUB_URL } from 'src/utils/constants'

const RepoDataLogsDetailsView: React.FC<SyncTypeData> = ({ repo, sync, logs }) => {
  const router = useRouter()
  const logInfo = logs && logs.length > 0 ? logs[0] : undefined

  const crumbs = [
    {
      text: "Repos",
      onClick: () => router.push('/repos'),
    },
    {
      text: repo.name,
      startIcon: <RepoImage repoType={repo.type} orgName={repo.name.split('/')[0]} />,
      endIcon: (
        <Link href={repo.type === 'github' ? GITHUB_URL + repo.name : repo.name}>
          <a target='_blank'>
            <ExternalLinkIcon className='t-icon t-icon-small' />
          </a>
        </Link>
      ),
      onClick: () => router.push(`/repos/${repo.id}`),
    },
    {
      text: sync?.title || '',
      startIcon: <RepoSyncIcon type={sync?.syncState || 'empty'} />,
      onClick: () => router.push(`/repos/${repo.id}/${sync?.id}`),
    },
    {
      text: logInfo?.syncType || '',
      startIcon: <RepoSyncIcon type={logInfo?.syncType || 'empty'} />,
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
        <LogBox logs={logInfo?.logs || []} onCopy={() => { }} />
      </div>
    </main>
  )
}

export default RepoDataLogsDetailsView
