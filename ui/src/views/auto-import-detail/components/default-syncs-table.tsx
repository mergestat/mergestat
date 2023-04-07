import { ColoredBox, Toggle } from '@mergestat/blocks'
import { TableIcon } from '@mergestat/icons'
import React from 'react'
import { NoDataFound } from 'src/views/shared/no-data-found'
import Link from 'next/link'

const syncs = [
  {
    name: 'Git files',
    desc: 'Retrieves files (content and paths) of a git repo'
  },
  {
    name: 'Git actions',
    desc: 'Retrieves all the Actions Workflows, Runs, Jobs, and Logs'
  },
  {
    name: 'GitHub PR commits',
    desc: 'Retrieves commits for all pull requests in a GitHub repo'
  }
]

export const DefaultSyncsTable: React.FC = () => {
  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      {syncs.length < 1
        ? <NoDataFound message='Couldn&#39;t find any repo sync.' />
        : <div className='flex flex-col min-w-0 bg-white h-full'>
          <div className='flex-1 overflow-x-auto overflow-y-hidden'>
            <table className='t-table-default t-table-hover border-b'>
              <thead>
                <tr className='bg-white'>
                  <th scope='col' key='data' className='whitespace-nowrap'>Name</th>
                  <th scope='col' key='schedule' className='whitespace-nowrap w-0'>Enable By Default</th>
                </tr>
              </thead>

              <tbody className='bg-white'>
                {syncs.map((sync, index) => (
                  <tr key={index}>
                    <td className='min-w-sm h-20'>
                      <div className='flex items-center space-x-4'>
                        <ColoredBox size='10'>
                          <TableIcon className='t-icon' />
                        </ColoredBox>
                        <div>
                          <Link href={'/'}>
                            <h4 className="font-medium mb-0.5 t-text-default cursor-pointer hover_text-blue-600">
                              {sync.name}
                            </h4>
                          </Link>
                          <p className='text-sm t-text-muted'>{sync.desc}</p>
                        </div>
                      </div>
                    </td>
                    <td className='w-0'>
                      <div className='flex items-center justify-center'>
                        <Toggle
                          isChecked={true}
                          onChange={() => { console.log('test') }}
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
