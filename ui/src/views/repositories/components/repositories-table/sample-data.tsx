import React, { ReactNode } from 'react'
import { Tooltip } from '@mergestat/blocks'
import { AutoImportIcon, GithubIcon } from '@mergestat/icons'
import { tagType } from 'src/@types'

export type repoDataStatus = 'error' | 'loading' | 'check'
export const sampleRepositoriesData: {
  repositoryName: string
  lastUpdate: string
  icons: ReactNode[]
  tags: tagType[]
  status: { icon: repoDataStatus; count: number }[]
  lastSync: string
}[] = [
  {
    repositoryName: 'marko-js/repo1',
    lastUpdate: 'Last updated today',
    icons: [<GithubIcon className=' w-4 h-4' />],
    tags: [
      { title: 'javascript', checked: true },
      { title: 'nodejs', checked: true },
      { title: 'virtual-dom', checked: true },
      { title: 'virtual-dom', checked: false },
      { title: 'nodejs', checked: false },
      { title: 'virtual-dom', checked: false },
    ],
    status: [
      { icon: 'error', count: 2 },
      { icon: 'loading', count: 1 },
      { icon: 'check', count: 1 },
    ],
    lastSync: '3 minutes ago',
  },
  {
    repositoryName: 'marko-js/repo2',
    lastUpdate: 'Last updated today',
    icons: [
      <GithubIcon className='w-4 h-4' />,
      <Tooltip content="Auto imported from user-name" placement="bottom">
        <AutoImportIcon className='w-4 h-4' />
      </Tooltip>,
    ],
    tags: [
      { title: 'javascript', checked: true },
      { title: 'nodejs', checked: true },
      { title: 'virtual-dom', checked: false },
      { title: 'mongo-db', checked: true },
      { title: 'nodejs', checked: false },
      { title: 'virtual-dom', checked: false },
    ],
    status: [
      { icon: 'error', count: 1 },
      { icon: 'loading', count: 2 },
      { icon: 'check', count: 1 },
    ],
    lastSync: '3 minutes ago',
  },
  {
    repositoryName: 'marko-js/repo3',
    lastUpdate: 'Last updated today',
    icons: [
      <GithubIcon className='w-4 h-4' />,
      <Tooltip content="Auto imported from user-name" placement="bottom">
        <AutoImportIcon className='w-4 h-4' />
      </Tooltip>,
    ],
    tags: [
      { title: 'javascript', checked: true },
      { title: 'nodejs', checked: true },
      { title: 'virtual-dom', checked: true },
      { title: 'virtual-dom', checked: false },
      { title: 'nodejs', checked: false },
      { title: 'virtual-dom', checked: false },
    ],
    status: [
      { icon: 'error', count: 1 },
      { icon: 'check', count: 5 },
    ],
    lastSync: '3 minutes ago',
  },
  {
    repositoryName: 'marko-js/repo4',
    lastUpdate: 'Last updated today',
    icons: [
      <GithubIcon className='w-4 h-4' />,
      <Tooltip content="Auto imported from user-name" placement="bottom">
        <AutoImportIcon className='w-4 h-4' />
      </Tooltip>,
    ],
    tags: [
      { title: 'javascript', checked: true },
      { title: 'nodejs', checked: true },
      { title: 'virtual-dom', checked: true },
      { title: 'virtual-dom', checked: false },
      { title: 'nodejs', checked: false },
      { title: 'virtual-dom', checked: false },
    ],
    status: [
      { icon: 'loading', count: 1 },
      { icon: 'check', count: 3 },
    ],
    lastSync: '3 minutes ago',
  },
]
