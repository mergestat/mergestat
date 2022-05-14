import React from 'react'
import { Typography } from '@mergestat/blocks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { repSyncState } from 'src/@types'

export type RepositoryDataProps = {
  title: string
  brief?: string
}
export const RepositoryData: React.FC<RepositoryDataProps> = (props) => {
  const router = useRouter()
  const { repoName } = router.query

  return (
    <div>
      <Link href={`/repos/${repoName}/${props.title}`}>
        <Typography.Title className="text-samantic-text cursor-pointer hover_text-blue-600">
          {props.title}
        </Typography.Title>
      </Link>

      <Typography.Text size="sm" className="text-samantic-mutedText">
        {props.brief}
      </Typography.Text>
    </div>
  )
}
