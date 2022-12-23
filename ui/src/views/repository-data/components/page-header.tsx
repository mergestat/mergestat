import { ExternalLinkIcon } from '@mergestat/icons'
import type { RepoType } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { GITHUB_URL } from 'src/utils/constants'

interface PageHeaderProps {
  name: string
  type: RepoType
}

export const PageHeader = ({ name, type }: PageHeaderProps) => {
  const repoOwnerName = name.split('/')[0]
  const repoName = name.split('/')[1]

  return (
    <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
      <div className="flex items-center space-x-1">
        <div className="text-xl font-semibold flex items-center space-x-1">
          <RepoImage repoType={type} orgName={repoOwnerName} />
          <span>{name}</span>
          <a target='_blank' href={type === 'github' ? `${GITHUB_URL + repoOwnerName}/${repoName}` : name} rel='noopener noreferrer'>
            <ExternalLinkIcon className='t-icon t-icon-muted t-icon-small' />
          </a>
        </div>
      </div>
    </div>
  )
}
