import { Button, Spinner } from '@mergestat/blocks'
import { RefreshIcon } from '@mergestat/icons'
import React from 'react'
import { RepSyncStateT } from 'src/@types'

export type RepositorySyncNowProps = {
  syncStatus: RepSyncStateT
  doSync?: () => void
}

export const RepositorySyncNow: React.FC<RepositorySyncNowProps> = (props) => {
  const { syncStatus, doSync } = props

  if (syncStatus === 'disabled') return null

  return (
    <Button
      className="flex items-center float-right"
      disabled={syncStatus === 'loading'}
      skin="secondary"
      startIcon={
        syncStatus === 'loading' ? (
          <Spinner size='sm' className='mr-2' />
        ) : (
          <RefreshIcon className="t-icon text-samantic-icon" />
        )
      }
      size="small"
      onClick={doSync}
    >
      {syncStatus === 'loading' ? 'Syncing...' : 'Sync Now'}
    </Button>
  )
}
