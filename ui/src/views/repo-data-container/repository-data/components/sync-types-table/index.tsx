import { Toggle } from '@mergestat/blocks'
import cx from 'classnames'
import React, { PropsWithChildren, useId } from 'react'
import { RepoContainerSyncData } from 'src/@types'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { SYNC_STATUS, TEST_IDS } from 'src/utils/constants'
import useContainerSyncNow from 'src/views/hooks/repoContainerSyncs/useContainerSyncNow'
import { NoDataFound } from 'src/views/shared/no-data-found'
import { RepositorySyncNow, RepositorySyncStatus, RepositoryTableRowOptions, RepoSyncTypeDesc } from './components'

type SyncTypesTableProps = PropsWithChildren<{
  syncs: RepoContainerSyncData[]
}>

export const SyncTypesTable: React.FC<SyncTypesTableProps> = ({ syncs }: SyncTypesTableProps) => {
  const id = useId()
  const { addSchedule, removeSchedule, enableContainerSync } = useContainerSyncNow('getContainerSyncs')

  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      {syncs.length < 1
        ? <NoDataFound message='Couldn&#39;t find any repo sync.' />
        : <div className='flex flex-col min-w-0 bg-white h-full'>
          <div className='flex-1 overflow-x-auto overflow-y-hidden'>
            <table className='t-table-default t-table-hover border-b'>
              <thead>
                <tr className='bg-white'>
                  <th scope='col' key='syncStateIcon' className='whitespace-nowrap w-0'>Status</th>
                  <th scope='col' key='data' className='whitespace-nowrap'>Name</th>
                  <th scope='col' key='latestRun' className='whitespace-nowrap'>Latest Run</th>
                  <th scope='col' key='meanRunningTime' className='whitespace-nowrap'>Mean Running Time</th>
                  <th scope='col' key='status' className='whitespace-nowrap'>Latest Results</th>
                  <th scope='col' key='schedule' className='whitespace-nowrap w-0'>Schedule</th>
                  <th scope='col' key='options' className='whitespace-nowrap'></th>
                </tr>
              </thead>

              <tbody className='bg-white'>
                {syncs.map((sync, index) => (
                  <tr data-testid={TEST_IDS.syncsTypesRow}
                    key={sync.image.id ?? `${id}-${index}`}
                    className={sync.status.syncState === SYNC_STATUS.empty ? 't-table-row-muted' : ''}
                  >
                    <td className='w-0 h-20 p-0'>
                      <div className={cx('h-full flex justify-center items-center', { 'bg-gray-50': sync.status.syncState === SYNC_STATUS.disabled })}>
                        <RepoSyncIcon type={sync.status.syncState} className='my-auto' />
                      </div>
                    </td>

                    <td className='min-w-sm h-20'>
                      <RepoSyncTypeDesc
                        id={sync.sync.id}
                        title={sync.image.name}
                        brief={sync.image.description}
                        labels={sync.sync.labels}
                        disabled={sync.status.syncState === SYNC_STATUS.disabled}
                      />
                    </td>

                    <td className='text-gray-500 h-20'>
                      <RelativeTimeField date={sync.latestRun} syncStatus={sync.status.syncState} styles={'t-text-muted whitespace-nowrap'} />
                    </td>

                    <td className='text-gray-500 h-20'>
                      <div className='t-text-muted'>
                        {sync.avgRunningTime}
                      </div>
                    </td>

                    <td className='text-gray-500 h-20'>
                      <RepositorySyncStatus data={sync.status.data} />
                    </td>
                    <td className='w-0'>
                      <div className='flex items-center justify-center'>
                        <Toggle
                          isChecked={!!sync.sync.scheduleId}
                          onChange={() => {
                            sync.sync.scheduleId
                              ? removeSchedule({ variables: { id: sync.sync.scheduleId } })
                              : sync.sync.id
                                ? addSchedule({ variables: { syncId: sync.sync.id } })
                                : enableContainerSync({ variables: { repoId: sync.repo.id, imageId: sync.image.id } })
                          }}
                        />
                      </div>
                    </td>
                    <td className='w-0'>
                      <div className={cx('h-full flex', { 'bg-gray-50': sync.status.syncState === SYNC_STATUS.disabled })}>
                        <div className='t-button-toolbar gap-4'>
                          <div className='w-5'>
                            {sync.sync.id && <RepositorySyncNow
                              syncId={sync.sync.id}
                              syncStatus={sync.status.syncState}
                            />}
                          </div>
                          <RepositoryTableRowOptions imageId={sync.image.id} />
                        </div>
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
