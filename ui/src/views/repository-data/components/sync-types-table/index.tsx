import { Panel } from '@mergestat/blocks'
import cx from 'classnames'
import React, { PropsWithChildren } from 'react'
import { RepoSyncDataType } from 'src/@types'
import { TimeAgoField } from 'src/components/Fields/time-ago-field'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { RepositoryData, RepositorySyncNow, RepositorySyncStatus, RepositoryTableRowOptions } from './components'

type SycnTypesTableProps = PropsWithChildren<{
  data: Array<RepoSyncDataType>
}>

export const SycnTypesTable: React.FC<SycnTypesTableProps> = ({ data }: SycnTypesTableProps) => {
  return (
    <div className="rounded-md shadow-sm">
      <Panel className="rounded-md w-full shadow-sm">
        <Panel.Body className="p-0">
          {data.length < 1
            ? <div className='flex justify-center items-center bg-white py-5'>
              No data available!
            </div>
            : <div className='overflow-hidden bg-white h-full'>
              <table className='t-table-default'>
                <thead>
                  <tr className='bg-white'>
                    <th scope='col' key='syncStateIcon' className='whitespace-nowrap px-6'>
                      <span className='mr-1 select-none'></span>
                    </th>

                    <th scope="col" key='data' className='whitespace-nowrap px-6 pl-0'>
                      <span className='mr-1 select-none'>Data</span>
                    </th>

                    <th scope="col" key='latestRun' className='whitespace-nowrap px-6 pl-0'>
                      <span className='mr-1 select-none'>Lastest Run</span>
                    </th>

                    <th scope="col" key='status' className='whitespace-nowrap px-6 pl-0'>
                      <span className='mr-1 select-none'>Status</span>
                    </th>

                    <th scope="col" key='syncNow' className='whitespace-nowrap px-6'>
                      <span className='mr-1 select-none'></span>
                    </th>

                    <th scope="col" key='options' className='whitespace-nowrap px-6'>
                      <span className='mr-1 select-none'></span>
                    </th>
                  </tr>
                </thead>

                <tbody className='bg-white'>
                  {data.map((sync) => (
                    <tr key={sync.data.id}>
                      <td className="w-12 h-20 p-0">
                        <div className={cx('h-full px-6 flex', { 'bg-gray-50': sync.status.syncState === 'disabled' })}>
                          <RepoSyncIcon type={sync.status.syncState} className="my-auto" />
                        </div>
                      </td>

                      <td className='h-20 p-0'>
                        <RepositoryData
                          id={sync.data.id}
                          title={sync.data.title}
                          brief={sync.data.brief}
                          disabled={sync.status.syncState === 'disabled'}
                        />
                      </td>

                      <td className='text-gray-500 h-20 p-0'>
                        <TimeAgoField date={sync.latestRun} syncData={sync} styles={'text-semantic-mutedText h-full leading-20'} />
                      </td>

                      <td className='text-gray-500 h-20 p-0'>
                        <RepositorySyncStatus
                          data={sync.status.data}
                          disabled={sync.status.syncState === 'disabled'}
                        />
                      </td>

                      <td className='h-20 p-0'>
                        <RepositorySyncNow syncStatus={sync.status.syncState} />
                      </td>

                      <td className='px-6 w-4'>
                        <div className={cx('h-full flex', { 'bg-gray-50': sync.status.syncState === 'disabled' })}>
                          <div className='my-auto mx-6'>
                            <RepositoryTableRowOptions state={sync.status.syncState} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>}
        </Panel.Body>
      </Panel>
    </div>
  )
}
