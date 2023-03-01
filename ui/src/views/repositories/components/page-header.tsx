import { Toolbar } from '@mergestat/blocks'
import React from 'react'
import useCrumbsInit from 'src/views/hooks/useCrumbsInit'

export const PageHeader: React.FC = () => {
  useCrumbsInit()

  return (
    <div className="bg-white h-16 flex items-center w-full px-8 border-b border-gray-200">
      <Toolbar>
        <Toolbar.Left>
          <div className="text-xl font-semibold">
            Repos
          </div>
        </Toolbar.Left>
      </Toolbar>
    </div>
  )
}
