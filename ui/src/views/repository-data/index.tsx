import { Tabs } from '@mergestat/blocks'
import React from 'react'
import { RepoSyncData } from 'src/@types'
import { useRepositoriesContext } from 'src/state/contexts'
import { TEST_IDS } from 'src/utils/constants'
import { EmptyRepositoryTable } from '../repositories/components'
import { EmptyRepository } from '../repositories/components/empty-repository'
import { AddRepositoryModal } from '../repositories/modals/add-repository-modal'
import { RemoveRepositoryModal } from '../repositories/modals/remove-repository-modal'
import { PageHeader, RepoSettings, SycnTypesTable } from './components'

type RepoDataViewProps = {
  data?: RepoSyncData
  children?: React.ReactNode
}

const RepoDataView = ({ data }: RepoDataViewProps) => {
  const [{ showAddRepositoryModal, showRemoveRepositoryModal }] = useRepositoriesContext()

  return (
    <main className="w-full flex flex-col h-full overflow-hidden bg-gray-50">
      {data?.id
        ? <>
          <PageHeader name={data?.name || ''} type={data?.type || 'other'} />
          <Tabs.Group>
            <Tabs.List className="bg-white w-full justify-between px-8 items-center border-b border-gray-200">
              <Tabs.Item className="ring-transparent focus_ring-transparent">
                Sync Types
              </Tabs.Item>
              <Tabs.Item data-testid={TEST_IDS.removeRepoSettingsTab}>Repo Settings</Tabs.Item>
            </Tabs.List>
            <Tabs.Panels className="p-8 flex-1 overflow-auto">
              <Tabs.Panel>
                <SycnTypesTable repoId={data?.id || ''} data={data?.syncs || []} />
              </Tabs.Panel>
              <Tabs.Panel>
                <RepoSettings
                  id={data.id}
                  name={data.name}
                  autoImported={!!data.autoImportFrom}
                />
              </Tabs.Panel>
            </Tabs.Panels>
          </Tabs.Group>
        </>
        : data?.gitHubPat ? <EmptyRepository /> : <EmptyRepositoryTable />
      }
      {showAddRepositoryModal && <AddRepositoryModal />}
      {showRemoveRepositoryModal && <RemoveRepositoryModal />}
    </main>
  )
}

export default RepoDataView
