import { Button, EditableText } from '@mergestat/blocks'
import { TerminalIcon, TrashIcon } from '@mergestat/icons'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React, { PropsWithChildren } from 'react'
import { SavedQueryData } from 'src/@types'
import { useSavedQuerySetState } from 'src/state/contexts/saved-query.context'
import { DATE_FORMAT } from 'src/utils/constants'
import useCurrentUser from 'src/views/hooks/useCurrentUser'
import { NoDataFound } from 'src/views/shared/no-data-found'

type SavedQueriesTableProps = PropsWithChildren<{
  savedQueries: SavedQueryData[]
}>

export const SavedQueriesTable: React.FC<SavedQueriesTableProps> = ({ savedQueries }: SavedQueriesTableProps) => {
  const router = useRouter()
  const { data: userData } = useCurrentUser()
  const { setShowRemoveSQModal, setSqToRemove } = useSavedQuerySetState()

  const prepareToRemove = (sq: SavedQueryData) => {
    setSqToRemove(sq)
    setShowRemoveSQModal(true)
  }

  return (
    <div className='flex flex-col flex-1'>
      {savedQueries.length < 1
        ? <NoDataFound message='Couldn&#39;t find any saved queries.' />
        : <>
          <div className='flex flex-col min-w-0 bg-gray-50 h-full'>
            <div className='flex-1 overflow-x-auto overflow-y-hidden'>
              <table className='t-table-default t-table-hover border-b'>
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
                        <EditableText
                          className='flex-grow mr-5'
                          icon={<TerminalIcon className="t-icon" />}
                          title={{
                            value: query.name || '',
                            readOnly: true,
                            onClick: () => router.push(`/queries/saved/${query.id}`)
                          }}
                          desc={{
                            value: query.description || '',
                            readOnly: true
                          }}
                        />
                      </td>
                      <td className='text-gray-500 py-5'>
                        {query.createdAt ? format(new Date(query.createdAt?.toString()), DATE_FORMAT.D) : ''}
                      </td>
                      <td className='text-gray-500'>
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
          </div>
        </>
      }
    </div>
  )
}
