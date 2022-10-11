import { BreadcrumbNav, Button, Tabs, Toolbar } from '@mergestat/blocks'
import { ExternalLinkIcon, RefreshIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React from 'react'
import { SyncTypeData } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { GITHUB_URL, SYNC_STATUS } from 'src/utils/constants'
import { RepoDataLogs, SyncSettings } from './components'

const RepoDataTypeView: React.FC<SyncTypeData> = ({ repo, sync, logs, syncNow }) => {
  const router = useRouter()
  const repoName = repo.name.split('/')[0]

  const crumbs = [
    {
      text: 'Repos',
      onClick: () => router.push('/repos'),
    },
    {
      text: repo.name,
      startIcon: <RepoImage repoType={repo.type} orgName={repoName} />,
      endIcon: (
        <a target="_blank" href={repo.type === 'github' ? GITHUB_URL + repoName : repoName} rel="noopener noreferrer">
          <ExternalLinkIcon className='t-icon t-icon-small' />
        </a>
      ),
      onClick: () => router.push(`/repos/${repo.id}`),
    },
    {
      text: sync?.title || '',
      startIcon: <RepoSyncIcon type={sync?.syncState || SYNC_STATUS.empty} />
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
                  startIcon={<RefreshIcon className="t-icon" />}
                  className="ml-3"
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
