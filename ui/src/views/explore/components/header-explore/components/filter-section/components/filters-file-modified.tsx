import { MutationFunctionOptions } from '@apollo/client'
import { Input, Label } from '@mergestat/blocks'
import React, { ChangeEvent, PropsWithChildren } from 'react'
import { ExploreUiQuery } from 'src/api-logic/graphql/generated/schema'
import { useExploreFilters } from 'src/views/hooks/explore/useExploreFilters'
import Filter from './filter'

type Props = PropsWithChildren<{
  explore: (options?: MutationFunctionOptions<ExploreUiQuery> | undefined) => void
}>

const FiltersFileModified: React.FC<Props> = ({ explore }: Props) => {
  const {
    filterFileDays,
    filterNotFileDays,
    filterFileDaysSaved,
    filterNotFileDaysSaved,
    filter,
    handleDaysChange,
    onKeyEnter
  } = useExploreFilters(explore)

  return (
    <>
      <Filter
        label='File modified last'
        defaultValue={filterFileDaysSaved}
        value={filterFileDays ? `${filterFileDays}d` : undefined}
        reset={() => filter('days_since_file_modified_last', undefined)}
        explore={() => filter('days_since_file_modified_last', filterFileDays)}
        overlay={(close, show) => (
          <>
            <Label>Is in the last</Label>
            <div className='flex space-x-4'>
              <Input
                value={filterFileDays || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleDaysChange('days_since_file_modified_last', e.target.value)}
                onKeyUp={onKeyEnter('days_since_file_modified_last', filterFileDays, close, show)}
              />
              <Label>Days</Label>
            </div>
          </>
        )}
      />

      <Filter
        label='File not modified last'
        defaultValue={filterNotFileDaysSaved}
        value={filterNotFileDays ? `${filterNotFileDays}d` : undefined}
        reset={() => filter('days_since_file_not_modified_last', undefined)}
        explore={() => filter('days_since_file_not_modified_last', filterNotFileDays)}
        overlay={(close, show) => (
          <>
            <Label>Is not in the last</Label>
            <div className='flex space-x-4'>
              <Input
                value={filterNotFileDays || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleDaysChange('days_since_file_not_modified_last', e.target.value)}
                onKeyUp={onKeyEnter('days_since_file_not_modified_last', filterNotFileDays, close, show)}
              />
              <Label>Days</Label>
            </div>
          </>
        )}
      />
    </>
  )
}

export default FiltersFileModified
