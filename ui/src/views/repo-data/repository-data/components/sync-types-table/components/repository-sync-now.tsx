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
  syncTypeGroup: string
  syncStatus: RepoSyncStateT
}

export const RepositorySyncNow: React.FC<RepositorySyncNowProps> = ({ repoId, syncType, syncTypeId, syncTypeGroup, syncStatus }) => {
  const { syncNow, addSyncType } = useSyncNow('getRepoSyncs')
  const [status, setStatus] = useState(syncStatus)

  const syncNowHandler = () => {
    setStatus(SYNC_STATUS.queued)
    syncTypeId ? syncNow({ variables: { syncId: syncTypeId, typeGroup: syncTypeGroup } }) : addSyncType({ variables: { repoId, syncType } })
  }

  useEffect(() => {
    setStatus(syncStatus)
  }, [syncStatus])

  if (status === SYNC_STATUS.disabled) return <div className='h-full bg-gray-50' />

  return (
    <Button
      isIconOnly
      skin="borderless"
      className="flex items-center float-right whitespace-nowrap"
      disabled={status === SYNC_STATUS.queued || status === SYNC_STATUS.running}
      data-testid={TEST_IDS.syncsTypesSyncNowButton}
      startIcon={status === SYNC_STATUS.queued
        ? <ClockIcon className='t-icon t-icon-muted' />
        : status === SYNC_STATUS.running
          ? <Spinner size='sm' className='mr-2' />
          : <RefreshIcon className="t-icon t-icon-default" />
      }
      onClick={syncNowHandler}
    />
  )
}
