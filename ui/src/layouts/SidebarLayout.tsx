import { useQuery } from '@apollo/client'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React, { PropsWithChildren, useEffect } from 'react'
import { CurrentUserQuery } from 'src/api-logic/graphql/generated/schema'
import { CURRENT_USER } from 'src/api-logic/graphql/queries/auth'
import Loading from 'src/components/Loading'
import { GlobalProvider } from 'src/state/contexts'

const NavHeader = dynamic(() => import('../components/NavHeader'))
const Sidebar = dynamic(() => import('../components/Sidebar'))

const SidebarLayout: React.FC = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  const { loading, data } = useQuery<CurrentUserQuery>(CURRENT_USER, { fetchPolicy: 'no-cache' })

  useEffect(() => {
    data?.currentMergeStatUser === 'mergestat_anonymous' && router.push('/login')
  }, [data, router])

  return (
    <div className="h-screen flex flex-col min-h-0">
      {loading || data?.currentMergeStatUser === 'mergestat_anonymous'
        ? <Loading />
        : <>
          <GlobalProvider>
            <div className="content-area flex flex-grow">
              <Sidebar />
              <div className='w-full flex-1 overflow-hidden'>
                <NavHeader currentMergeStatUser={data?.currentMergeStatUser} />
                {children}
              </div>
            </div>
          </GlobalProvider>
        </>
      }
    </div>
  )
}

export default SidebarLayout
