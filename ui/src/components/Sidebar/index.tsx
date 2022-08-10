import { Sidebar } from '@mergestat/blocks'
import { CogIcon, DatabaseIcon, RepositoryIcon } from '@mergestat/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const SidebarView: React.FC = () => {
  const { pathname } = useRouter()

  const isSidebarActive = (path: string) => !!pathname.match(path)?.length

  return (
    <Sidebar>
      <Link href="/repos" passHref>
        <Sidebar.Item
          label="Repos"
          active={isSidebarActive('repos')}
          icon={<RepositoryIcon className='t-icon' />}
        />
      </Link>
      <Link href="/connect" passHref>
        <Sidebar.Item
          label="Connect"
          active={isSidebarActive('connect')}
          icon={<DatabaseIcon className='t-icon' />}
        />
      </Link>
      <Sidebar.Divider />
      <Link href="/settings" passHref>
        <Sidebar.Item
          label="Settings"
          active={isSidebarActive('settings')}
          icon={<CogIcon className='t-icon' />}
        />
      </Link>
    </Sidebar>
  )
}

export default SidebarView
