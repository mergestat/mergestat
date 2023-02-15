import { Button, Label, Select, Toolbar } from '@mergestat/blocks'
import { ChevronLeftIcon, ChevronRightIcon } from '@mergestat/icons'
import React from 'react'
import { useSavedQueryContext, useSavedQuerySetState } from 'src/state/contexts/saved-query.context'
import { getMaxPagination } from 'src/utils'

export const FilterFooter: React.FC = () => {
  const [{ total, rows, page }] = useSavedQueryContext()
  const { setRows, setPage } = useSavedQuerySetState()

  return (
    <div className='px-8 h-14 w-full flex items-center bg-white border-t t-border-default'>
      <div className='flex-1 overflow-x-auto overflow-y-hidden'>
        <Toolbar className='t-toolbar flex-1 w-auto h-full space-x-4'>
          <Toolbar.Left className='space-x-4 divide-x'>
            <Toolbar.Item>
              <div className='flex items-center'>
                <Label className='mr-2 whitespace-nowrap text-gray-500' htmlFor='resultsPerPage'>
                  Results per page
                </Label>
                <Select
                  id='resultsPerPage'
                  className="w-20"
                  defaultValue='20'
                  onChange={e => {
                    setPage(0)
                    setRows(+e.target.value)
                  }}
                >
                  <option value='10'>10</option>
                  <option value='20'>20</option>
                  <option value='50'>50</option>
                  <option value='100'>100</option>
                </Select>
              </div>
            </Toolbar.Item>
          </Toolbar.Left>
          <Toolbar.Right className='space-x-4 divide-x'>
            <Toolbar.Item className='pl-4 pr-1'>
              <div className='flex items-center space-x-2 py-1'>
                <p className='t-text-muted whitespace-nowrap text-sm'>
                  {`${(page * rows) + 1}-${getMaxPagination(page, rows, total)} of ${total}`}
                </p>
                <Button
                  isIconOnly
                  disabled={page === 0}
                  skin='borderless'
                  startIcon={<ChevronLeftIcon className='t-icon' />}
                  onClick={() => setPage(page - 1)}
                />
                <Button
                  isIconOnly
                  disabled={getMaxPagination(page, rows, total) >= total}
                  skin='borderless'
                  startIcon={<ChevronRightIcon className='t-icon' />}
                  onClick={() => setPage(page + 1)}
                />
              </div>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </div>
    </div>
  )
}
