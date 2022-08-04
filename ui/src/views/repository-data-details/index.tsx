import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BreadcrumbNav, Button, Tabs, Toolbar } from '@mergestat/blocks'
import { DotsHorizontalIcon, ExternalLinkIcon, RefreshIcon } from '@mergestat/icons'
import { SyncTypeData } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { RepoDataLogs, SyncSettings } from './components'
import { GITHUB_URL } from 'src/utils/constants'

const RepoDataTypeView: React.FC<SyncTypeData> = ({ repo, sync, logs }) => {
  const router = useRouter()
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
      startIcon: <RepoSyncIcon type={sync?.syncState || 'empty'} />
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
