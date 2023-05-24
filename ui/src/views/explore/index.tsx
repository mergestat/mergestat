import { ChartSquareBarIcon } from '@mergestat/icons'
import { useEffect } from 'react'
import { useGlobalSetState } from 'src/state/contexts'
import { useRepoExploreContext } from 'src/state/contexts/repo-explore.context'
import { EmptyData } from '../shared/empty-data'
import CardsStatsExplore from './components/cards-stats-explore'
import HeaderExplore from './components/header-explore'
import StatsExplore from './components/stats-explore'

const RepoExplorerView: React.FC = () => {
  const [{ empty, results }] = useRepoExploreContext()

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
        {!results && !empty && <EmptyData message='No results' icon={<ChartSquareBarIcon className="t-icon" />} />}
        {empty && <EmptyData message='Select a filter to get started' icon={<ChartSquareBarIcon className="t-icon" />} />}
        {results &&
          <div className='px-8 py-4 flex-1 overflow-auto'>
            <StatsExplore />
            <CardsStatsExplore />
          </div>
        }
      </div>
    </>
  )
}

export default RepoExplorerView
