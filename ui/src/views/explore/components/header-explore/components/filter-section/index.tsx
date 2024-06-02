import { MutationFunctionOptions } from '@apollo/client'
import { Button } from '@mergestat/blocks'
import React, { PropsWithChildren } from 'react'
import { ExploreUiQuery } from 'src/api-logic/graphql/generated/schema'
import { useExploreContext } from 'src/state/contexts/repo-explore.context'
import { useExploreFilters } from 'src/views/hooks/explore/useExploreFilters'
import FiltersAuthored from './components/filters-authored'
import FiltersCommitted from './components/filters-committed'
import FiltersFileModified from './components/filters-file-modified'
import FiltersGenerals from './components/filters-generals'
import FiltersRepoModified from './components/filters-repo-modified'

type Props = PropsWithChildren<{
  explore: (options?: MutationFunctionOptions<ExploreUiQuery> | undefined) => void
}>

const FiltersSection: React.FC<Props> = ({ explore }: Props) => {
  const [{ empty }] = useExploreContext()
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
        disabled={empty}
        onClick={clearFilters}
      />
    </div>
  )
}

export default FiltersSection
