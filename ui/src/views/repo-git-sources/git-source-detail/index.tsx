import { Button, EditableText, Tabs, Toolbar } from '@mergestat/blocks'
import { ChangeEvent } from 'react'
import { getGitSourceIcon } from 'src/utils'
import useGitSourceCrumb from 'src/views/hooks/gitSources/useGitSourceCrumb'
import useGitSourceDetail from 'src/views/hooks/gitSources/useGitSourceDetail'
import useGitSourceUpdate from 'src/views/hooks/gitSources/useGitSourceUpdate'
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
    <div className='flex flex-col flex-1 overflow-auto'>
      <Toolbar className='bg-white px-8 pt-4'>
        <Toolbar.Left>
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
        <Toolbar.Right>
          <Button
            className='whitespace-nowrap justify-center'
            label='Save'
            skin="secondary"
            onClick={updateGitSource}
          />
        </Toolbar.Right>
      </Toolbar>

      <div className="flex-1 w-full bg-white">
        <Tabs>
          <Tabs.List className='border-b px-8'>
            <Tabs.Item>Overview</Tabs.Item>
            <Tabs.Item>Settings</Tabs.Item>
          </Tabs.List>
          <Tabs.Panels className="p-8 pb-16 bg-gray-50 h-full">
            <Tabs.Panel>
              <GitSourceOverviewTab />
            </Tabs.Panel>
            <Tabs.Panel>
              <GitSourceSettingsTab />
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </div>
    </div>
  )
}

export default GitSourceDetailView
