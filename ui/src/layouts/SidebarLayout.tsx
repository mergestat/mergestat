import dynamic from 'next/dynamic'
import React, { PropsWithChildren } from 'react'

const NavHeader = dynamic(() => import('../components/NavHeader'))
const Sidebar = dynamic(() => import('../components/Sidebar'))

const SidebarLayout: React.FC = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen flex flex-col min-h-0">
      <NavHeader />
      <div className="content-area flex flex-grow">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default SidebarLayout
