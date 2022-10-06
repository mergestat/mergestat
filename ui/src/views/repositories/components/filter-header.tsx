import { Filter, Input } from '@mergestat/blocks'
import { SearchIcon } from '@mergestat/icons'
import { debounce } from 'lodash'
import React from 'react'
import { useRepositoriesSetState } from 'src/state/contexts'
import { TEST_IDS } from 'src/utils/constants'
import { TagsListDropDown } from '../drop-downs'

export const FilterHeader: React.FC = () => {
  const { setSearch } = useRepositoriesSetState()

  const onChange = debounce((e) => setSearch(e.target.value), 300)

  return (
    <div className="flex h-14 bg-white items-center justify-between px-8">
      <div className="flex gap-2">
        {/* <TagsListDropDown trigger={<Filter>Tags</Filter>} /> */}
      </div>

      <Input data-testid={TEST_IDS.inputRepoSearch}
        placeholder="Search..."
        startIcon={<SearchIcon className="t-icon text-gray-400" />}
        className="w-1/3"
        onChange={onChange}
      />
    </div>
  )
}
