import { Tabs } from '@mergestat/blocks'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { RepoSyncData } from 'src/@types'
import { RepositoriesProvider } from 'src/state/contexts'
import { RepoSyncsProvider } from 'src/state/contexts/repo-syncs.context'
import { TEST_IDS } from 'src/utils/constants'
import { PageHeader } from './components'
import { RepoSettings, RepoSyncs } from './tabs'

type RepoDataViewProps = {
  data?: RepoSyncData
  children?: React.ReactNode
}

const RepoDataView = ({ data }: RepoDataViewProps) => {
  const router = useRouter()

  useEffect(() => {
    !data?.id && router.push('/repos-containers')
  }, [data, router])

  return (
    <>
      <PageHeader name={data?.name || ''}
        vendor={data?.provider.vendor || ''}
        vendorUrl={data?.provider.url}
        externalRepoLink={data?.externalRepoLink}
      />
      <Tabs.Group>
        <Tabs.List className="bg-white w-full justify-between px-8 items-center border-b border-gray-200">
          <Tabs.Item className="ring-transparent focus_ring-transparent">
            Repo Syncs
          </Tabs.Item>
          <Tabs.Item data-testid={TEST_IDS.removeRepoSettingsTab}>Repo Settings</Tabs.Item>
        </Tabs.List>
        <Tabs.Panels className="flex-1 overflow-auto">
          <Tabs.Panel className='h-full'>
            <RepoSyncsProvider>
              <RepoSyncs />
            </RepoSyncsProvider>
          </Tabs.Panel>
          <Tabs.Panel>
            <RepositoriesProvider>
              <RepoSettings
                id={data?.id || ''}
                name={data?.name || ''}
                tags={data?.tags || []}
                autoImported={!!data?.autoImportFrom}
              />
            </RepositoriesProvider>
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Group>
    </>
  )
}

export default RepoDataView
