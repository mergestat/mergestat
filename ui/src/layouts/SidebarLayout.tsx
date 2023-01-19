import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { PropsWithChildren, useEffect } from 'react'
import Loading from 'src/components/Loading'
import useCurrentUser from 'src/views/hooks/useCurrentUser'
import { GlobalProvider } from 'src/state/contexts'

const NavHeader = dynamic(() => import('../components/NavHeader'))
const Sidebar = dynamic(() => import('../components/Sidebar'))

const SidebarLayout: React.FC = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  const { loading, data } = useCurrentUser()

  useEffect(() => {
    data?.currentMergeStatUser === 'mergestat_anonymous' && router.push('/login')
  }, [data, router])

  return (
    <div className="h-screen">
      {loading || data?.currentMergeStatUser === 'mergestat_anonymous'
        ? <Loading />
        : <>
          <GlobalProvider>
            <div className="h-full flex">
              <Sidebar />
              <main className='h-full w-full flex-1 flex flex-col bg-gray-50 overflow-hidden'>
                <NavHeader currentMergeStatUser={data?.currentMergeStatUser} />
                {children}
              </main>
            </div>
          </GlobalProvider>
        </>
      }
    </div>
  )
}

export default SidebarLayout
