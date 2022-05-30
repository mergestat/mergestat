import { Tabs } from '@mergestat/blocks'
import { CaretUpIcon, ExternalLinkIcon } from '@mergestat/icons'
import React from 'react'
import {
  PageHeader,
  RepositorySettings,
  RepositoryTable,
  TabsHeader,
} from './components'

type RepositoryDetailsViewProps = {
  repoName: string
}
export const RepositoryDetailsView: React.FC<RepositoryDetailsViewProps> = (
  props
) => {
  return (
    <main className="w-full bg-gray-50">
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
        <TabsHeader />
        <Tabs.Panels className="py-4 px-6">
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
