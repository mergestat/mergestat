import { Button, Spinner, Tabs, Toolbar } from '@mergestat/blocks'
import { ClockIcon, ExternalLinkIcon, RefreshIcon, RepositoryIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SyncTypeData } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { useGlobalSetState } from 'src/state/contexts'
import { GITHUB_URL, SYNC_STATUS } from 'src/utils/constants'
import { RepoDataLogs, SyncSettings } from './components'

const RepoDataTypeView: React.FC<SyncTypeData> = ({ repo, sync, logs, syncNow }) => {
  const router = useRouter()
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
    ]

    setCrumbs(crumbs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Tabs>
        <div className="bg-white">
          <Toolbar className="px-8 py-4 border-b">
            <Toolbar.Left>
              <Toolbar.Item>
                <div className="text-xl font-semibold flex items-center space-x-1">
                  <RepoSyncIcon type={sync?.syncState || SYNC_STATUS.empty} />
                  <span className='pl-1'>{sync?.title || ''}</span>
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
    </>
  )
}

export default RepoDataTypeView
