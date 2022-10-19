import { LogBox, Panel } from '@mergestat/blocks'
import { CaretDownIcon, CaretRightIcon } from '@mergestat/icons'
import React, { Fragment, useEffect, useState } from 'react'
import { SyncLogsType } from 'src/@types'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import { SyncType } from './components'

interface LogsTableProps {
  logs: Array<SyncLogsType>
  children?: React.ReactNode
}

const remap = (logs: Array<SyncLogsType>, previousData?: Array<SyncLogsType>): Array<SyncLogsType> => {
  return logs.map((log) => ({
    ...log,
    ...{ collapsed: previousData ? previousData.find(d => d.id === log.id)?.collapsed : false },
  }))
}

export const LogsTable: React.FC<LogsTableProps> = ({ logs }: LogsTableProps) => {
  const [data, setData] = useState(remap(logs))

  useEffect(() => {
    setData(remap(logs, data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logs])

  const onRowClick = (index: number) => {
    data[index].collapsed = !data[index].collapsed
    setData([...data])
  }

  return (<>
      <Panel className='rounded-md w-full shadow-sm block'>
        <Panel.Body className='p-0'>
          {data.length < 1
            ? <div className='flex justify-center items-center bg-white py-5'>
              No data available!
            </div>
            : <div className='flex flex-col min-w-0 bg-white h-full'>
                <div className='flex-1 overflow-x-auto overflow-y-hidden'>
                <table className='t-table-default t-table-hover'>
                  <thead>
                    <tr className='bg-white'>
                      <th className='w-0'></th>

                      <th scope='col' key='syncType' className='whitespace-nowrap'>
                        <span className='select-none'>Sync Type</span>
                      </th>

                      <th scope='col' key='entries' className='whitespace-nowrap'>
                        <span className='select-none'>Log Entries</span>
                      </th>

                      <th scope='col' key='duration' className='whitespace-nowrap'>
                        <span className='select-none'>Duration</span>
                      </th>

                      <th scope='col' key='syncStart' className='whitespace-nowrap'>
                        <span className='select-none'>Sync Start</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className='bg-white'>
                    {data.map((log, index) => (
                      <Fragment key={log.id} >
                        <tr>
                          <td className='w-0'>
                            <div className='-mx-3'>
                              <button className='t-button-icon focus:!outline-none'
                                onClick={() => onRowClick(index)}>
                                {log.collapsed
                                  ? <CaretDownIcon className='text-gray-500 t-icon' />
                                  : <CaretRightIcon className='text-gray-500 t-icon' />}
                              </button>
                            </div>
                          </td>

                          <td className='py-3'>
                            <SyncType id={log.id} syncType={log.syncType} />
                          </td>

                          <td className='text-gray-500'>
                            {log.records ? <span className='text-semantic-mutedText'>{log.records}</span> : '-'}
                          </td>

                          <td className='text-gray-500'>
                            <span className='text-semantic-mutedText'>{log.duration}</span>
                          </td>

                          <td className='text-gray-500'>
                            <RelativeTimeField date={log.syncStart} styles={'text-semantic-mutedText whitespace-nowrap'} />
                          </td>
                        </tr>
                        {log.collapsed && (
                          <tr>
                            <td colSpan={6} className='p-6 bg-gray-50'>
                              {log.logs?.length ? <LogBox logs={log.logs || []} onCopy={() => null} /> : <span className='text-semantic-mutedText text-sm'>No log entries yet</span>}
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>}
        </Panel.Body>
      </Panel>
  </>
  )
}
