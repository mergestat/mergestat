import { ColoredBox, Dropdown, Menu, Panel, Toolbar } from '@mergestat/blocks'
import { CogIcon, DotsHorizontalIcon, GithubIcon, TrashIcon } from '@mergestat/icons'
import { RepoSyncIcon } from 'src/components/RepoSyncIcon'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { Fragment } from 'react'
import { SYNC_STATUS } from 'src/utils/constants'

import SettingsView from 'src/views/settings'

const RowLink = () => {
  return (
    <Link href='/settings/auto-imports/auto-import' passHref>
      <a href='foo' className='t-table-row-link'>
        <span className='t-sr-only'>Go to detail</span>
      </a>
    </Link>
  )
}

const AutoImports: NextPage = () => {
  const autoImports = [
    {
      status: SYNC_STATUS.succeeded,
      name: 'MergeStat',
      type: 'GitHub Organization',
      lastSync: '4 minutes ago',
    },
    {
      status: SYNC_STATUS.succeeded,
      name: 'johndoe',
      type: 'GitHub User',
      lastSync: '4 minutes ago',
    },
    {
      status: SYNC_STATUS.succeeded,
      name: 'codyfisher',
      type: 'GitHub User',
      lastSync: '4 minutes ago',
    },
  ]

  return (
    <>
      <Fragment>
        <Head>
          <title>MergeStat</title>
        </Head>
        <SettingsView>
          {/* Main content */}
          <div className='flex flex-col flex-1'>
            <div className='bg-white h-16 w-full border-b px-8'>
              <Toolbar className='h-full'>
                <Toolbar.Left>
                  <h2 className='t-h2 mb-0'>GitHub Auto Imports</h2>
                </Toolbar.Left>
              </Toolbar>
            </div>
            <div className='flex-1 p-8'>
              <Panel className='rounded-md w-full shadow-sm'>
                <Panel.Body className='p-0'>
                  <table className='t-table-default t-table-clickable'>
                    <thead>
                      <tr className='bg-white'>
                        <th scope='col' key='name' className='whitespace-nowrap px-4'>Status</th>
                        <th scope='col' key='name' className='whitespace-nowrap px-4'>Name</th>
                        <th scope='col' key='name' className='whitespace-nowrap px-4'>Last Sync</th>
                        <th scope='col' key='name' className='whitespace-nowrap px-4'></th>
                      </tr>
                    </thead>

                    <tbody className='bg-white'>
                      {autoImports.map((autoImport, index) => (
                        <tr key={index}>
                          <td className='py-4 pl-8 pr-4 w-0'>
                            <RowLink />
                            <RepoSyncIcon type={autoImport.status} />
                          </td>
                          <td className='p-4'>
                            <RowLink />
                            <div className='flex items-center gap-4'>
                              <ColoredBox size='10'>
                                <GithubIcon className='t-icon' />
                              </ColoredBox>
                              <div>
                                <h4 className='font-medium'>
                                  {autoImport.name}
                                </h4>
                                <p className='text-sm text-semantic-mutedText'>
                                  {autoImport.type}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className='text-gray-500 p-4'>
                            <RowLink />
                            {autoImport.lastSync}
                          </td>
                          <td className='text-gray-500 py-4 pl-4 pr-8'>
                            <RowLink />
                            <div className='t-button-toolbar'>
                              <Dropdown
                                alignEnd
                                trigger={
                                  <DotsHorizontalIcon className='t-icon cursor-pointer' />
                                }
                                overlay={() => (
                                  <Menu className='whitespace-nowrap'>
                                    <Menu.Item
                                      text='Auto Import settings'
                                      withIcon
                                      href='/settings/auto-imports/auto-import'
                                      icon={<CogIcon className='t-icon mr-2' />}
                                    />
                                    <Menu.Divider />
                                    <Menu.Item
                                      text='Remove Auto Import'
                                      withIcon
                                      icon={
                                        <TrashIcon className='t-icon mr-2' />
                                      }
                                    />
                                  </Menu>
                                )}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Panel.Body>
              </Panel>
            </div>
          </div>
        </SettingsView>
      </Fragment>
    </>
  )
}

export default AutoImports
