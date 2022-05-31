import { Tabs } from '@mergestat/blocks'
import { CaretUpIcon, ExternalLinkIcon } from '@mergestat/icons'
import React from 'react'
import {
  PageHeader,
  RepositorySettings,
  RepositoryTable,
} from './components'

type RepositoryDetailsViewProps = {
  repoName: string
}
export const RepositoryDetailsView: React.FC<RepositoryDetailsViewProps> = (
  props
) => {
  return (
    <main className="w-full bg-gray-100">
      <PageHeader
        repo={{
          startIcon: (
            <div className="t-black-white">
              <CaretUpIcon className="t-icon" />
            </div>
          ),
          text: props.repoName,
          endIcon: <ExternalLinkIcon className="t-icon t-gray" />,
        }}
      />
      <Tabs.Group>
        <Tabs.List className="bg-white w-full justify-between px-8 items-center border-b border-gray-200">
          <Tabs.Item className="ring-transparent focus_ring-transparent">
            Sync Types
          </Tabs.Item>
          <Tabs.Item>Repo Settings</Tabs.Item>
        </Tabs.List>
        <Tabs.Panels className="p-6">
          <Tabs.Panel>
            <RepositoryTable />
          </Tabs.Panel>
          <Tabs.Panel>
            <RepositorySettings />
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs.Group>

      {/*false && <EmptyRepositoryTable />*/}
      {/*true && */}
    </main>
  )
}
