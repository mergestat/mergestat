import { Badge, ColoredBox } from '@mergestat/blocks'
import { TableIcon } from '@mergestat/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export type RepoSyncTypeDescProps = {
  id: string
  title: string
  brief?: string
  labels?: string[]
}

const LabelBadgeList: React.FC<{ labels?: string[] }> = ({ labels }) => {
  return (
    <>
      {labels?.map((label) => (
        <Badge key={label} className='mx-1'>
          {label}
        </Badge>
      ))}
    </>
  )
}

export const RepoSyncTypeDesc: React.FC<RepoSyncTypeDescProps> = (props) => {
  const router = useRouter()
  const { repository } = router.query

  return (
    <div className='flex items-center space-x-4'>
      <ColoredBox size="9">
        <TableIcon className='t-icon' />
      </ColoredBox>

      <div className='flex flex-col justify-center items-start h-full'>
        {props.id
          ? <Link href={`/repos/${repository}/${props.id}`}>
            <h4 className="font-medium mb-0.5 t-text-default cursor-pointer hover_text-blue-600">
              {props.title} <LabelBadgeList labels={props.labels} />
            </h4>
          </Link>
          : <h4 className="font-medium mb-0.5 t-text-default">
            {props.title} <LabelBadgeList labels={props.labels} />
          </h4>
        }

        <p className="text-sm t-text-muted">
          {props.brief}
        </p>
      </div>
    </div>
  )
}
