import { Panel } from '@mergestat/blocks'
import cx from 'classnames'
import React, { PropsWithChildren, useId } from 'react'
import { RepoSyncDataType } from 'src/@types'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { SYNC_STATUS, TEST_IDS } from 'src/utils/constants'
import { RepositoryData, RepositorySyncNow, RepositorySyncStatus, RepositoryTableRowOptions } from './components'

type SycnTypesTableProps = PropsWithChildren<{
  repoId: string
  data: Array<RepoSyncDataType>
}>

export const SycnTypesTable: React.FC<SycnTypesTableProps> = ({ repoId, data }: SycnTypesTableProps) => {
  const id = useId()

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
                      <span className='mr-1 select-none'>Status</span>
                    </th>

                    <th scope="col" key='data' className='whitespace-nowrap px-6 pl-0'>
                      <span className='mr-1 select-none'>Sync Type</span>
                    </th>

                    <th scope="col" key='latestRun' className='whitespace-nowrap px-6 pl-0'>
                      <span className='mr-1 select-none'>Latest Run</span>
                    </th>

                    <th scope="col" key='meanRunningTime' className='whitespace-nowrap px-6 pl-0'>
                      <span className='mr-1 select-none'>Mean Running Time</span>
                    </th>

                    <th scope="col" key='status' className='whitespace-nowrap px-6 pl-0'>
                      <span className='mr-1 select-none'>Latest Results</span>
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
                  {data.map((sync, index) => (
                    <tr data-testid={TEST_IDS.syncsTypesRow} key={sync.data.id ?? `${id}-${index}`}>
                      <td className="w-12 h-20 p-0">
                        <div className={cx('h-full px-6 flex justify-center items-center', { 'bg-gray-50': sync.status.syncState === SYNC_STATUS.disabled })}>
                          <RepoSyncIcon type={sync.status.syncState} className="my-auto" />
                        </div>
                      </td>

                      <td className='h-20 p-0'>
                        <RepositoryData
                          id={sync.data.id}
                          title={sync.data.title}
                          brief={sync.data.brief}
                          disabled={sync.status.syncState === SYNC_STATUS.disabled}
                        />
                      </td>

                      <td className='text-gray-500 h-20 p-0'>
                        <RelativeTimeField date={sync.latestRun} syncData={sync} styles={'text-semantic-mutedText h-full leading-20'} />
                      </td>

                      <td className='text-gray-500 h-20 p-0'>
                        <div className='text-semantic-mutedText h-full leading-20 pl-5'>
                          {sync.avgRunningTime}
                        </div>
                      </td>

                      <td className='text-gray-500 h-20 p-0'>
                        {sync.status.data && sync.status.data.length === 0 && <span>-</span>}
                        <RepositorySyncStatus
                          data={sync.status.data}
                          disabled={sync.status.syncState === SYNC_STATUS.disabled}
                        />
                      </td>

                      <td className='h-20 p-0'>
                        <RepositorySyncNow
                          repoId={repoId}
                          syncType={sync.data.type}
                          syncTypeId={sync.data.id}
                          syncStatus={sync.status.syncState}
                        />
                      </td>

                      <td className='px-6 w-4'>
                        <div className={cx('h-full flex', { 'bg-gray-50': sync.status.syncState === SYNC_STATUS.disabled })}>
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
