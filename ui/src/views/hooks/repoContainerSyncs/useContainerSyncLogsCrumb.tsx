import { ExternalLinkIcon, RepositoryIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ContainerSyncInfo, RepoBasicData } from 'src/@types'
import { GetLogsOfContainerSyncQuery } from 'src/api-logic/graphql/generated/schema'
import RepoImage from 'src/components/RepoImage'
import { useGlobalSetState } from 'src/state/contexts'
import { SYNC_STATUS } from 'src/utils/constants'
import { RepoContainerSyncIcon } from 'src/views/repos-containers/components/repo-container-sync-icon'

const useContainerSyncLogsCrumb = (repo: RepoBasicData, sync?: ContainerSyncInfo, data?: GetLogsOfContainerSyncQuery) => {
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
        onClick: () => router.push(`/repos/${repo.id}`),
      },
      {
        text: sync?.name || '',
        startIcon: <RepoContainerSyncIcon type={sync?.syncState || SYNC_STATUS.empty} />,
        onClick: () => router.push(`/repos/${repo.id}/${sync?.id}`),
      },
    ]

    setCrumbs(crumbs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
}

export default useContainerSyncLogsCrumb
