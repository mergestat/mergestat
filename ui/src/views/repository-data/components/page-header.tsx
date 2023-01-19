import { ExternalLinkIcon, RepositoryIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { RepoType } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { useGlobalSetState } from 'src/state/contexts'
import { GITHUB_URL } from 'src/utils/constants'

interface PageHeaderProps {
  name: string
  type: RepoType
}

export const PageHeader = ({ name, type }: PageHeaderProps) => {
  const router = useRouter()
  const { setCrumbs } = useGlobalSetState()

  const repoOwnerName = name.split('/')[0]
  const repoName = name.split('/')[1]

  useEffect(() => {
    const crumbs = [
      {
        text: 'Repos',
        startIcon: <RepositoryIcon className='t-icon t-icon-default' />,
        onClick: () => router.push('/repos'),
      },
    ]

    setCrumbs(crumbs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
      <div className="flex items-center space-x-1">
        <div className="text-xl font-semibold flex items-center space-x-1">
          <RepoImage repoType={type} orgName={repoOwnerName} />
          <span className='pl-1'>{name}</span>
          <a target='_blank' href={type === 'github' ? `${GITHUB_URL + repoOwnerName}/${repoName}` : name} rel='noopener noreferrer'>
            <ExternalLinkIcon className='t-icon t-icon-muted t-icon-small' />
          </a>
        </div>
      </div>
    </div>
  )
}
