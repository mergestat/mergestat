import type { NextPage } from 'next'
import Head from 'next/head'
import Editor from '@monaco-editor/react'
import { Fragment, useRef, useEffect } from 'react'

import { Alert, Avatar, Badge, Button, Input, Label, Select, Spinner, Toolbar } from '@mergestat/blocks'
import {
  CircleInformationIcon,
  CircleWarningIcon,
  CircleWarningFilledIcon,
  CircleCheckFilledIcon,
  ClipboardIcon,
  DownloadIcon,
  SearchIcon,
  ChevronRightIcon,
  ChevronLeftIcon
} from '@mergestat/icons'

export enum States {
  Empty = 'Empty',
  Loading = 'Loading',
  Filled = 'Filled',
  Error = 'Error'
}

const Queries: NextPage = () => {
  const query = `-- AskGit is a tool for running SQL queries on data in git repos:
  -- https://github.com/augmentable-dev/askgit
  -- Use this page to try out queries in your browser, URLs are share-able

  SELECT author_name, count(*) FROM commits GROUP BY author_name ORDER BY count(*) DESC`

  const state: States = States.Filled
  const rowLimitReached = true

  const resizeElement = useRef<HTMLDivElement | null>(null)
  const resizerElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleResize = (e: MouseEvent) => {
      if (resizeElement?.current) {
        const resizeHight = e.clientY - resizeElement.current.offsetTop + 'px'
        resizeElement.current.style.height = resizeHight
      }
    }

    const handleStopResize = () => {
      window.removeEventListener('mousemove', handleResize, false)
      window.removeEventListener('mouseup', handleStopResize, false)
    }

    const initResize = () => {
      window.addEventListener('mousemove', handleResize, false)
      window.addEventListener('mouseup', handleStopResize, false)
    }

    resizerElement?.current?.addEventListener('mousedown', initResize, false)

    return () => {
      resizerElement?.current?.removeEventListener(
        'mousedown',
        initResize,
        false
      )
      window.removeEventListener('mousemove', handleResize)
      window.removeEventListener('mouseup', handleStopResize)
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>MergeStat</title>
      </Head>
      <main className='w-full flex flex-col h-full bg-gray-50 overflow-hidden'>
        {/* Header */}
        <div className='bg-white overflow-auto flex h-16 w-full border-b px-8'>
          <Toolbar className='flex-1 space-x-4 w-auto h-full'>
            <Toolbar.Left>
              <h2 className='t-h2 mb-0'>Queries</h2>
            </Toolbar.Left>
            <Toolbar.Right>
              <Button className='whitespace-nowrap' skin='secondary' label='Cancel' disabled />
              <Button className='whitespace-nowrap' label='Execute (Shift + R)' />
            </Toolbar.Right>
          </Toolbar>
        </div>
        <div className='flex flex-col flex-1 items-center overflow-auto'>
          {/* SQL editor */}
          <div
            className='w-full p-8'
            ref={resizeElement}
            style={{ height: '320px', minHeight: '200px' }}
          >
            <div className='h-full flex relative py-4 bg-white rounded border border-gray-300'>
              <Editor
                className='text-sm font-mono'
                value={query}
                language='sql'
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  scrollbar: {
                    vertical: 'auto',
                  },
                }}
              />
            </div>
          </div>
          <div className='t-resizer z-10' ref={resizerElement} />

          {/* Empty state */}
          {(state as States) === States.Empty && (
            <div className='flex-1 h-1/2 flex flex-col items-center justify-center p-8'>
              <Avatar icon={<CircleInformationIcon className='t-icon' />} />
              <p className='text-semantic-mutedText mt-6'>
                Execute query to show results.
              </p>
            </div>
          )}

          {/* Error state */}
          {(state as States) === States.Error && (
            <>
              <div className='bg-white overflow-auto flex -mt-2 h-16 w-full border-b px-8'>
                <Toolbar className='flex-1 w-auto space-x-4 h-full'>
                  <Toolbar.Left className='space-x-4'>
                    <Toolbar.Item>
                      <h3 className='t-h3 whitespace-nowrap mb-0'>Query results</h3>
                    </Toolbar.Item>
                    <Toolbar.Item>
                      <Badge
                        label='Failed'
                        variant='default'
                        className='bg-gray-50 rounded-full'
                        startIcon={
                          <CircleWarningFilledIcon className='t-icon t-icon-danger ' />
                        }
                      />
                    </Toolbar.Item>
                  </Toolbar.Left>
                </Toolbar>
              </div>
              <div className='bg-white w-full flex-1 h-1/2 flex flex-col items-center justify-center p-8'>
                <Avatar
                  variant='danger'
                  icon={<CircleWarningIcon className='t-icon' />}
                />
                <div className='text-center mt-6'>
                  <h4 className='t-h4'>Failed to execute query</h4>
                  <p className='text-semantic-mutedText'>
                    Commitss table not found.
                  </p>
                </div>
              </div>
            </>
          )}

          {/* Loading state */}
          {(state as States) === States.Loading && (
            <>
              <div className='bg-white overflow-auto flex -mt-2 h-16 w-full border-b px-8'>
                <Toolbar className='flex-1 w-auto h-full'>
                  <Toolbar.Left className='space-x-4'>
                    <Toolbar.Item>
                      <h3 className='t-h3 mb-0'>Query results</h3>
                    </Toolbar.Item>
                    <Toolbar.Item>
                      <Badge
                        label='Loading'
                        variant='default'
                        className='bg-gray-50 rounded-full'
                        startIcon={
                          <Spinner size='sm' className='mr-2' />
                        }
                      />
                    </Toolbar.Item>
                  </Toolbar.Left>
                </Toolbar>
              </div>
              <div className='bg-white w-full flex-1 h-1/2 flex flex-col'>
                <div className='animate-pulse'>
                  <div className='grid grid-cols-4 w-full border-gray-100 border-b-2 h-14 items-center'>
                      <div className='col-span-1 py-3 pl-8 pr-3 flex items-center border-gray-100 border-r h-full'>
                        <div className='bg-gray-150 w-40 h-4 rounded'></div>
                      </div>
                      <div className='col-span-1 py-3 px-3 flex items-center border-gray-100 border-r h-full'>
                        <div className='bg-gray-150 w-20 h-4 rounded'></div>
                      </div>
                      <div className='col-span-1 py-3 px-3 flex items-center border-gray-100 border-r h-full'>
                        <div className='bg-gray-150 w-16 h-4 rounded'></div>
                      </div>
                      <div className='col-span-1 py-3 pl-3 pr-8 flex items-center border-gray-100 border-r h-full'>
                        <div className='bg-gray-150 w-24 h-4 rounded'></div>
                      </div>
                  </div>
                  {[1, 2, 3, 4, 5].map((row) => (
                    <div key={row} className='grid grid-cols-4 w-full border-gray-100 border-b h-14'>
                      <div className='col-span-1 py-3 pl-8 pr-3 flex items-center border-gray-100 border-r h-full'>
                        <div className='bg-gray-150 w-32 h-4 rounded'></div>
                      </div>
                      <div className='col-span-1 py-3 px-3 flex items-center border-gray-100 border-r h-full'>
                        <div className='bg-gray-150 w-20 h-4 rounded'></div>
                      </div>
                      <div className='col-span-1 py-3 px-3 flex items-center border-gray-100 border-r h-full'>
                        <div className='bg-gray-150 w-36 h-4 rounded'></div>
                      </div>
                      <div className='col-span-1 py-3 pr-8 pl-3 flex items-center h-full'>
                        <div className='bg-gray-150 w-16 h-4 rounded'></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Filled state */}
          {(state as States) === States.Filled && (
            <>
              <div className='bg-white overflow-auto flex h-16 flex-shrink-0 w-full border-b px-8'>
                <Toolbar className='flex-1 w-auto h-full space-x-4'>
                  <Toolbar.Left className='space-x-4'>
                    <Toolbar.Item>
                      <h3 className='t-h3 whitespace-nowrap mb-0'>Query results</h3>
                    </Toolbar.Item>
                    <Toolbar.Item>
                      <Badge
                        label='Success'
                        variant='default'
                        className='bg-gray-50 rounded-full'
                        startIcon={
                          <CircleCheckFilledIcon className='t-icon t-icon-success ' />
                        }
                      />
                    </Toolbar.Item>
                  </Toolbar.Left>
                  <Toolbar.Right>
                      <Input
                        className='flex-1 ml-8 w-96 '
                        placeholder='Search...'
                        startIcon={<SearchIcon className='t-icon' />}
                      />
                    </Toolbar.Right>
                </Toolbar>
              </div>
              <div className='overflow-hidden flex-1 flex flex-col bg-white h-full w-full'>
                {rowLimitReached && (
                  <Alert
                    theme="light"
                    type="warning"
                    className='t-alert-full-width items-center'
                  >
                    Query results are limited to 1000 rows.
                  </Alert>
                )}
                <div className='overflow-auto w-full flex-1'>
                  <table className='t-table-default t-table-sticky-header t-table-nowrap t-table-bordered t-table-dense'>
                    <thead>
                      <tr className='bg-white'>
                        <th scope='col' className='whitespace-nowrap pr-6 pl-8'>
                          <span className='mr-1'>author_name</span>
                        </th>
                        <th scope='col' className='whitespace-nowrap px-6'>
                          <span className='mr-1'>author_email</span>
                        </th>
                        <th scope='col' className='whitespace-nowrap px-6'>
                          <span className='mr-1'>data</span>
                        </th>
                        <th scope='col' className='whitespace-nowrap px-6'>
                          <span className='mr-1'>count</span>
                        </th>
                        <th scope='col' className='whitespace-nowrap px-6'>
                          <span className='mr-1'>data_column</span>
                        </th>
                        <th scope='col' className='whitespace-nowrap px-6'>
                          <span className='mr-1'>data_column</span>
                        </th>
                        <th scope='col' className='whitespace-nowrap px-6'>
                          <span className='mr-1'>data_column</span>
                        </th>
                        <th scope='col' className='whitespace-nowrap px-6'>
                          <span className='mr-1'>data_column</span>
                        </th>
                        <th scope='col' className='whitespace-nowrap px-6'>
                          <span className='mr-1'>data_column</span>
                        </th>
                        <th scope='col' className='whitespace-nowrap px-6'>
                          <span className='mr-1'>data_column</span>
                        </th>
                        <th scope='col' className='whitespace-nowrap px-6'>
                          <span className='mr-1'>data_column</span>
                        </th>
                        <th scope='col' className='whitespace-nowrap pl-6 pr-8'>
                          <span className='mr-1'>data_column</span>
                        </th>
                      </tr>
                    </thead>

                    <tbody className='bg-white'>
                      {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18, 19, 20
                      ].map((row) => (
                        <tr key={row}>
                          <td className='w-0 pl-8 max-w-xs truncate'>Cody Fisher</td>
                          <td className='w-0 px-6 max-w-xs truncate'>cody.fisher@email.com</td>
                          <td className='w-0 px-6 max-w-xs truncate'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</td>
                          <td className='w-0 px-6 max-w-xs truncate'>123</td>
                          <td className='w-0 px-6 max-w-xs truncate'>Data point</td>
                          <td className='w-0 px-6 max-w-xs truncate'>Data point</td>
                          <td className='w-0 px-6 max-w-xs truncate'>Data point</td>
                          <td className='w-0 px-6 max-w-xs truncate'>Data point</td>
                          <td className='w-0 px-6 max-w-xs truncate'>Data point</td>
                          <td className='w-0 px-6 max-w-xs truncate'>Data point</td>
                          <td className='w-0 px-6 max-w-xs truncate'>Data point</td>
                          <td className='w-0 pl-6 max-w-xs truncate pr-8'>Data point</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='bg-white overflow-auto flex h-16 flex-shrink-0 w-full border-t px-8'>
                <Toolbar className='t-toolbar flex-1 w-auto h-full space-x-4'>
                  <Toolbar.Left className='space-x-3'>
                    <div className='flex items-center'>
                      <Label className='mr-2' htmlFor='format'>
                        Format
                      </Label>
                      <Select
                        id='format'
                        className="w-24"
                        defaultValue='JSON'
                      >
                        <option value='JSON'>JSON</option>
                        <option value='CSV'>CSV</option>
                      </Select>
                    </div>
                    <Button
                      skin='secondary'
                      className='mr-2'
                      startIcon={
                        <ClipboardIcon className='t-icon t-icon-heroicons-clipboard' />
                      }
                    >
                      Copy
                    </Button>
                    <Button
                      skin='secondary'
                      startIcon={
                        <DownloadIcon className='t-icon t-icon-heroicons-download' />
                      }
                    >
                      Download
                    </Button>
                  </Toolbar.Left>
                  <Toolbar.Right className='space-x-4 divide-x'>
                    <Toolbar.Item>
                      <div className='flex items-center'>
                        <Label className='mr-2 whitespace-nowrap' htmlFor='rowsPerPage'>
                          Rows per page
                        </Label>
                        <Select
                          id='rowsPerPage'
                          className="w-20"
                          defaultValue='20'
                        >
                          <option value='10'>10</option>
                          <option value='20'>20</option>
                          <option value='50'>50</option>
                          <option value='100'>100</option>
                        </Select>
                      </div>
                    </Toolbar.Item>
                    <Toolbar.Item className='pl-4'>
                      <div className='flex items-center space-x-2'>
                        <p className='text-semantic-mutedText whitespace-nowrap text-sm'>1-50 of 1000</p>
                        <Button
                          isIconOnly
                          disabled
                          skin='borderless'
                          className='border-0'
                          startIcon={<ChevronLeftIcon className='t-icon' />}
                        />
                        <Button
                          isIconOnly
                          skin='borderless'
                          startIcon={<ChevronRightIcon className='t-icon' />}
                        />
                      </div>
                    </Toolbar.Item>
                  </Toolbar.Right>
                </Toolbar>
              </div>
            </>
          )}
        </div>
      </main>
    </Fragment>
  )
}

export default Queries
