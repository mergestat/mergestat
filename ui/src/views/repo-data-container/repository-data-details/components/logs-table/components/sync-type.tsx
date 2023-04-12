import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import type { RepoContainerSyncState } from 'src/@types'
import { RepoContainerSyncIcon } from 'src/views/repos-containers/components/repo-container-sync-icon'

export type SyncTypeProps = {
  syncType: RepoContainerSyncState
  id: string
}

export const SyncType: React.FC<SyncTypeProps> = ({ syncType, id }: SyncTypeProps) => {
  const router = useRouter()
  const { repository, syncId } = router.query

  return (
    <div className="flex gap-2 items-center">
      <RepoContainerSyncIcon type={syncType} />
      <Link href={`/repos-containers/${repository}/${syncId}/${id}`}>
        <span className="font-medium hover_text-blue-600 t-text-default capitalize cursor-pointer">
          {syncType}
        </span>
      </Link>
    </div>
  )
}
