import { Filter, Input } from '@mergestat/blocks'
import { SearchIcon } from '@mergestat/icons'
import React from 'react'

export const ReposTableFilterHeader: React.FC = () => {
  return (
    <div className="flex h-14 bg-white items-center justify-between px-8">
      <div className="flex gap-2">
        <Filter>Tags</Filter>
        <Filter>Filter label</Filter>
        <Filter>Filter label</Filter>
      </div>
      <Input
        placeholder="Search..."
        startIcon={<SearchIcon className="t-icon text-gray-400" />}
      />
    </div>
  )
}
