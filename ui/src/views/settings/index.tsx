
import { Toolbar, VerticalNav } from '@mergestat/blocks'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'

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
                        <VerticalNav.Item text='General' disabled={true} />
                        <VerticalNav.Item href='/settings' text='GitHub Authentication' active={active('/settings')} />
                        <VerticalNav.Item href='/settings/auto-imports' text='GitHub Auto Imports' active={pathname.includes('/settings/auto-imports')} />
                    </VerticalNav>
                </div>
            </div>
            {children}
        </div>
    </main>
  )
}

export default SettingsView
