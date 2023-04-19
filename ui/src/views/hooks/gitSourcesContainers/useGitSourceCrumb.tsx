import { RepositoryIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useGlobalSetState } from 'src/state/contexts'

const useGitSourceCrumb = () => {
  const router = useRouter()
  const { setCrumbs } = useGlobalSetState()

  useEffect(() => {
    const crumbs = [
      {
        text: 'Repos',
        startIcon: <RepositoryIcon className='t-icon t-icon-default' />,
        onClick: () => router.push('/repos-containers'),
      },
      {
        text: 'Git Sources',
        onClick: () => router.push('/repos-containers/git-sources'),
      },
    ]

    setCrumbs(crumbs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useGitSourceCrumb
