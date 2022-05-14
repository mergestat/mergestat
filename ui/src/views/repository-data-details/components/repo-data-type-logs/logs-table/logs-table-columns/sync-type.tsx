import { CircleCheckFilledIcon, CircleErrorFilledIcon } from '@mergestat/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { repSyncState } from 'src/@types'

export type SyncTypeProps = {
  sync_type: repSyncState
  sync_start: string
  id: string
}
export const SyncType: React.FC<SyncTypeProps> = (props) => {
  const { sync_type, sync_start, id } = props
  const router = useRouter()
  const { repoName, dataType } = router.query
  switch (sync_type) {
    case 'error':
      return (
        <div className="flex gap-2 items-center">
          <CircleErrorFilledIcon className="w-5 h-5 text-samantic-danger" />
          <Link href={`/repos/${repoName}/${dataType}/${id}`}>
            <a className="hover_text-blue-600 text-samantic-text">Failed</a>
          </Link>
        </div>
      )
    case 'check':
      return (
        <div className="flex gap-2 items-center">
          <CircleCheckFilledIcon className="w-5 h-5 text-samantic-success" />
          <Link href={`/repos/${repoName}/${dataType}/${id}`.replace(/\s/g, "")}>
            <a className="hover_text-blue-600 text-samantic-text">Succeeded</a>
          </Link>
        </div>
      )
    default:
      return <div>{sync_type}</div>
  }
}
