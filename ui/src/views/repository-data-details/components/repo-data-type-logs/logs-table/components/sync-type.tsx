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
  const { repository, syncTypeID } = router.query

  return (
    <div className="flex gap-2 items-center pl-6">
      <RepoSyncIcon type={syncType} />
      <Link href={`/repos/${repository}/${syncTypeID}/${id}`}>
        <a className="font-medium hover_text-blue-600 text-semantic-text capitalize">
          {syncType}
        </a>
      </Link>
    </div>
  )
}
