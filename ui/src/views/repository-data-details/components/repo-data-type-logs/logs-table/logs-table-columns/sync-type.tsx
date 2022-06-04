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
  const { repository, dataType } = router.query
  switch (syncType) {
    case 'failed':
      return (
        <div className="flex gap-2 items-center pl-6">
          <CircleErrorFilledIcon className="w-5 h-5 text-samantic-danger" />
          <Link href={`/repos/${repository}/${dataType}/${id}`}>
            <a className="font-medium hover_text-blue-600 text-samantic-text">Failed</a>
          </Link>
        </div>
      )
    case 'succeeded':
      return (
        <div className="flex gap-2 items-center pl-6">
          <CircleCheckFilledIcon className="w-5 h-5 text-samantic-success" />
          <Link href={`/repos/${repository}/${dataType}/${id}`.replace(/\s/g, "")}>
            <a className="font-medium hover_text-blue-600 text-samantic-text">Succeeded</a>
          </Link>
        </div>
      )
    case 'running':
      return (
        <div className="flex gap-2 items-center pl-6">
          <Spinner size="sm" />
          <Link href={`/repos/${repository}/${dataType}/${id}`.replace(/\s/g, "")}>
            <a className="font-medium hover_text-blue-600 text-samantic-text">Running</a>
          </Link>
        </div>
      )
    default:
      return <div>{syncType}</div>
  }
}
