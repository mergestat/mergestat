import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { PropsWithChildren, useEffect } from 'react'
import Loading from 'src/components/Loading'
import useCurrentUser from 'src/views/hooks/useCurrentUser'

const NavHeader = dynamic(() => import('../components/NavHeader'))
const Sidebar = dynamic(() => import('../components/Sidebar'))

const SidebarLayout: React.FC = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  const { loading, data } = useCurrentUser()

  useEffect(() => {
    data?.currentMergeStatUser === 'mergestat_anonymous' && router.push('/login')
  }, [data, router])

  return (
    <div className="h-screen flex flex-col min-h-0">
      {loading || data?.currentMergeStatUser === 'mergestat_anonymous'
        ? <Loading />
        : <>
          <NavHeader currentMergeStatUser={data?.currentMergeStatUser} />
          <div className="content-area flex flex-grow">
            <Sidebar />
            {children}
          </div>
        </>
      }
    </div>
  )
}

export default SidebarLayout
