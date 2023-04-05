import { Button, Dropdown, Menu } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React from 'react'

type RepositoryTableRowOptionsProps = {
  imageId: string
}

export const RepositoryTableRowOptions: React.FC<RepositoryTableRowOptionsProps> = ({ imageId }: RepositoryTableRowOptionsProps) => {
  const router = useRouter()

  return (
    <Dropdown
      alignEnd
      trigger={<Button skin="borderless-muted" startIcon={<DotsHorizontalIcon className="t-icon" />} isIconOnly />}
      overlay={() => (
        <Menu className='whitespace-nowrap'>
          <Menu.Item
            text="Edit Repo Sync"
            onClick={() => router.push(`/repos/repo-syncs/${imageId}`)}
          />
        </Menu>
      )}
    />
  )
}
