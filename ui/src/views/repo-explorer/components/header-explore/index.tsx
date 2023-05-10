import { useMutation } from '@apollo/client'
import { useEffect } from 'react'
import { ExploreData } from 'src/@types'
import { ExploreUiMutation } from 'src/api-logic/graphql/generated/schema'
import { EXPLORE } from 'src/api-logic/graphql/mutations/explore'
import { useRepoExploreSetState } from 'src/state/contexts/repo-explore.context'
import FiltersSection from './components/filters-section'
import SearchSection from './components/search-section'
import TitleSection from './components/title-section'

const HeaderExplore: React.FC = () => {
  const { setLoading, setExploreData } = useRepoExploreSetState()

  const [explore, { loading }] = useMutation(EXPLORE, {
    onError: () => null,
    onCompleted: (data: ExploreUiMutation) => {
      setExploreData(data.exploreUi?.json as ExploreData)
    }
  })

  useEffect(() => {
    setLoading(loading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  return (
    <div className='flex flex-col bg-white w-full border-b px-8 py-4 gap-4'>
      <TitleSection />
      <SearchSection explore={explore} />
      <FiltersSection explore={explore} />
    </div>
  )
}

export default HeaderExplore
