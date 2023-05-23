import { ChartSquareBarIcon } from '@mergestat/icons'
import { useEffect } from 'react'
import { useGlobalSetState } from 'src/state/contexts'
import { useRepoExploreContext } from 'src/state/contexts/repo-explore.context'
import { EmptyData } from '../shared/empty-data'
import CardsStatsExplore from './components/cards-stats-explore'
import HeaderExplore from './components/header-explore'
import StatsExplore from './components/stats-explore'

const RepoExplorerView: React.FC = () => {
  const [{ exploreExecuted }] = useRepoExploreContext()

  const { setCrumbs } = useGlobalSetState()

  useEffect(() => {
    setCrumbs([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className='flex flex-col flex-1 overflow-hidden'>
        {/* Header */}
        <HeaderExplore />

        {/* Body */}
        {exploreExecuted
          ? <div className='px-8 py-4 flex-1 overflow-auto'>
            <StatsExplore />
            <CardsStatsExplore />
          </div>
          : <EmptyData message='Select a filter to get started' icon={<ChartSquareBarIcon className="t-icon" />} />
        }
      </div>
    </>
  )
}

export default RepoExplorerView
