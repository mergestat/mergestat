import { Tooltip } from '@mergestat/blocks'
import { AutoImportIcon, GithubIcon } from '@mergestat/icons'
import React, { ReactNode } from 'react'

export type repoDataStatus = 'error' | 'loading' | 'check'
export const sampleRepositoriesData: {
  repositoryName: string
  lastUpdate: string
  icons: ReactNode[]
  tags: { title: string; checked: boolean,color?:string }[]
  status: { icon: repoDataStatus; count: number }[]
  lastSync: string
}[] = [
  {
    repositoryName: 'marko-js/marko',
    lastUpdate: 'Last updated today',
    icons: [<GithubIcon />],
    tags: [
      { title: 'javascript', checked: true,color: "#8652E0" },
      { title: 'nodejs', checked: true,color:"#F59E0B" },
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
    repositoryName: 'marko-js/marko',
    lastUpdate: 'Last updated today',
    icons: [
      <GithubIcon />,
      <Tooltip content="Auto imported from user-name" placement="bottom">
        <AutoImportIcon />
      </Tooltip>,
    ],
    tags: [
      { title: 'javascript', checked: true,color: "#8652E0" },
      { title: 'nodejs', checked: true,color:"#F59E0B" },
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
    repositoryName: 'marko-js/marko',
    lastUpdate: 'Last updated today',
    icons: [
      <GithubIcon />,
      <Tooltip content="Auto imported from user-name" placement="bottom">
        <AutoImportIcon />
      </Tooltip>,
    ],
    tags: [
      { title: 'javascript', checked: true,color: "#8652E0" },
      { title: 'nodejs', checked: true,color:"#F59E0B" },
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
    repositoryName: 'marko-js/marko',
    lastUpdate: 'Last updated today',
    icons: [
      <GithubIcon />,
      <Tooltip content="Auto imported from user-name" placement="bottom">
        <AutoImportIcon />
      </Tooltip>,
    ],
    tags: [
      { title: 'javascript', checked: true,color: "#8652E0" },
      { title: 'nodejs', checked: true,color:"#F59E0B" },
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
