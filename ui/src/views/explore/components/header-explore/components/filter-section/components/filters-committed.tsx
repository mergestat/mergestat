import { MutationFunctionOptions } from '@apollo/client'
import { Input, Label } from '@mergestat/blocks'
import React, { ChangeEvent, PropsWithChildren } from 'react'
import { ExploreUiQuery } from 'src/api-logic/graphql/generated/schema'
import { useExploreFilters } from 'src/views/hooks/explore/useExploreFilters'
import Filter from './filter'

type Props = PropsWithChildren<{
  explore: (options?: MutationFunctionOptions<ExploreUiQuery> | undefined) => void
}>

const FiltersCommitted: React.FC<Props> = ({ explore }: Props) => {
  const {
    filterCommittedDays,
    filterNotCommittedDays,
    filter,
    handleDaysChange,
    onKeyEnter
  } = useExploreFilters(explore)

  return (
    <>
      <Filter
        label='Committed last'
        value={filterCommittedDays ? `${filterCommittedDays}d` : undefined}
        reset={() => filter('days_since_committed_last', undefined)}
        explore={() => filter('days_since_committed_last', filterCommittedDays)}
        overlay={(close, show) => (
          <>
            <Label>Is in the last</Label>
            <div className='flex space-x-4'>
              <Input
                value={filterCommittedDays || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleDaysChange('days_since_committed_last', e.target.value)}
                onKeyUp={onKeyEnter('days_since_committed_last', filterCommittedDays, close, show)}
              />
              <Label>Days</Label>
            </div>
          </>
        )}
      />

      <Filter
        label='Not committed last'
        value={filterNotCommittedDays ? `${filterNotCommittedDays}d` : undefined}
        reset={() => filter('days_since_not_committed_last', undefined)}
        explore={() => filter('days_since_not_committed_last', filterNotCommittedDays)}
        overlay={(close, show) => (
          <>
            <Label>Is not in the last</Label>
            <div className='flex space-x-4'>
              <Input
                value={filterNotCommittedDays || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleDaysChange('days_since_not_committed_last', e.target.value)}
                onKeyUp={onKeyEnter('days_since_not_committed_last', filterNotCommittedDays, close, show)}
              />
              <Label>Days</Label>
            </div>
          </>
        )}
      />
    </>
  )
}

export default FiltersCommitted
