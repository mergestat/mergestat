import { Button, Input, Label } from '@mergestat/blocks'
import React, { KeyboardEvent, PropsWithChildren } from 'react'
import { useRepoExploreContext, useRepoExploreSetState } from 'src/state/contexts/repo-explore.context'

type SearchSectionProps = PropsWithChildren<{
  executeExplore: () => void
}>

const SearchSection: React.FC<SearchSectionProps> = ({ executeExplore }: SearchSectionProps) => {
  const [{ search }] = useRepoExploreContext()
  const { setSearch } = useRepoExploreSetState()

  return (
    <div className='flex justify-between gap-3'>
      <div className='flex flex-1'>
        <Label className='whitespace-nowrap text-gray-500 pr-8'>File Path</Label>
        <Input
          id='search'
          placeholder='%.go'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => (search && e.key === 'Enter' && executeExplore())}
        />
      </div>

      <Button
        label='Search'
        disabled={!search}
        className='whitespace-nowrap'
        onClick={() => executeExplore()}
      />
    </div>
  )
}

export default SearchSection
