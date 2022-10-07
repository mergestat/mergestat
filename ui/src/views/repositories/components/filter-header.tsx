import { Input } from '@mergestat/blocks'
import { SearchIcon } from '@mergestat/icons'
import { debounce } from 'lodash'
import React from 'react'
import { useRepositoriesSetState } from 'src/state/contexts'
import { TEST_IDS } from 'src/utils/constants'

export const FilterHeader: React.FC = () => {
  const { setSearch } = useRepositoriesSetState()

  const onChange = debounce((e) => setSearch(e.target.value), 300)

  return (
    <div className="flex h-14 bg-white items-center justify-between px-8">
      <Input data-testid={TEST_IDS.inputRepoSearch}
        placeholder="Search..."
        startIcon={<SearchIcon className="t-icon text-gray-400" />}
        className="w-full lg_w-2/5"
        onChange={onChange}
      />
    </div>
  )
}
