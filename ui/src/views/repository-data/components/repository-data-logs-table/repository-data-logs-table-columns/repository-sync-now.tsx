import { Button, Spinner } from '@mergestat/blocks'
import { RefreshIcon } from '@mergestat/icons'
import React from 'react'
import { repSyncState } from 'src/views/@types'

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
          disabled={syncStatus === 'loading'}
          skin="secondary"
          startIcon={
            syncStatus === 'loading' ? (
              <Spinner className=" w-3 h-3 mt-1" />
            ) : (
              <RefreshIcon className=" w-3 h-3 mt-1" />
            )
          }
          size="small"
          className=" flex items-center gap-1"
          onClick={doSync}
        >
          {syncStatus === 'loading' ? 'Syncing...' : 'Sync Now'}
        </Button>
      )}
    </>
  )
}