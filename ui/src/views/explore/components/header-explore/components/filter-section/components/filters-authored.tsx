import { MutationFunctionOptions } from '@apollo/client'
import { Input, Label } from '@mergestat/blocks'
import React, { ChangeEvent, PropsWithChildren } from 'react'
import { ExploreUiQuery } from 'src/api-logic/graphql/generated/schema'
import { useExploreFilters } from 'src/views/hooks/explore/useExploreFilters'
import Filter from './filter'

type Props = PropsWithChildren<{
  explore: (options?: MutationFunctionOptions<ExploreUiQuery> | undefined) => void
}>

const FiltersAuthored: React.FC<Props> = ({ explore }: Props) => {
  const {
    filterAuthoredDays,
    filterNotAuthoredDays,
    filter,
    handleDaysChange,
    onKeyEnter
  } = useExploreFilters(explore)

  return (
    <>
      <Filter
        label='Authored last'
        value={filterAuthoredDays ? `${filterAuthoredDays}d` : undefined}
        reset={() => filter('days_since_authored_last', undefined)}
        explore={() => filter('days_since_authored_last', filterAuthoredDays)}
        overlay={(close, show) => (
          <>
            <Label>Is in the last</Label>
            <div className='flex space-x-4'>
              <Input
                value={filterAuthoredDays || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleDaysChange('days_since_authored_last', e.target.value)}
                onKeyUp={onKeyEnter('days_since_authored_last', filterAuthoredDays, close, show)}
              />
              <Label>Days</Label>
            </div>
          </>
        )}
      />

      <Filter
        label='Not authored last'
        value={filterNotAuthoredDays ? `${filterNotAuthoredDays}d` : undefined}
        reset={() => filter('days_since_not_authored_last', undefined)}
        explore={() => filter('days_since_not_authored_last', filterNotAuthoredDays)}
        overlay={(close, show) => (
          <>
            <Label>Is not in the last</Label>
            <div className='flex space-x-4'>
              <Input
                value={filterNotAuthoredDays || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleDaysChange('days_since_not_authored_last', e.target.value)}
                onKeyUp={onKeyEnter('days_since_not_authored_last', filterNotAuthoredDays, close, show)}
              />
              <Label>Days</Label>
            </div>
          </>
        )}
      />
    </>
  )
}

export default FiltersAuthored
