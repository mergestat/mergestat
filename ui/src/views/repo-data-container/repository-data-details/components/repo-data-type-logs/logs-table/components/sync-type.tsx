import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import type { RepoSyncStateT } from 'src/@types'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'

export type SyncTypeProps = {
  syncType: RepoSyncStateT
  id: string
}

export const SyncType: React.FC<SyncTypeProps> = (props) => {
  const { syncType, id } = props

  const router = useRouter()
  const { repository, syncId } = router.query

  return (
    <div className="flex gap-2 items-center">
      <RepoSyncIcon type={syncType} />
      <Link href={`/repos/${repository}/container-syncs/${syncId}/${id}`}>
        <span className="font-medium hover_text-blue-600 t-text-default capitalize cursor-pointer">
          {syncType}
        </span>
      </Link>
    </div>
  )
}
