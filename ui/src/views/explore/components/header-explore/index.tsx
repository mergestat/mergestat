import { useLazyQuery } from '@apollo/client'
import { useEffect } from 'react'
import { ExploreData } from 'src/@types'
import { ExploreUiQuery } from 'src/api-logic/graphql/generated/schema'
import { EXPLORE } from 'src/api-logic/graphql/queries/explore'
import { useExploreSetState } from 'src/state/contexts/repo-explore.context'
import FiltersSection from './components/filter-section'
import TitleSection from './components/title-section'

const HeaderExplore: React.FC = () => {
  const { setLoading, setExploreData, setResults } = useExploreSetState()

  const [explore, { loading, data }] = useLazyQuery(EXPLORE, {
    onCompleted: (data: ExploreUiQuery) => {
      const { authors, files, repos, top_10_authors: topFiles, top_10_repos: topRepos } = data.exploreUi
      if (!authors && !files && !repos && !topFiles && !topRepos) {
        setResults(false)
      } else {
        setResults(true)
      }
    }
  })

  useEffect(() => {
    setLoading(loading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  useEffect(() => {
    data && setExploreData(data.exploreUi as ExploreData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div className='flex flex-col bg-white w-full border-b px-8 py-4 gap-4'>
      <TitleSection explore={explore} />
      <FiltersSection explore={explore} />
    </div>
  )
}

export default HeaderExplore
