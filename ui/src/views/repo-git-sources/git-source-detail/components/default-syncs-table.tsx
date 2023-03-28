import { ListItem, Toggle } from '@mergestat/blocks'
import { TableIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React, { PropsWithChildren } from 'react'
import { DefaultRepoSync } from 'src/@types'
import { NoDataFound } from 'src/views/shared/no-data-found'

type DefaultSyncsTableProps = PropsWithChildren<{
  defaultSyncs: DefaultRepoSync[]
}>

export const DefaultSyncsTable: React.FC<DefaultSyncsTableProps> = ({ defaultSyncs }: DefaultSyncsTableProps) => {
  const router = useRouter()

  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      {defaultSyncs.length < 1
        ? <NoDataFound message='Couldn&#39;t find any default repo sync.' />
        : <div className='flex flex-col min-w-0 bg-white h-full'>
          <div className='flex-1 overflow-x-auto overflow-y-hidden'>
            <table className='t-table-default t-table-hover border-b'>
              <thead>
                <tr className='bg-white'>
                  <th scope='col' key='data' className='whitespace-nowrap'>Name</th>
                  <th scope='col' key='enabled' className='whitespace-nowrap'>Enabled by default</th>
                </tr>
              </thead>

              <tbody className='bg-white'>
                {defaultSyncs.map((sync, index) => (
                  <tr key={sync.id ?? `${sync.id}-${index}`}>
                    <td className='min-w-sm h-20'>
                      <ListItem key={`container-sync-${index}`}
                        title={sync.name}
                        subline={sync.description || ''}
                        className={'px-4 py-2'}
                        startIcon={<TableIcon className='t-icon' />}
                        onClick={() => router.push(`/repos/repo-syncs/${sync.id}`)}
                      />
                    </td>
                    <td className='w-0'>
                      <div className='flex items-center justify-center'>
                        <Toggle
                          isChecked={!!sync.enabled}
                          onChange={() => null}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>}
    </div>
  )
}
