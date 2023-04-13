import { Button } from '@mergestat/blocks'
import { RefreshIcon } from '@mergestat/icons'
import React, { useEffect, useState } from 'react'
import { RepoContainerSyncState } from 'src/@types'
import { SYNC_CONTAINER_STATUS, SYNC_STATUS, TEST_IDS } from 'src/utils/constants'
import useContainerSyncNow from 'src/views/hooks/repoContainerSyncs/useContainerSyncNow'

export type RepositorySyncNowProps = {
  syncId: string
  repoId: string
  imageId: string
  syncStatus: RepoContainerSyncState
}

export const RepositorySyncNow: React.FC<RepositorySyncNowProps> = ({ syncId, repoId, imageId, syncStatus }) => {
  const { syncNow, enableCSAndSync } = useContainerSyncNow('getContainerSyncs')
  const [status, setStatus] = useState(syncStatus)

  const syncNowHandler = () => {
    setStatus(SYNC_CONTAINER_STATUS.pending)
    syncNow({ variables: { sync: syncId } })
  }

  const enableSyncNowHandler = () => {
    setStatus(SYNC_CONTAINER_STATUS.pending)
    enableCSAndSync({ variables: { repoId, imageId } })
  }

  useEffect(() => {
    setStatus(syncStatus)
  }, [syncStatus])

  return (
    <Button
      isIconOnly
      skin="borderless-muted"
      className="flex items-center float-right whitespace-nowrap"
      disabled={status === SYNC_CONTAINER_STATUS.pending || status === SYNC_STATUS.running}
      data-testid={TEST_IDS.syncsTypesSyncNowButton}
      startIcon={<RefreshIcon className="t-icon" />}
      onClick={() => {
        syncId ? syncNowHandler() : enableSyncNowHandler()
      }}
    />
  )
}
