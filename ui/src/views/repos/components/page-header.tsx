import { Button, Toolbar } from '@mergestat/blocks'
import { PlusIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React from 'react'
import useCrumbsInit from 'src/views/hooks/useCrumbsInit'

export const PageHeader: React.FC = () => {
  const router = useRouter()
  useCrumbsInit()

  return (
    <div className="bg-white h-16 flex items-center w-full px-8 border-b border-gray-200">
      <Toolbar>
        <Toolbar.Left>
          <div className="text-xl font-semibold">
            Repos
          </div>
        </Toolbar.Left>
        <Toolbar.Right>
          <Button className='whitespace-nowrap'
            label='Add Repos'
            startIcon={<PlusIcon className='t-icon' />}
            onClick={() => router.push('/v1/repos/add-git-source')}
          />
        </Toolbar.Right>
      </Toolbar>
    </div>
  )
}
