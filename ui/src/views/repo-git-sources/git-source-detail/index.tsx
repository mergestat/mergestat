import { Button, EditableText, Tabs, Toolbar } from '@mergestat/blocks'
import { TrashIcon } from '@mergestat/icons'
import { ChangeEvent, useEffect, useState } from 'react'
import { useGitSourceDetailContext } from 'src/state/contexts/git-source-detail.context'
import { getGitSourceIcon } from 'src/utils'
import useGitSourceCrumb from 'src/views/hooks/gitSources/useGitSourceCrumb'
import useGitSourceDetail from 'src/views/hooks/gitSources/useGitSourceDetail'
import GitSourceOverviewTab from './tabs/overview'

type GitSourceDetailView = {
  gitSourceId?: string | string[]
}

const GitSourceDetailView: React.FC<GitSourceDetailView> = ({ gitSourceId }: GitSourceDetailView) => {
  useGitSourceDetail(gitSourceId)
  useGitSourceCrumb()

  const [{ gsDetail: { name, description, vendor } }] = useGitSourceDetailContext()

  const [nameGS, setNameGS] = useState('')
  const [descriptionGS, setDescriptionGS] = useState('')

  useEffect(() => {
    setNameGS(name || '')
    setDescriptionGS(description || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, description])

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
            skin='borderless-muted'
            startIcon={<TrashIcon className='t-icon' />}
            onClick={() => null}
            isIconOnly
          />
        </Toolbar.Right>
      </Toolbar>

      <div className="flex-1 w-full bg-white">
        <Tabs>
          <Tabs.List className='border-b px-8'>
            <Tabs.Item>Overview</Tabs.Item>
          </Tabs.List>
          <Tabs.Panels className="p-8 pb-16 bg-gray-50">
            <Tabs.Panel>
              <GitSourceOverviewTab />
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </div>
    </div>
  )
}

export default GitSourceDetailView
