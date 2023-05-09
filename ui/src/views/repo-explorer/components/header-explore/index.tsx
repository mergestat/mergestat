import { useMutation } from '@apollo/client'
import { useEffect } from 'react'
import { ExploreData } from 'src/@types'
import { ExploreUiMutation } from 'src/api-logic/graphql/generated/schema'
import { EXPLORE } from 'src/api-logic/graphql/mutations/explore'
import { useRepoExploreContext, useRepoExploreSetState } from 'src/state/contexts/repo-explore.context'
import FiltersSection from './components/filters-section'
import SearchSection from './components/search-section'
import TitleSection from './components/title-section'

const HeaderExplore: React.FC = () => {
  const [{ search, filterRepo, filterFile, filterAuthor, filterRepoDays, filterFileDays }] = useRepoExploreContext()
  const { setLoading, setExploreData } = useRepoExploreSetState()

  const [explore, { loading }] = useMutation(EXPLORE, {
    onCompleted: (data: ExploreUiMutation) => {
      setExploreData(data.exploreUi?.json as ExploreData)
    }
  })

  useEffect(() => {
    setLoading(loading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  const executeExplore = () => {
    explore({
      variables: {
        params: {
          file_path_pattern: search,
          repo_pattern: filterRepo,
          file_contents_pattern: filterFile,
          author_name_pattern: filterAuthor,
          repo_older_than_days: filterRepoDays,
          file_older_than_days: filterFileDays
        }
      }
    })
  }

  return (
    <div className='flex flex-col bg-white w-full border-b px-8 py-4 gap-4'>
      <TitleSection />
      <SearchSection executeExplore={executeExplore} />
      <FiltersSection executeExplore={executeExplore} />
    </div>
  )
}

export default HeaderExplore
