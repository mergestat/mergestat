import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { PropsWithChildren, useEffect } from 'react'
import Loading from 'src/components/Loading'
import { useMonacoProvider } from 'src/hooks/useMonacoProvider'
import { GlobalProvider } from 'src/state/contexts'
import useCurrentUser from 'src/views/hooks/useCurrentUser'

const NavHeader = dynamic(() => import('../components/NavHeader'))
const Sidebar = dynamic(() => import('../components/Sidebar'))

const SidebarLayout: React.FC = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  // Register SQL language suggestions just once
  const { getSchemaInfo } = useMonacoProvider()

  const { loading, data } = useCurrentUser()

  useEffect(() => {
    if (data) {
      if (data.currentMergeStatUser === 'mergestat_anonymous') {
        router.push('/login')
      } else {
        getSchemaInfo()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

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
