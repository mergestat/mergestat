import { ExternalLinkIcon } from '@mergestat/icons'
import type { RepoType } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { GITHUB_URL } from 'src/utils/constants'

interface PageHeaderProps {
  name: string
  type: RepoType
}

export const PageHeader = ({ name, type }: PageHeaderProps) => {
<<<<<<< HEAD
  const router = useRouter()
  const repoOwnerName = name.split('/')[0]
  const repoName = name.split('/')[1]
  const crumbs = [
    {
      text: 'Repos',
      onClick: () => router.push('/repos'),
    },
    {
      text: name,
      startIcon: <RepoImage repoType={type} orgName={repoOwnerName} />,
      endIcon: (
        <a target="_blank" href={type === 'github' ? `${GITHUB_URL + repoOwnerName}/${repoName}` : name} rel="noopener noreferrer">
          <ExternalLinkIcon className='t-icon t-icon-muted t-icon-small' />
        </a>
      ),
    }
  ]
=======
  const repoName = name.split('/')[0]
>>>>>>> feat: add placeholder breadcrumbs and replace current breadcrumbs with static titles

  return (
    <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
      <div className="flex items-center space-x-1">
        <div className="text-xl font-semibold flex items-center space-x-1">
          <RepoImage repoType={type} orgName={repoName} />
          <span>{name}</span>
          <a target='_blank' href={type === 'github' ? GITHUB_URL + repoName : repoName} rel='noopener noreferrer'>
            <ExternalLinkIcon className='t-icon t-icon-muted t-icon-small' />
          </a>
        </div>
      </div>
    </div>
  )
}
