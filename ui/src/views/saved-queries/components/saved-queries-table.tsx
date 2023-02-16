import { Button, ColoredBox, Panel } from '@mergestat/blocks'
import { TerminalIcon, TrashIcon } from '@mergestat/icons'
import { format } from 'date-fns'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import { SavedQueryData } from 'src/@types'
import { useSavedQuerySetState } from 'src/state/contexts/saved-query.context'
import { DATE_FORMAT } from 'src/utils/constants'
import useCurrentUser from 'src/views/hooks/useCurrentUser'
import { FilterFooter } from './filter-footer'

type SavedQueriesTableProps = PropsWithChildren<{
  savedQueries: SavedQueryData[]
}>

export const SavedQueriesTable: React.FC<SavedQueriesTableProps> = ({ savedQueries }: SavedQueriesTableProps) => {
  const { data: userData } = useCurrentUser()
  const { setShowRemoveSQModal, setSqToRemove } = useSavedQuerySetState()

  const prepareToRemove = (sq: SavedQueryData) => {
    setSqToRemove(sq)
    setShowRemoveSQModal(true)
  }

  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      {savedQueries.length < 1
        ? <div className='flex justify-center py-5'>
          <Panel className='rounded-md w-full shadow-sm mx-8'>
            <Panel.Body className='p-0'>
              <div className='flex justify-center items-center bg-white py-5'>
                Couldn&#39;t find any saved queries.
              </div>
            </Panel.Body>
          </Panel>
        </div>
        : <>
          <div className='flex flex-col min-w-0 h-full overflow-hidden'>
            <div className='flex-1 overflow-auto'>
              <table className='t-table-default t-table-hover t-table-sticky-header border-b'>
                <thead>
                  <tr className='bg-white'>
                    <th scope='col' key='name' className='whitespace-nowrap'>Name</th>
                    <th scope='col' key='createdAt' className='whitespace-nowrap'>Created At</th>
                    <th scope='col' key='createdBy' className='whitespace-nowrap w-0 text-center'>Created By</th>
                    <th scope='col' key='remove' className='whitespace-nowrap px-4'></th>
                  </tr>
                </thead>

                <tbody className='bg-white'>
                  {savedQueries.map((query) => (
                    <tr key={query.id}>
                      <td>
                        <div className='flex items-center gap-4 py-2'>
                          <ColoredBox size='8'>
                            <TerminalIcon className='t-icon t-icon-default' />
                          </ColoredBox>
                          <div>
                            <Link href={`/queries/saved/${query.id}`}>
                              <h4 className='font-medium mb-0.5 t-text-default cursor-pointer hover_text-blue-600'>
                                { query.name || '' }
                              </h4>
                            </Link>
                            <p className="text-sm t-text-muted">
                              { query.description || '' }
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className='text-gray-500 py-5 whitespace-nowrap'>
                        {query.createdAt ? format(new Date(query.createdAt?.toString()), DATE_FORMAT.D) : ''}
                      </td>
                      <td className='text-gray-500 whitespace-nowrap'>
                        {query.createdBy}
                      </td>
                      <td className='text-gray-500 pl-4 pr-8'>
                        <div className='t-button-toolbar'>
                          {query.createdBy === userData?.currentMergeStatUser &&
                            <Button isIconOnly
                              skin="borderless-muted"
                              startIcon={<TrashIcon className="t-icon" />}
                              onClick={() => prepareToRemove(query)} />
                          }
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <FilterFooter />
          </div>
        </>
      }
    </div>
  )
}
