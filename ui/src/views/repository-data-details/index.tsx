import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BreadcrumbNav, Button, Tabs, Toolbar } from '@mergestat/blocks'
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
      text: "Repositories",
      onClick: () => router.push('/repos'),
    },
    {
      text: repoData.name,
      startIcon: <RepoImage repoType={repoData.type} orgName={repoData.name.split('/')[0]} />,
      endIcon: (
        <Link href={repoData.type === 'github' ? 'https://github.com/' + repoData.name : repoData.name}>
          <a target='_blank'>
            <ExternalLinkIcon className='t-icon t-icon-small' />
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
    <main className="w-full h-full bg-gray-50 flex flex-col overflow-hidden">
      <Tabs>
        <div className="bg-white">
          <Toolbar className="px-8 py-4 border-b">
            <Toolbar.Left>
              <Toolbar.Item>
                <div className="text-xl font-semibold">
                  <BreadcrumbNav data={crumbs} />
                </div>
              </Toolbar.Item>
            </Toolbar.Left>
            <Toolbar.Right>
              <Toolbar.Item>
                <Button
                  skin="secondary"
                  isIconOnly
                  startIcon={<DotsHorizontalIcon className="t-icon" />}
                />
                <Button
                  startIcon={<RefreshIcon className="t-icon" />}
                  className="ml-3"
                >
                  Sync Now
                </Button>
              </Toolbar.Item>
            </Toolbar.Right>
          </Toolbar>

          <Tabs.List className="bg-white w-full px-8">
            <Tabs.Item className="">
              Logs
            </Tabs.Item>
            <Tabs.Item className="">
              Sync Settings
            </Tabs.Item>
          </Tabs.List>
        </div>
        <Tabs.Panels className="p-8 overflow-auto flex-1">
          <Tabs.Panel>
            <RepoDataLogs data={data.data} />
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
