import { RepositoryIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useGlobalSetState } from 'src/state/contexts'

const useRepoSyncCrumb = () => {
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
        text: 'Repo Syncs',
        onClick: () => router.push('/repos/repo-syncs'),
      },
    ]

    setCrumbs(crumbs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useRepoSyncCrumb
