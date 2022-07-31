import { Button, Spinner } from '@mergestat/blocks'
import { RefreshIcon } from '@mergestat/icons'
import React from 'react'
import { RepoSyncStateT } from 'src/@types'

export type RepositorySyncNowProps = {
  syncStatus: RepoSyncStateT
  doSync?: () => void
}

export const RepositorySyncNow: React.FC<RepositorySyncNowProps> = (props) => {
  const { syncStatus, doSync } = props

  if (syncStatus === 'disabled') return <div className='h-full bg-gray-50' />

  return (
    <Button
      className="flex items-center float-right"
      disabled={syncStatus === 'running'}
      skin="secondary"
      startIcon={
        syncStatus === 'running' ? (
          <Spinner size='sm' className='mr-2' />
        ) : (
          <RefreshIcon className="t-icon text-semantic-icon" />
        )
      }
      size="small"
      onClick={doSync}
    >
      {syncStatus === 'running' ? 'Syncing...' : 'Sync Now'}
    </Button>
  )
}
