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
  const { repository, syncTypeId } = router.query

  return (
    <div className="flex gap-2 items-center">
      <RepoSyncIcon type={syncType} />
      <Link href={`/v1/repos/${repository}/${syncTypeId}/${id}`}>
        <span className="font-medium hover_text-blue-600 t-text-default capitalize cursor-pointer">
          {syncType}
        </span>
      </Link>
    </div>
  )
}
