import { Button, EditableText, Tabs, Toolbar } from '@mergestat/blocks'
import { RepositoryIcon, TrashIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import { GitSourceDetail } from 'src/@types'
import { useGlobalSetState } from 'src/state/contexts'
import { getGitSourceIcon } from 'src/utils'
import GitSourceOverviewTab from './tabs/overview'

type GitSourceDetailViewProps = {
  loading: boolean
  data?: GitSourceDetail
}

const GitSourceDetailView: React.FC<GitSourceDetailViewProps> = ({ loading, data }: GitSourceDetailViewProps) => {
  const { name, description, vendor } = data || {}

  const router = useRouter()
  const { setCrumbs } = useGlobalSetState()

  const [nameGS, setNameGS] = useState('')
  const [descriptionGS, setDescriptionGS] = useState('')

  useEffect(() => {
    const crumbs = [
      {
        text: 'Repos',
        startIcon: <RepositoryIcon className='t-icon t-icon-default' />,
        onClick: () => router.push('/repos'),
      },
      {
        text: 'Git Sources',
        onClick: () => router.push('/repos/git-sources'),
      },
    ]

    setCrumbs(crumbs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setNameGS(name || '')
    setDescriptionGS(description || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
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
          <Tabs.Panels className="p-8 h-full bg-gray-50 overflow-auto">
            <Tabs.Panel>
              <GitSourceOverviewTab loading={loading} data={data} />
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </div>
    </div>
  )
}

export default GitSourceDetailView
