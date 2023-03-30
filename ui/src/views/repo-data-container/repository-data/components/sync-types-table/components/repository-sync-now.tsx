import { Button, Spinner } from '@mergestat/blocks'
import { ClockIcon, RefreshIcon } from '@mergestat/icons'
import React, { useEffect, useState } from 'react'
import { RepoSyncStateT } from 'src/@types'
import { SYNC_STATUS, TEST_IDS } from 'src/utils/constants'
import useContainerSyncNow from 'src/views/hooks/repoContainerSyncs/useContainerSyncNow'

export type RepositorySyncNowProps = {
  syncId: string
  repoId: string
  imageId: string
  syncStatus: RepoSyncStateT
}

export const RepositorySyncNow: React.FC<RepositorySyncNowProps> = ({ syncId, repoId, imageId, syncStatus }) => {
  const { syncNow, enableCSAndSync } = useContainerSyncNow('getContainerSyncs')
  const [status, setStatus] = useState(syncStatus)

  const syncNowHandler = () => {
    setStatus(SYNC_STATUS.queued)
    syncNow({ variables: { sync: syncId } })
  }

  const enableSyncNowHandler = () => {
    setStatus(SYNC_STATUS.queued)
    enableCSAndSync({ variables: { repoId, imageId } })
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
      onClick={() => {
        syncId ? syncNowHandler() : enableSyncNowHandler()
      }}
    />
  )
}
