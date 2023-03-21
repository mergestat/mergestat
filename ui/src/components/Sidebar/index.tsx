import { Sidebar } from '@mergestat/blocks'
import { CogIcon, DatabaseIcon, RepositoryIcon, TerminalIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React from 'react'

const SidebarView: React.FC = () => {
  const { pathname, push } = useRouter()

  const isSidebarActive = (path: string | RegExp) => !!pathname.match(path)?.length

  return (
    <Sidebar compact={false} dark={true} collapsible={true} className='flex-none'>
      <Sidebar.Header />
      <Sidebar.Main>
        <Sidebar.Item
          label='Repos'
          compact={false}
          active={isSidebarActive(/^\/repos/) && !isSidebarActive(/^\/repos\/git-sources/) && !isSidebarActive(/^\/repos\/repo-syncs/) && !isSidebarActive(/^\/repos\/add-git-source/)}
          defaultOpen={isSidebarActive(/^\/repos/)}
          icon={<RepositoryIcon className='t-icon' />}
          onClick={() => push('/repos')}
          subNav={
            <>
              <Sidebar.Item compact={false}
                onClick={() => push('/repos/repo-syncs')}
                active={isSidebarActive('/repos/repo-syncs')}
                label='Repo Syncs' level='sub' />
              <Sidebar.Item compact={false}
                onClick={() => push('/repos/git-sources')}
                active={isSidebarActive('/repos/git-sources') || isSidebarActive('/repos/add-git-source')}
                label='Git Sources' level='sub' />
            </>
          }
        />
        <Sidebar.Item
          label='Queries'
          compact={false}
          active={isSidebarActive(/^\/queries$/)}
          defaultOpen={isSidebarActive(/^\/queries/)}
          onClick={() => push('/queries')}
          icon={<TerminalIcon className='t-icon' />}
          subNav={
            <Sidebar.Item compact={false}
              onClick={() => push('/queries/saved')}
              active={isSidebarActive('/queries/saved')}
              label='Saved Queries' level='sub' />
          }
        />
        <Sidebar.Item
          label='Connect'
          compact={false}
          active={isSidebarActive(/^\/connect$/)}
          onClick={() => push('/connect')}
          icon={<DatabaseIcon className='t-icon' />}
        />
        <Sidebar.Divider />
        <Sidebar.Item
          label='Settings'
          compact={false}
          defaultOpen={isSidebarActive(/^\/settings/)}
          icon={<CogIcon className='t-icon' />}
          subNav={
            <>
              <Sidebar.Item compact={false}
                active={isSidebarActive('/settings/user-management')}
                onClick={() => push('/settings/user-management')}
                label='User Management' level='sub' />
              <Sidebar.Item compact={false}
                active={isSidebarActive('/settings/user-settings')}
                onClick={() => push('/settings/user-settings')}
                label='User Settings' level='sub' />
            </>
          } />
      </Sidebar.Main>
      <Sidebar.Footer>
        <a target='_blank' href='https://github.com/mergestat/mergestat' rel='noopener noreferrer'>
          <Sidebar.Version label='beta' />
        </a>
      </Sidebar.Footer>
    </Sidebar>
  )
}

export default SidebarView
