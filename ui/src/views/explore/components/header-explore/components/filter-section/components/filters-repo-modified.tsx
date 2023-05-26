import { MutationFunctionOptions } from '@apollo/client'
import { Input, Label } from '@mergestat/blocks'
import React, { ChangeEvent, PropsWithChildren } from 'react'
import { ExploreUiQuery } from 'src/api-logic/graphql/generated/schema'
import { useExploreFilters } from 'src/views/hooks/explore/useExploreFilters'
import Filter from './filter'

type Props = PropsWithChildren<{
  explore: (options?: MutationFunctionOptions<ExploreUiQuery> | undefined) => void
}>

const FiltersRepoModified: React.FC<Props> = ({ explore }: Props) => {
  const {
    filterRepoDays,
    filterNotRepoDays,
    filter,
    handleDaysChange,
    onKeyEnter
  } = useExploreFilters(explore)

  return (
    <>
      <Filter
        label='Repo modified last'
        value={filterRepoDays ? `${filterRepoDays}d` : undefined}
        reset={() => filter('days_since_repo_modified_last', undefined)}
        explore={() => filter('days_since_repo_modified_last', filterRepoDays)}
        overlay={(close, show) => (
          <>
            <Label>Is in the last</Label>
            <div className='flex space-x-4'>
              <Input
                value={filterRepoDays || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleDaysChange('days_since_repo_modified_last', e.target.value)}
                onKeyUp={onKeyEnter('days_since_repo_modified_last', filterRepoDays, close, show)}
              />
              <Label>Days</Label>
            </div>
          </>
        )}
      />

      <Filter
        label='Repo not modified last'
        value={filterNotRepoDays ? `${filterNotRepoDays}d` : undefined}
        reset={() => filter('days_since_repo_not_modified_last', undefined)}
        explore={() => filter('days_since_repo_not_modified_last', filterNotRepoDays)}
        overlay={(close, show) => (
          <>
            <Label>Is not in the last</Label>
            <div className='flex space-x-4'>
              <Input
                value={filterNotRepoDays || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleDaysChange('days_since_repo_not_modified_last', e.target.value)}
                onKeyUp={onKeyEnter('days_since_repo_not_modified_last', filterNotRepoDays, close, show)}
              />
              <Label>Days</Label>
            </div>
          </>
        )}
      />
    </>
  )
}

export default FiltersRepoModified
