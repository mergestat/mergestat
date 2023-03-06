import { ListItem } from '@mergestat/blocks'
import { useRouter } from 'next/router'
import React, { PropsWithChildren } from 'react'
import { GitSourceData } from 'src/@types'
import { getGitSourceIcon } from 'src/utils'
import { NoDataFound } from 'src/views/shared/no-data-found'

type GitSourcesTableProps = PropsWithChildren<{
  gitSources: GitSourceData[]
}>

export const GitSourcesTable: React.FC<GitSourcesTableProps> = ({ gitSources }: GitSourcesTableProps) => {
  const router = useRouter()

  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      {gitSources.length < 1
        ? <NoDataFound message='Couldn&#39;t find any git source.' />
        : <>
          <div className='flex flex-col min-w-0 bg-gray-50 h-full'>
            <div className='flex-1 overflow-auto'>
              <table className='t-table-default t-table-sticky-header t-table-hover border-b'>
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
                          onClick={() => router.push(`/repos/git-sources/${gs.id}`)}
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
