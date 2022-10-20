import { BreadcrumbNav } from '@mergestat/blocks'
import { ExternalLinkIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import type { RepoType } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { GITHUB_URL } from 'src/utils/constants'

interface PageHeaderProps {
  name: string
  type: RepoType
}

export const PageHeader = ({ name, type }: PageHeaderProps) => {
  const router = useRouter()
  const repoName = name.split('/')[0]
  const crumbs = [
    {
      text: 'Repos',
      onClick: () => router.push('/repos'),
    },
    {
      text: name,
      startIcon: <RepoImage repoType={type} orgName={repoName} />,
      endIcon: (
        <a target='_blank' href={type === 'github' ? GITHUB_URL + repoName : repoName} rel='noopener noreferrer'>
          <ExternalLinkIcon className='t-icon t-icon-muted t-icon-small' />
        </a>
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
