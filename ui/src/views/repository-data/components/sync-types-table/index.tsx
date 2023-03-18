import { Toggle } from '@mergestat/blocks'
import cx from 'classnames'
import React, { PropsWithChildren, useId } from 'react'
import { RepoSyncDataType } from 'src/@types'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { showSuccessAlert } from 'src/utils/alerts'
import { SYNC_STATUS, TEST_IDS } from 'src/utils/constants'
import useSyncNow from 'src/views/hooks/useSyncNow'
import { NoDataFound } from 'src/views/shared/no-data-found'
import { RepositorySyncNow, RepositorySyncStatus, RepositoryTableRowOptions, RepoSyncTypeDesc } from './components'

type SyncTypesTableProps = PropsWithChildren<{
  repoId: string
  syncs: RepoSyncDataType[]
}>

export const SyncTypesTable: React.FC<SyncTypesTableProps> = ({ repoId, syncs }: SyncTypesTableProps) => {
  const id = useId()
  const { updateSchedule, addSyncType } = useSyncNow('getRepoSyncs', true)

  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      {syncs.length < 1
        ? <NoDataFound message='Couldn&#39;t find any sync types.' />
        : <div className='flex flex-col min-w-0 bg-white h-full'>
          <div className='flex-1 overflow-x-auto overflow-y-hidden'>
            <table className='t-table-default t-table-hover'>
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
                  <tr data-testid={TEST_IDS.syncsTypesRow} key={sync.data.id ?? `${id}-${index}`}>
                    <td className='w-0 h-20 p-0'>
                      <div className={cx('h-full flex justify-center items-center', { 'bg-gray-50': sync.status.syncState === SYNC_STATUS.disabled })}>
                        <RepoSyncIcon type={sync.status.syncState} className='my-auto' />
                      </div>
                    </td>

                    <td className='min-w-sm h-20'>
                      <RepoSyncTypeDesc
                        id={sync.data.id}
                        title={sync.data.title}
                        brief={sync.data.brief}
                        labels={sync.data.labels}
                        disabled={sync.status.syncState === SYNC_STATUS.disabled}
                      />
                    </td>

                    <td className='text-gray-500 h-20'>
                      <RelativeTimeField date={sync.latestRun} syncData={sync} styles={'t-text-muted whitespace-nowrap'} />
                    </td>

                    <td className='text-gray-500 h-20'>
                      <div className='t-text-muted'>
                        {sync.avgRunningTime}
                      </div>
                    </td>

                    <td className='text-gray-500 h-20'>
                      <RepositorySyncStatus
                        data={sync.status.data}
                      />
                    </td>
                    <td className='w-0'>
                      <div className='flex items-center justify-center'>
                        <Toggle
                          isChecked={sync.data.scheduleEnabled}
                          onChange={() => {
                            showSuccessAlert(`Sync schedule turned ${sync.data.scheduleEnabled ? 'off' : 'on'}`)
                            sync.data.id
                              ? updateSchedule({ variables: { syncId: sync.data.id, schedule: !sync.data.scheduleEnabled } })
                              : addSyncType({ variables: { repoId, syncType: sync.data.type, schedule: true } })
                          }}
                        />
                      </div>
                    </td>
                    <td className='w-0'>
                      <div className={cx('h-full flex', { 'bg-gray-50': sync.status.syncState === SYNC_STATUS.disabled })}>
                        <div className='t-button-toolbar gap-4'>
                          <RepositorySyncNow
                            repoId={repoId}
                            syncType={sync.data.type}
                            syncTypeId={sync.data.id}
                            syncTypeGroup={sync.data.typeGroup}
                            syncStatus={sync.status.syncState}
                          />
                          <RepositoryTableRowOptions />
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
