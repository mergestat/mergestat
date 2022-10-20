import cx from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export type RepositoryDataProps = {
  id: string
  title: string
  brief?: string
  disabled?: boolean
}
export const RepositoryData: React.FC<RepositoryDataProps> = (props) => {
  const router = useRouter()
  const { repository } = router.query

  return (
    <div className={cx('py-5 flex flex-col justify-center items-start h-full', { 'bg-gray-50': props.disabled })}>
      {props.id
        ? <Link href={`/repos/${repository}/${props.id}`}>
          <h4 className="font-medium mb-0.5 t-text-default cursor-pointer hover_text-blue-600">
            {props.title}
          </h4>
        </Link>
        : <h4 className="font-medium mb-0.5 t-text-default">
          {props.title}
        </h4>
      }

      <p className="text-sm t-text-muted">
        {props.brief}
      </p>
    </div>
  )
}
