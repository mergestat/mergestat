import { ExternalLinkIcon, RepositoryIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import RepoImage from 'src/components/RepoImage'
import { useGlobalSetState } from 'src/state/contexts'

interface PageHeaderProps {
  name: string
  vendor: string
  vendorUrl?: string
  externalRepoLink?: string
}

export const PageHeader = ({ name, vendor, vendorUrl, externalRepoLink }: PageHeaderProps) => {
  const router = useRouter()
  const { setCrumbs } = useGlobalSetState()

  const repoOwnerName = name.split('/')[0]

  useEffect(() => {
    const crumbs = [
      {
        text: 'Repos',
        startIcon: <RepositoryIcon className='t-icon t-icon-default' />,
        onClick: () => router.push('/v1/repos'),
      },
    ]

    setCrumbs(crumbs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
      <div className="flex items-center space-x-1">
        <div className="text-xl font-semibold flex items-center space-x-1">
          <RepoImage vendor={vendor} vendorUrl={vendorUrl} orgName={repoOwnerName} />
          <span className='pl-1'>{name}</span>
          {externalRepoLink && <a target='_blank' href={externalRepoLink} rel='noopener noreferrer'>
            <ExternalLinkIcon className='t-icon t-icon-muted t-icon-small' />
          </a>}
        </div>
      </div>
    </div>
  )
}
