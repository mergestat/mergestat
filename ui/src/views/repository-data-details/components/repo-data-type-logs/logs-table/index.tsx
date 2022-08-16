import { LogBox, Panel } from '@mergestat/blocks'
import { CaretDownIcon, CaretRightIcon } from '@mergestat/icons'
import React, { Fragment, useEffect, useState } from 'react'
import { SyncLogsType } from 'src/@types'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import { LogsTableRowOptions, SyncType } from './components'

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
                    <th className="w-0 pl-6"></th>

                    <th scope='col' key='syncType' className='whitespace-nowrap px-6'>
                      <span className='mr-1 select-none'>Sync Type</span>
                    </th>

                    <th scope="col" key='records' className='whitespace-nowrap px-6 pl-0 w-40'>
                      <span className='mr-1 select-none'>Records</span>
                    </th>

                    <th scope="col" key='duration' className='whitespace-nowrap px-6 pl-0 w-40'>
                      <span className='mr-1 select-none'>Duration</span>
                    </th>

                    <th scope="col" key='syncStart' className='whitespace-nowrap px-6 pl-0 w-40'>
                      <span className='mr-1 select-none'>Sync Start</span>
                    </th>

                    <th scope="col" key='options' className='whitespace-nowrap px-6'>
                      <span className='mr-1 select-none'></span>
                    </th>
                  </tr>
                </thead>

                <tbody className='bg-white'>
                  {data.map((log, index) => (
                    <Fragment key={log.id}>
                      <tr>
                        <td className="w-0 pl-6">
                          <button className="t-button-icon focus:!outline-none"
                            onClick={() => onRowClick(index)}>
                            {log.collapsed
                              ? <CaretDownIcon className="text-gray-500 t-icon" />
                              : <CaretRightIcon className="text-gray-500 t-icon" />}
                          </button>
                        </td>

                        <td className="py-3">
                          <SyncType id={log.id} syncType={log.syncType} />
                        </td>

                        <td className='text-gray-500 pl-4'>
                          {log.records ? <span className='text-semantic-mutedText'>{log.records}</span> : '-'}
                        </td>

                        <td className='text-gray-500 pl-4'>
                          <span className='text-semantic-mutedText'>{log.duration}</span>
                        </td>

                        <td className='text-gray-500'>
                          <RelativeTimeField date={log.syncStart} styles={'text-semantic-mutedText'} />
                        </td>

                        <td className='text-gray-500 mx-6'>
                          <LogsTableRowOptions />
                        </td>
                      </tr>
                      {log.collapsed && (
                        <tr>
                          <td colSpan={6} className="p-6 bg-gray-50">
                            <LogBox logs={log.logs || []} onCopy={() => null} />
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>}
        </Panel.Body>
      </Panel>
    </div>
  </>
  )
}
