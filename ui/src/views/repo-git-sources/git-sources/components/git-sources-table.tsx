import { ListItem, Panel } from '@mergestat/blocks'
import React, { PropsWithChildren } from 'react'
import { GitSourceData } from 'src/@types'
import { getGitSourceIcon } from 'src/utils'

type GitSourcesTableProps = PropsWithChildren<{
  gitSources: GitSourceData[]
}>

export const GitSourcesTable: React.FC<GitSourcesTableProps> = ({ gitSources }: GitSourcesTableProps) => {
  return (
    <div className='flex flex-col flex-1'>
      {gitSources.length < 1
        ? <div className='flex justify-center py-5'>
          <Panel className='rounded-md w-full shadow-sm mx-8'>
            <Panel.Body className='p-0'>
              <div className='flex justify-center items-center bg-white py-5'>
                Couldn&#39;t find any git source.
              </div>
            </Panel.Body>
          </Panel>
        </div>
        : <>
          <div className='flex flex-col min-w-0 bg-gray-50 h-full'>
            <div className='flex-1 overflow-x-auto overflow-y-hidden'>
              <table className='t-table-default t-table-hover border-b'>
                <thead>
                  <tr className='bg-white'>
                    <th scope='col' key='name' className='whitespace-nowrap'>Name</th>
                    <th scope='col' key='repos' className='whitespace-nowrap'>Repos</th>
                    <th scope='col' key='remove' className='whitespace-nowrap px-4'></th>
                  </tr>
                </thead>

                <tbody className='bg-white'>
                  {gitSources.map((gs, index) => (
                    <tr key={gs.id}>
                      <td>
                        <ListItem key={`git-source-${index}`}
                          title={gs.name}
                          className={'px-4 py-2'}
                          startIcon={getGitSourceIcon(gs.vendor)}
                        />
                      </td>
                      <td className='text-gray-500 py-5'>
                        <span className='ml-1'>{gs.reposByProvider.totalCount}</span>
                      </td>
                      <td className='text-gray-500 pl-4 pr-8'>
                        <div className='t-button-toolbar'>
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
