import { MutationFunctionOptions } from '@apollo/client'
import { Button, Input, Label } from '@mergestat/blocks'
import React, { KeyboardEvent, PropsWithChildren } from 'react'
import { ExploreUiMutation } from 'src/api-logic/graphql/generated/schema'
import { useRepoExploreContext, useRepoExploreSetState } from 'src/state/contexts/repo-explore.context'

type SearchSectionProps = PropsWithChildren<{
  explore: (options?: MutationFunctionOptions<ExploreUiMutation> | undefined) => void
}>

const SearchSection: React.FC<SearchSectionProps> = ({ explore }: SearchSectionProps) => {
  const [{ params }] = useRepoExploreContext()
  const { setParams } = useRepoExploreSetState()

  return (
    <div className='flex justify-between gap-3'>
      <div className='flex flex-1'>
        <Label className='whitespace-nowrap text-gray-500 pr-8'>File Path</Label>
        <Input
          id='search'
          placeholder='%.go'
          value={params.file_path_pattern}
          onChange={(e) => setParams({
            ...params,
            file_path_pattern: e.target.value ? e.target.value : undefined
          })}
          onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => (
            e.key === 'Enter' && explore({ variables: { params } })
          )}
        />
      </div>

      <Button
        label='Search'
        className='whitespace-nowrap'
        onClick={() => explore({ variables: { params } })}
      />
    </div>
  )
}

export default SearchSection
