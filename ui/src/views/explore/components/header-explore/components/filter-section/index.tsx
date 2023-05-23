import { useLazyQuery } from '@apollo/client'
import { Button } from '@mergestat/blocks'
import React, { useEffect } from 'react'
import { ExploreData } from 'src/@types'
import { EXPLORE } from 'src/api-logic/graphql/mutations/explore'
import { useRepoExploreContext, useRepoExploreSetState } from 'src/state/contexts/repo-explore.context'
import { useExploreFilters } from 'src/views/hooks/repoExplore/useExploreFilters'
import FiltersAuthored from './components/filters-authored'
import FiltersCommitted from './components/filters-committed'
import FiltersFileModified from './components/filters-file-modified'
import FiltersGenerals from './components/filters-generals'
import FiltersRepoModified from './components/filters-repo-modified'

const FiltersSection: React.FC = () => {
  const { setLoading, setExploreData } = useRepoExploreSetState()
  const [{ exploreExecuted }] = useRepoExploreContext()

  const [explore, { loading, data }] = useLazyQuery(EXPLORE)

  useEffect(() => {
    setLoading(loading)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  useEffect(() => {
    data && setExploreData(data.exploreUi as ExploreData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const { clearFilters } = useExploreFilters(explore)

  return (
    <div className='flex flex-wrap items-center'>
      <FiltersGenerals explore={explore} />
      <FiltersRepoModified explore={explore} />
      <FiltersFileModified explore={explore} />
      <FiltersAuthored explore={explore} />
      <FiltersCommitted explore={explore} />

      <Button
        style={{ minHeight: '2.2rem' }}
        className='ml-2 text-thin my-1 p-0 h-2'
        label="Clear filters"
        skin="borderless"
        size='small'
        disabled={!exploreExecuted}
        onClick={clearFilters}
      />
    </div>
  )
}

export default FiltersSection
