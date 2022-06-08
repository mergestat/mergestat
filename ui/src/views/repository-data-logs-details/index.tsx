import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BreadcrumbNav, Button, LogBox } from '@mergestat/blocks'
import { DotsHorizontalIcon, ExternalLinkIcon } from '@mergestat/icons'
import type { RepoType, RepSyncStateT, SyncLogsType } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'

import { LogsInfo } from './components'

export type RepoDataLogsDetailsProps = {
  repoData: {
    name: string
    type: RepoType
  },
  syncData: {
    title: string
    syncState: RepSyncStateT,
  },
  data: SyncLogsType,
}

const RepoDataLogsDetailsView: React.FC<RepoDataLogsDetailsProps> =
  (props) => {
    const router = useRouter()
    const { repoData, syncData, data } = props

    const crumbs = [
      {
        text: "Repo",
        onClick: () => router.push('/repos'),
      },
      {
        text: repoData.name,
        startIcon: <RepoImage repoType={repoData.type} orgName={repoData.name.split('/')[0]} />,
        endIcon: (
          <Link href={repoData.type === 'github' ? 'https://github.com/' + repoData.name : repoData.name}>
            <a target='_blank'>
              <ExternalLinkIcon className='t-icon' />
            </a>
          </Link>
        ),
        onClick: () => router.push('/repos/' + repoData.name.replace(/\//g, '-')),
      },
      {
        text: syncData.title,
        startIcon: <RepoSyncIcon type={syncData.syncState} />,
        onClick: () => router.push(`/repos/${repoData.name.replace(/\//g, '-')}/${syncData.title.replace(/ /g, '-')}`),
      },
      {
        text: data.title,
        startIcon: <RepoSyncIcon type={data.syncType} />,
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
          <LogsInfo id={data.id} syncStart={data.syncStart} duration={data.syncStart} />
          <LogBox logs={data.logs || []} onCopy={() => {}} />
        </div>
      </main>
    )
  }

export default RepoDataLogsDetailsView
