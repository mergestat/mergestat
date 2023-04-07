import { Input } from '@mergestat/blocks'
import { SearchIcon } from '@mergestat/icons'
import cx from 'classnames'
import { debounce } from 'lodash'
import React, { KeyboardEvent } from 'react'

type FilterHeaderProps = {
  initValue?: string
  inputClass?: string
  setSearch: (search: string) => void
}

export const FilterHeader: React.FC<FilterHeaderProps> = ({ initValue = '', inputClass, setSearch }) => {
  const onChange = debounce((e) => setSearch(e.target.value), 300)

  return (
    <div className='px-8 py-3 w-full flex h-16'>
      <div className='flex-1 flex items-center overflow-x-auto overflow-y-hidden'>
        <Input placeholder="Search..."
          startIcon={<SearchIcon className="t-icon t-icon-muted" />}
          className={cx('w-full lg_w-3/6', inputClass)}
          defaultValue={initValue}
          onChange={onChange}
          onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter' && setSearch((e.target as HTMLInputElement).value))}
        />
      </div>
    </div>
  )
}
