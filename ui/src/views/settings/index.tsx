
import { Toolbar, VerticalNav } from '@mergestat/blocks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const SettingsView = ({ children }: Props) => {
  const { pathname } = useRouter() || { pathname: { text: '' } }

  const active = (pathMenu: string) => pathname === pathMenu

  return (
    <main className='w-full flex flex-col h-full bg-gray-50 overflow-hidden'>
      <div className='flex h-full'>
        {/* Sidebar content */}
        <div className='flex flex-col w-72 h-full border-r'>
          <div className='bg-white h-16 w-full border-b px-8'>
            <Toolbar className='h-full'>
              <Toolbar.Left>
                <h2 className='t-h2 mb-0'>Settings</h2>
              </Toolbar.Left>
            </Toolbar>
          </div>
          <div className='flex-1 overflow-auto p-8'>
            <VerticalNav>
              {/* <VerticalNav.Item text='General' disabled={true} /> */}
              <Link href='/settings'>
                <VerticalNav.Item href='/settings' text='GitHub Authentication' active={active('/settings')} />
              </Link>
              <Link href='/settings/repo-auto-imports'>
                <VerticalNav.Item href='/settings/repo-auto-imports' text='Repo Auto Imports' active={active('/settings/repo-auto-imports') || active('/settings/repo-auto-imports/[importId]')} />
              </Link>
            </VerticalNav>
          </div>
        </div>
        {children}
      </div>
    </main>
  )
}

export default SettingsView
