import React from 'react'
import { Typography } from '@mergestat/blocks'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
        <h4 className="font-medium mb-0.5 text-samantic-text cursor-pointer hover_text-blue-600">
          {props.title}
        </h4>
      </Link>

      <p className="text-sm text-samantic-mutedText">
        {props.brief}
      </p>
    </div>
  )
}
