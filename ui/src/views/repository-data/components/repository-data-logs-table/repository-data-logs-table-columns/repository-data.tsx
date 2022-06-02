import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

export type RepositoryDataProps = {
  title: string
  brief?: string
  disabled?: boolean
}
export const RepositoryData: React.FC<RepositoryDataProps> = (props) => {
  const router = useRouter()
  const { repoName } = router.query

  return (
    <div className={cx('grid h-full py-3', {'bg-gray-50': props.disabled})}>
      <Link href={`/repos/${repoName}/${props.title}`}>
        <h4 className="font-medium pt-1.5 text-samantic-text cursor-pointer hover_text-blue-600">
          {props.title}
        </h4>
      </Link>

      <p className="text-sm text-samantic-mutedText">
        {props.brief}
      </p>
    </div>
  )
}
