import { Filter, Input } from '@mergestat/blocks'
import { SearchIcon } from '@mergestat/icons'
import React from 'react'
import { TagsListDropDown } from '../drop-downs'

export const FilterHeader: React.FC = (props) => {
  return (
    <div className="flex h-14 bg-white items-center justify-between px-8">
      <div className="flex gap-2">
        <TagsListDropDown trigger={<Filter>Tags</Filter>} />
      </div>

      <Input
        placeholder="Search..."
        startIcon={<SearchIcon className="t-icon text-gray-400" />}
        className="w-1/3"
        disabled
      />
    </div>
  )
}

