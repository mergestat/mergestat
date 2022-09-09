import { Button, Spinner } from '@mergestat/blocks'
import { ClockIcon, RefreshIcon } from '@mergestat/icons'
import React from 'react'
import { RepoSyncStateT } from 'src/@types'
import { SYNC_STATUS, TEST_IDS } from 'src/utils/constants'
import useSyncNow from 'src/views/hooks/useSyncNow'
import useSyncs from 'src/views/hooks/useSyncs'

export type RepositorySyncNowProps = {
  id: string
  syncStatus: RepoSyncStateT
}

export const RepositorySyncNow: React.FC<RepositorySyncNowProps> = ({ id, syncStatus }) => {
  const { refetch } = useSyncs()
  const { syncNow } = useSyncNow(refetch)

  if (syncStatus === SYNC_STATUS.disabled) return <div className='h-full bg-gray-50' />

  return (
    <Button
      className="flex items-center float-right"
      disabled={syncStatus === SYNC_STATUS.queued || syncStatus === SYNC_STATUS.running}
      skin="secondary"
      data-testid={TEST_IDS.syncsTypesSyncNowButton}
      startIcon={syncStatus === SYNC_STATUS.queued
        ? <ClockIcon className='t-icon text-semantic-mutedIcon' />
        : syncStatus === SYNC_STATUS.running
          ? <Spinner size='sm' className='mr-2' />
          : <RefreshIcon className="t-icon text-semantic-icon" />
      }
      size="small"
      onClick={() => {
        syncNow({
          variables: {
            syncId: id
          }
        })
      }}
    >
      {syncStatus === SYNC_STATUS.running ? 'Syncing...' : 'Sync Now'}
    </Button>
  )
}
