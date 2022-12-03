import { Badge, Sidebar } from '@mergestat/blocks'
import { CogIcon, DatabaseIcon, RepositoryIcon, TerminalIcon } from '@mergestat/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const SidebarView: React.FC = () => {
  const { pathname } = useRouter()

  const isSidebarActive = (path: string) => !!pathname.match(path)?.length

  return (
    <Sidebar compact={false} dark={true} collapsible={true} className='flex-none'>
      <Sidebar.Header />
      <Sidebar.Main>
        <Link href="/repos" passHref>
          <Sidebar.Item
            label="Repos"
            compact={false}
            active={isSidebarActive('repos')}
            icon={<RepositoryIcon className='t-icon' />}
          />
        </Link>
        <Link href="/queries" passHref>
          <Sidebar.Item
            label="Queries"
            compact={false}
            active={isSidebarActive('queries')}
            icon={<TerminalIcon className='t-icon' />}
          />
        </Link>
        <Link href="/connect" passHref>
          <Sidebar.Item
            label="Connect"
            compact={false}
            active={isSidebarActive('connect')}
            icon={<DatabaseIcon className='t-icon' />}
          />
        </Link>
        <Sidebar.Divider />
        <Sidebar.Item
          label="Settings"
          compact={false}
          icon={<CogIcon className='t-icon' />}
          subNav={
            <>
              <Link href='/settings/github-authentication' passHref>
                <Sidebar.Item compact={false} active={isSidebarActive('/settings/github-authentication')} label="GitHub Authentication" level='sub' />
              </Link>
              <Link href='/settings/repo-auto-imports' passHref>
                <Sidebar.Item compact={false} active={isSidebarActive('/settings/repo-auto-imports')} label="Repo Auto Imports" level='sub' />
              </Link>
              <Link href='/settings/user-management' passHref>
                <Sidebar.Item compact={false} active={isSidebarActive('/settings/user-management')} label="User Management" level='sub' />
              </Link>
              <Link href='/settings/user-settings' passHref>
                <Sidebar.Item compact={false} active={isSidebarActive('/settings/user-settings')} label="User Settings" level='sub' />
              </Link>
            </>
          }>
          </Sidebar.Item>
      </Sidebar.Main>
      <Sidebar.Footer>
          <a target='_blank' href='https://github.com/mergestat/mergestat' rel='noopener noreferrer'>
          <Sidebar.Version label='v.1.1.0' />
          </a>
      </Sidebar.Footer>
    </Sidebar>
  )
}

export default SidebarView
