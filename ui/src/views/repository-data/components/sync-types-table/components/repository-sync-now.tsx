import { Button, Spinner } from '@mergestat/blocks'
import { ClockIcon, RefreshIcon } from '@mergestat/icons'
import React, { useEffect, useState } from 'react'
import { RepoSyncStateT } from 'src/@types'
import { SYNC_STATUS, TEST_IDS } from 'src/utils/constants'
import useSyncNow from 'src/views/hooks/useSyncNow'

export type RepositorySyncNowProps = {
  repoId: string
  syncType: string
  syncTypeId: string
  syncStatus: RepoSyncStateT
}

export const RepositorySyncNow: React.FC<RepositorySyncNowProps> = ({ repoId, syncType, syncTypeId, syncStatus }) => {
  const { syncNow, addSyncType } = useSyncNow('getRepoSyncs')
  const [status, setStatus] = useState(syncStatus)

  const syncNowHandler = () => {
    setStatus(SYNC_STATUS.queued)
    syncTypeId ? syncNow({ variables: { syncId: syncTypeId } }) : addSyncType({ variables: { repoId, syncType } })
  }

  useEffect(() => {
    setStatus(syncStatus)
  }, [syncStatus])

  if (status === SYNC_STATUS.disabled) return <div className='h-full bg-gray-50' />

  return (
    <Button
      className="flex items-center float-right whitespace-nowrap"
      disabled={status === SYNC_STATUS.queued || status === SYNC_STATUS.running}
      skin="secondary"
      data-testid={TEST_IDS.syncsTypesSyncNowButton}
      startIcon={status === SYNC_STATUS.queued
        ? <ClockIcon className='t-icon t-icon-muted' />
        : status === SYNC_STATUS.running
          ? <Spinner size='sm' className='mr-2' />
          : <RefreshIcon className="t-icon t-icon-default" />
      }
      size="small"
      onClick={syncNowHandler}
    >
      {status === SYNC_STATUS.running ? 'Syncing...' : 'Sync Now'}
    </Button>
  )
}
