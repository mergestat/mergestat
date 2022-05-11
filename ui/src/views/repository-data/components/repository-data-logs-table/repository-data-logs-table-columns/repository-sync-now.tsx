import { Button, Spinner } from '@mergestat/blocks'
import { RefreshIcon } from '@mergestat/icons'
import React from 'react'
import { repSyncState } from 'src/@types'

type RepositorySyncNowProps = {
  syncStatus: repSyncState
  doSync?: () => void
}

export const RepositorySyncNow: React.FC<RepositorySyncNowProps> = (props) => {
  const { syncStatus, doSync } = props
  return (
    <>
      {syncStatus === 'disabled' ? (
        <></>
      ) : (
        <Button
          className="flex items-center gap-2"
          disabled={syncStatus === 'loading'}
          skin="secondary"
          startIcon={
            syncStatus === 'loading' ? (
              <Spinner size='sm' className="mt-0.5" />
            ) : (
              <RefreshIcon className="w-4 h-4 mt-1" />
            )
          }
          size="small"
          onClick={doSync}
        >
          {syncStatus === 'loading' ? 'Syncing...' : 'Sync Now'}
        </Button>
      )}
    </>
  )
}
