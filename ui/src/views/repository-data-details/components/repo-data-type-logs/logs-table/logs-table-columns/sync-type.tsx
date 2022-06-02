import { Spinner } from '@mergestat/blocks'
import { CircleCheckFilledIcon, CircleErrorFilledIcon } from '@mergestat/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { RepSyncStateT } from 'src/@types'

export type SyncTypeProps = {
  syncType: RepSyncStateT
  id: string
}
export const SyncType: React.FC<SyncTypeProps> = (props) => {
  const { syncType, id } = props
  const router = useRouter()
  const { repoName, dataType } = router.query
  switch (syncType) {
    case 'error':
      return (
        <div className="flex gap-2 items-center pl-6">
          <CircleErrorFilledIcon className="w-5 h-5 text-samantic-danger" />
          <Link href={`/repos/${repoName}/${dataType}/${id}`}>
            <a className="hover_text-blue-600 text-samantic-text">Failed</a>
          </Link>
        </div>
      )
    case 'success':
      return (
        <div className="flex gap-2 items-center pl-6">
          <CircleCheckFilledIcon className="w-5 h-5 text-samantic-success" />
          <Link href={`/repos/${repoName}/${dataType}/${id}`.replace(/\s/g, "")}>
            <a className="hover_text-blue-600 text-samantic-text">Succeeded</a>
          </Link>
        </div>
      )
    case 'loading':
      return (
        <div className="flex gap-2 items-center pl-6">
          <Spinner size="sm" />
          <Link href={`/repos/${repoName}/${dataType}/${id}`.replace(/\s/g, "")}>
            <a className="hover_text-blue-600 text-samantic-text">Running</a>
          </Link>
        </div>
      )
    default:
      return <div>{syncType}</div>
  }
}
