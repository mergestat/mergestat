import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BreadcrumbNav, Button, Tabs } from '@mergestat/blocks'
import {
  DotsHorizontalIcon,
  ExternalLinkIcon,
  RefreshIcon,
} from '@mergestat/icons'
import type { RepoType, RepoSyncDataType } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { RepoDataLogs, SyncSettings } from './components'

export type RepoDataTypeViewPropsT = {
  repoData: {
    name: string,
    type: RepoType
  },
  data: RepoSyncDataType,
}

const RepoDataTypeView: React.FC<RepoDataTypeViewPropsT> = (
  { repoData, data }
) => {
  const router = useRouter()
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
      text: data.data.title,
      startIcon: <RepoSyncIcon type={data.status.syncState} />
    }
  ]

  return (
    <main className="w-full bg-gray-50">
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
          <Button startIcon={<RefreshIcon className="t-icon" />}>
            Sync Now
          </Button>
        </div>
      </div>

      <Tabs.Group>
        <Tabs.List className="bg-white w-full flex justify-between px-8 items-center border-b border-gray-200">
          <Tabs.Item className="">
            Logs
          </Tabs.Item>
          <Tabs.Item className="">
            Sync Settings
          </Tabs.Item>
        </Tabs.List>
        <Tabs.Panels className="p-8">
          <Tabs.Panel>
            <RepoDataLogs data={data.data} />
          </Tabs.Panel>
          <Tabs.Panel>
            <SyncSettings />
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Group>
    </main>
  )
}

export default RepoDataTypeView
