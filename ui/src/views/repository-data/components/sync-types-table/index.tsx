import { Panel, Toggle } from '@mergestat/blocks'
import cx from 'classnames'
import React, { PropsWithChildren, useId } from 'react'
import { RepoSyncDataType } from 'src/@types'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import { SYNC_STATUS, TEST_IDS } from 'src/utils/constants'
import useSyncNow from 'src/views/hooks/useSyncNow'
import useSyncs from 'src/views/hooks/useSyncs'
import { RepositoryData, RepositorySyncNow, RepositorySyncStatus, RepositoryTableRowOptions } from './components'

type SycnTypesTableProps = PropsWithChildren<{
  repoId: string
  data: Array<RepoSyncDataType>
}>

export const SycnTypesTable: React.FC<SycnTypesTableProps> = ({ repoId, data }: SycnTypesTableProps) => {
  const id = useId()
  const { refetch } = useSyncs()
  const { updateSchedule, addSyncType } = useSyncNow(refetch, true)

  return (
    <Panel className='rounded-md w-full shadow-sm block'>
      <Panel.Body className='p-0'>
        {data.length < 1
          ? <div className='flex justify-center items-center bg-white py-5'>
            No data available!
          </div>
          : <div className='flex flex-col min-w-0 bg-white h-full'>
            <div className='flex-1 overflow-x-auto overflow-y-hidden'>
              <table className='t-table-default t-table-clickable'>
                <thead>
                  <tr className='bg-white'>
                    <th scope='col' key='syncStateIcon' className='whitespace-nowrap w-0'>Status</th>
                    <th scope='col' key='data' className='whitespace-nowrap'>Sync Type</th>
                    <th scope='col' key='latestRun' className='whitespace-nowrap'>Latest Run</th>
                    <th scope='col' key='meanRunningTime' className='whitespace-nowrap'>Mean Running Time</th>
                    <th scope='col' key='status' className='whitespace-nowrap'>Latest Results</th>
                    <th scope='col' key='schedule' className='whitespace-nowrap w-0'>Schedule</th>
                    <th scope='col' key='options' className='whitespace-nowrap'></th>
                  </tr>
                </thead>

                <tbody className='bg-white'>
                  {data.map((sync, index) => (
                    <tr data-testid={TEST_IDS.syncsTypesRow} key={sync.data.id ?? `${id}-${index}`}>
                      <td className='w-0 h-20 p-0'>
                        <div className={cx('h-full flex justify-center items-center', { 'bg-gray-50': sync.status.syncState === SYNC_STATUS.disabled })}>
                          <RepoSyncIcon type={sync.status.syncState} className='my-auto' />
                        </div>
                      </td>

                      <td className='min-w-sm h-20'>
                        <RepositoryData
                          id={sync.data.id}
                          title={sync.data.title}
                          brief={sync.data.brief}
                          disabled={sync.status.syncState === SYNC_STATUS.disabled}
                        />
                      </td>

                      <td className='text-gray-500 h-20'>
                        <RelativeTimeField date={sync.latestRun} syncData={sync} styles={'text-semantic-mutedText whitespace-nowrap'} />
                      </td>

                      <td className='text-gray-500 h-20'>
                        <div className='text-semantic-mutedText'>
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
                              sync.data.id
                                ? updateSchedule({ variables: { syncId: sync.data.id, schedule: !sync.data.scheduleEnabled } })
                                : addSyncType({ variables: { repoId, syncType: sync.data.type } })
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
                              syncStatus={sync.status.syncState}
                            />
                            <RepositoryTableRowOptions state={sync.status.syncState} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>}
      </Panel.Body>
    </Panel>
  )
}
