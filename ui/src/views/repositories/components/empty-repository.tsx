import { Avatar } from '@mergestat/blocks'
import { RepositoryIcon } from '@mergestat/icons'
import React from 'react'
import { TEST_IDS } from 'src/utils/constants'

export const EmptyRepository: React.FC = () => {
  return (
    <div data-testid={TEST_IDS.emptyRepository} className="flex items-center justify-center h-full w-full">
      <div className="flex flex-col items-center">
        <Avatar icon={<RepositoryIcon className='t-icon' />} size='lg' />
        <p className="t-text-muted py-5">No repositories added yet</p>
      </div>
    </div>
  )
}
