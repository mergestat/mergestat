import { Button, Input, Label } from '@mergestat/blocks'
import React, { ChangeEvent, PropsWithChildren } from 'react'
import { useRepoExploreContext, useRepoExploreSetState } from 'src/state/contexts/repo-explore.context'
import Filter from './filter'

type FiltersSectionProps = PropsWithChildren<{
  executeExplore: () => void
}>

const FiltersSection: React.FC<FiltersSectionProps> = ({ executeExplore }: FiltersSectionProps) => {
  const [{ filterRepo, filterFile, filterAuthor, filterRepoDays, filterFileDays }] = useRepoExploreContext()
  const { setFilterRepo, setFilterFile, setFilterAuthor, setFilterRepoDays, setFilterFileDays } = useRepoExploreSetState()

  const handleDaysChange = (e: ChangeEvent<HTMLInputElement>, setValue: (value: string) => void) => {
    const value = e.target.value
    const regex = /^[0-9\b]+$/
    if (value.length <= 3 && (value === '' || regex.test(value))) {
      setValue(value)
    }
  }

  const clearFilters = () => {
    setFilterRepo(undefined)
    setFilterFile(undefined)
    setFilterAuthor(undefined)
    setFilterRepoDays(undefined)
    setFilterFileDays(undefined)
  }

  return (
    <div className='flex flex-wrap items-center'>
      <Filter label='Repo' value={filterRepo} setValue={setFilterRepo} apply={executeExplore}>
        <Label>Matches pattern</Label>
        <Input value={filterRepo || ''} placeholder="mergestat/mergestat%"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFilterRepo(e.target.value)}
        />
      </Filter>

      <Filter label='File contents' value={filterFile} setValue={setFilterFile} apply={executeExplore}>
        <Label>Matches pattern</Label>
        <Input value={filterFile || ''} placeholder="example%"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFilterFile(e.target.value)}
        />
      </Filter>

      <Filter label='Author' value={filterAuthor} setValue={setFilterAuthor} apply={executeExplore}>
        <Label>Matches pattern</Label>
        <Input value={filterAuthor || ''} placeholder="author-name%"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFilterAuthor(e.target.value)}
        />
      </Filter>

      <Filter label='Repo modified last' value={filterRepoDays ? `${filterRepoDays}d` : undefined} setValue={setFilterRepoDays} apply={executeExplore}>
        <Label>Is in the last</Label>
        <div className='flex space-x-4'>
          <Input
            value={filterRepoDays || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleDaysChange(e, setFilterRepoDays)}
          />
          <Label>Days</Label>
        </div>
      </Filter>

      <Filter label='File modified last' value={filterFileDays ? `${filterFileDays}d` : undefined} setValue={setFilterFileDays} apply={executeExplore}>
        <Label>Is in the last</Label>
        <div className='flex space-x-4'>
          <Input
            value={filterFileDays || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleDaysChange(e, setFilterFileDays)}
          />
          <Label>Days</Label>
        </div>
      </Filter>

      <Button
        style={{ minHeight: '2.2rem' }}
        className='ml-2 text-thin my-1 p-0 h-2'
        label="Clear filters"
        skin="borderless"
        size='small'
        onClick={clearFilters}
      />
    </div>
  )
}

export default FiltersSection
