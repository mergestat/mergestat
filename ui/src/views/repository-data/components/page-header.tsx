import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BreadcrumbNav } from '@mergestat/blocks'
import { ExternalLinkIcon } from '@mergestat/icons'
import type { RepoDataPropsT } from 'src/@types'
import RepoImage from 'src/components/RepoImage'

export const PageHeader = ({ data }: { data: RepoDataPropsT }) => {
  const router = useRouter()
  const crumbs = [
    {
      text: "Repo",
      onClick: () => router.push('/repos'),
    },
    {
      text: data.name,
      startIcon: <RepoImage repoType={data.type} orgName={data.name.split('/')[0]} />,
      endIcon: (
        <Link href={data.type === 'github' ? 'https://github.com/' + data.name : data.name}>
          <a target='_blank'>
            <ExternalLinkIcon className='t-icon t-icon-small' />
          </a>
        </Link>
      ),
    }
  ]

  return (
    <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
      <div className="text-xl font-semibold">
        <BreadcrumbNav data={crumbs} />
      </div>
    </div>
  )
}

