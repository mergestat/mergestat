import { ChartSquareBarIcon } from '@mergestat/icons'
import { PropsWithChildren, useEffect } from 'react'
import { useExploreContext, useExploreSetState } from 'src/state/contexts/repo-explore.context'
import useCrumbsInit from '../hooks/useCrumbsInit'
import { EmptyData } from '../shared/empty-data'
import CardsStatsExplore from './components/cards-stats-explore'
import HeaderExplore from './components/header-explore'
import StatsExplore from './components/stats-explore'

type Props = PropsWithChildren<{
  savedExploreId?: string | string[]
}>

const ExploreView: React.FC<Props> = ({ savedExploreId }: Props) => {
  useCrumbsInit()

  const [{ empty, results }] = useExploreContext()
  const { setSavedExloreId } = useExploreSetState()

  useEffect(() => {
    if (savedExploreId) {
      setSavedExloreId(savedExploreId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedExploreId])

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

export default ExploreView
