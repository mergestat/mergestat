import { Button, EditableText, Tabs, Toolbar } from '@mergestat/blocks'
import { ChangeEvent } from 'react'
import { getGitSourceIcon } from 'src/utils'
import useGitSourceDetail from 'src/views/hooks/gitSources/useGitSourceDetail'
import useGitSourceUpdate from 'src/views/hooks/gitSources/useGitSourceUpdate'
import useGitSourceCrumb from 'src/views/hooks/gitSourcesContainers/useGitSourceCrumb'
import GitSourceOverviewTab from './tabs/overview'
import GitSourceSettingsTab from './tabs/settings'

type GitSourceDetailView = {
  gitSourceId?: string | string[]
}

const GitSourceDetailView: React.FC<GitSourceDetailView> = ({ gitSourceId }: GitSourceDetailView) => {
  useGitSourceDetail(gitSourceId)
  useGitSourceCrumb()

  const { vendor, nameGS, descriptionGS, setNameGS, setDescriptionGS, updateGitSource } = useGitSourceUpdate()

  return (
    <div className='flex flex-col h-full overflow-hidden'>
      <Toolbar className='bg-white px-8 pt-4'>
        <Toolbar.Left className='flex-grow'>
          <EditableText
            className='flex-grow mr-5'
            icon={getGitSourceIcon(vendor || '')}
            title={{
              value: nameGS || '',
              onChange: (e: ChangeEvent<HTMLInputElement>) => setNameGS(e.target.value)
            }}
            desc={{
              value: descriptionGS || '',
              placeholder: 'This is a short description',
              onChange: (e: ChangeEvent<HTMLInputElement>) => setDescriptionGS(e.target.value)
            }}
          />
        </Toolbar.Left>
        <Toolbar.Right className='flex-none'>
          <Button
            className='whitespace-nowrap justify-center'
            label='Save'
            skin="secondary"
            onClick={updateGitSource}
          />
        </Toolbar.Right>
      </Toolbar>

      <div className='flex flex-col flex-1 overflow-hidden'>
        <Tabs>
          <Tabs.List className='border-b px-8 bg-white'>
            <Tabs.Item>Overview</Tabs.Item>
            {/* <Tabs.Item>Default Repo Syncs</Tabs.Item> */}
            <Tabs.Item>Settings</Tabs.Item>
          </Tabs.List>
          <Tabs.Panels className="bg-gray-50 flex-1 overflow-auto">
            <Tabs.Panel className='p-8'>
              <GitSourceOverviewTab />
            </Tabs.Panel>
            {/* <Tabs.Panel className='p-0 h-full flex flex-col'>
              <DefaultRepoSyncsProvider>
                <DefaultRepoSyncs />
              </DefaultRepoSyncsProvider>
            </Tabs.Panel> */}
            <Tabs.Panel className='p-8'>
              <GitSourceSettingsTab />
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </div>
    </div>
  )
}

export default GitSourceDetailView
