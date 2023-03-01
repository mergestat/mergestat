import { Tabs } from '@mergestat/blocks'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { RepoSyncData } from 'src/@types'
import { useRepositoriesContext } from 'src/state/contexts'
import { TEST_IDS } from 'src/utils/constants'
import { RemoveRepositoryModal } from '../repositories/modals/remove-repository-modal'
import { PageHeader, RepoSettings, SyncTypesTable } from './components'

type RepoDataViewProps = {
  data?: RepoSyncData
  children?: React.ReactNode
}

const RepoDataView = ({ data }: RepoDataViewProps) => {
  const [{ showRemoveRepositoryModal }] = useRepositoriesContext()
  const router = useRouter()

  useEffect(() => {
    !data?.id && router.push('/repos')
  }, [data, router])

  return (
    <>
      <PageHeader name={data?.name || ''} vendor={data?.provider.vendor || ''} vendorUrl={data?.provider.url} />
      <Tabs.Group>
        <Tabs.List className="bg-white w-full justify-between px-8 items-center border-b border-gray-200">
          <Tabs.Item className="ring-transparent focus_ring-transparent">
            Sync Types
          </Tabs.Item>
          <Tabs.Item data-testid={TEST_IDS.removeRepoSettingsTab}>Repo Settings</Tabs.Item>
        </Tabs.List>
        <Tabs.Panels className="p-8 flex-1 overflow-auto">
          <Tabs.Panel>
            <SyncTypesTable repoId={data?.id || ''} data={data?.syncs || []} />
          </Tabs.Panel>
          <Tabs.Panel>
            <RepoSettings
              id={data?.id || ''}
              name={data?.name || ''}
              tags={data?.tags || []}
              autoImported={!!data?.autoImportFrom}
            />
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Group>
      {showRemoveRepositoryModal && <RemoveRepositoryModal />}
    </>
  )
}

export default RepoDataView
