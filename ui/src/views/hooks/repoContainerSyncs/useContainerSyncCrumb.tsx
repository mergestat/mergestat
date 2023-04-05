import { ExternalLinkIcon, RepositoryIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { RepoBasicData } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { useGlobalSetState } from 'src/state/contexts'

const useContainerSyncCrumb = (repo: RepoBasicData) => {
  const router = useRouter()
  const { setCrumbs } = useGlobalSetState()

  useEffect(() => {
    const crumbs = [
      {
        text: 'Repos',
        startIcon: <RepositoryIcon className='t-icon t-icon-default' />,
        onClick: () => router.push('/repos'),
      },
      {
        text: repo.name,
        startIcon: <RepoImage vendor={repo.provider.vendor} vendorUrl={repo.provider.url} orgName={repo.name.split('/')[0]} size="6" />,
        endIcon: (repo.externalRepoLink
          ? <a target="_blank" href={repo.externalRepoLink} rel="noopener noreferrer">
            <ExternalLinkIcon className='t-icon t-icon-muted t-icon-small' />
          </a>
          : undefined
        ),
        onClick: () => router.push(`/repos/${repo.id}/container-syncs`),
      },
    ]

    setCrumbs(crumbs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useContainerSyncCrumb
