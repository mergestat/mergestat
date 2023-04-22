import { RepositoryIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useGlobalSetState } from 'src/state/contexts'
import FilterExplore from './components/filter-explore'
import HeaderExplore from './components/header-explore'
import StatsExplore from './components/stats-explore'

const RepoExplorerView: React.FC = () => {
  const router = useRouter()
  const { setCrumbs } = useGlobalSetState()

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
    <>
      <div className='flex flex-col flex-1 overflow-hidden'>
        {/* Header */}
        <HeaderExplore />

        {/* Body */}
        <FilterExplore />

        <div className='px-8 py-4'>
          <StatsExplore loading={false} repos={0} files={0} authors={0} />
        </div>
      </div>
    </>
  )
}

export default RepoExplorerView
