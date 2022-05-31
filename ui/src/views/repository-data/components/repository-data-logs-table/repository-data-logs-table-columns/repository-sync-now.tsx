import { Button, Spinner } from '@mergestat/blocks'
import { RefreshIcon } from '@mergestat/icons'
import React from 'react'
import { repSyncState } from 'src/@types'

export type RepositorySyncNowProps = {
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
          disabled={syncStatus === 'loading'}
          className="float-right"
          skin="secondary"
          startIcon={
            syncStatus === 'loading' ? (
              <Spinner size='sm' className="mr-2" />
            ) : (
              <RefreshIcon className="t-icon" />
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
