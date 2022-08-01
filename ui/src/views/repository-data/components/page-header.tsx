import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BreadcrumbNav } from '@mergestat/blocks'
import { ExternalLinkIcon } from '@mergestat/icons'
import type { RepoType } from 'src/@types'
import RepoImage from 'src/components/RepoImage'

interface PageHeaderProps {
  name: string
  type: RepoType
}

export const PageHeader = ({ name, type }: PageHeaderProps) => {
  const router = useRouter()
  const crumbs = [
    {
      text: "Repositories",
      onClick: () => router.push('/repos'),
    },
    {
      text: name,
      startIcon: <RepoImage repoType={type} orgName={name.split('/')[0]} />,
      endIcon: (
        <Link href={type === 'github' ? 'https://github.com/' + name : name}>
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

