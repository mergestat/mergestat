import { Input } from '@mergestat/blocks'
import { SearchIcon } from '@mergestat/icons'
import { debounce } from 'lodash'
import React, { KeyboardEvent } from 'react'

type FilterHeaderProps = {
  initValue?: string
  setSearch: (search: string) => void
}

export const FilterHeader: React.FC<FilterHeaderProps> = ({ initValue = '', setSearch }) => {
  const onChange = debounce((e) => setSearch(e.target.value), 300)

  return (
    <div className='px-8 py-3 w-full flex'>
      <div className='flex-1 overflow-x-auto overflow-y-hidden'>
        <Input placeholder="Search..."
          startIcon={<SearchIcon className="t-icon t-icon-muted" />}
          className="lg_w-3/6"
          defaultValue={initValue}
          onChange={onChange}
          onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter' && setSearch((e.target as HTMLInputElement).value))}
        />
      </div>
    </div>
  )
}
