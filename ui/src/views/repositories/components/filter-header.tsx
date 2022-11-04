import { Button, Input, Label, Select, Toolbar } from '@mergestat/blocks'
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@mergestat/icons'
import { debounce } from 'lodash'
import React from 'react'
import { useRepositoriesContext, useRepositoriesSetState } from 'src/state/contexts'
import { getMaxPagination } from 'src/utils'
import { TEST_IDS } from 'src/utils/constants'

export const FilterHeader: React.FC = () => {
  const [{ totalRepos, rowsRepos, pageRepos }] = useRepositoriesContext()
  const { setSearch, setRowsRepos, setPageRepos } = useRepositoriesSetState()

  const onChange = debounce((e) => setSearch(e.target.value), 300)

  return (
    <div className='mb-6 w-full flex'>
      <Input data-testid={TEST_IDS.inputRepoSearch}
        placeholder="Search..."
        startIcon={<SearchIcon className="t-icon t-icon-muted" />}
        className="lg_w-2/5"
        onChange={onChange}
      />

      <div className='flex-1 overflow-x-auto overflow-y-hidden'>
        <Toolbar className='t-toolbar flex-1 w-auto h-full space-x-4'>
          <Toolbar.Right className='space-x-4 divide-x'>
            <Toolbar.Item>
              <div className='flex items-center'>
                <Label className='mr-2 whitespace-nowrap' htmlFor='rowsPerPage'>
                  Rows per page
                </Label>
                <Select
                  id='rowsPerPage'
                  className="w-20"
                  defaultValue='20'
                  onChange={e => {
                    setPageRepos(0)
                    setRowsRepos(+e.target.value)
                  }}
                >
                  <option value='10'>10</option>
                  <option value='20'>20</option>
                  <option value='50'>50</option>
                  <option value='100'>100</option>
                </Select>
              </div>
            </Toolbar.Item>
            <Toolbar.Item className='pl-4 pr-1'>
              <div className='flex items-center space-x-2 py-1'>
                <p className='t-text-muted whitespace-nowrap text-sm'>
                  {`${(pageRepos * rowsRepos) + 1}-${getMaxPagination(pageRepos, rowsRepos, totalRepos)} of ${totalRepos}`}
                </p>
                <Button
                  isIconOnly
                  disabled={pageRepos === 0}
                  skin='borderless'
                  startIcon={<ChevronLeftIcon className='t-icon' />}
                  onClick={() => setPageRepos(pageRepos - 1)}
                />
                <Button
                  isIconOnly
                  disabled={getMaxPagination(pageRepos, rowsRepos, totalRepos) >= totalRepos}
                  skin='borderless'
                  startIcon={<ChevronRightIcon className='t-icon' />}
                  onClick={() => setPageRepos(pageRepos + 1)}
                />
              </div>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </div>
    </div>
  )
}
