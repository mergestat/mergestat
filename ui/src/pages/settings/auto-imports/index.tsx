import { Alert, ColoredBox, Dropdown, Menu, Panel, Toolbar } from '@mergestat/blocks'
import { CircleCheckFilledIcon, ClockIcon, CogIcon, DotsHorizontalIcon, TrashIcon } from '@mergestat/icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import { SYNC_REPO_METHOD } from 'src/utils/constants'

import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import Loading from 'src/components/Loading'
import RepoImage from 'src/components/RepoImage'
import useRepoImports from 'src/views/hooks/useRepoImports'
import SettingsView from 'src/views/settings'

const RowLink = ({ importId }: { importId: string }) => {
  return (
    <Link href={`/settings/auto-imports/${importId}`} passHref>
      <a href='foo' className='t-table-row-link'>
        <span className='t-sr-only'>Go to detail</span>
      </a>
    </Link>
  )
}

const AutoImports: NextPage = () => {
  const { loading, imports } = useRepoImports(true)

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
            {loading
              ? <Loading />
              : <div className='flex-1 p-8'>
                <Alert type="info" className="mb-10">
                  <strong>Repo auto imports</strong> automatically import repositories from a GitHub org or user, allowing MergeStat to pickup new repositories (and remove deleted ones) as they are added in GitHub.
                </Alert>

                <Panel className='rounded-md w-full shadow-sm'>
                  <Panel.Body className='p-0'>
                    {imports.length < 1
                      ? <div className='flex justify-center items-center bg-white py-5'>
                        No data available!
                      </div>
                      : <table className='t-table-default t-table-clickable'>
                        <thead>
                          <tr className='bg-white'>
                            <th scope='col' key='name' className='whitespace-nowrap px-4'>Status</th>
                            <th scope='col' key='name' className='whitespace-nowrap px-4'>Name</th>
                            <th scope='col' key='name' className='whitespace-nowrap px-4'>Last Sync</th>
                            <th scope='col' key='name' className='whitespace-nowrap px-4'></th>
                          </tr>
                        </thead>

                        <tbody className='bg-white'>
                          {imports.map((imp, index) => (
                            <tr key={index}>
                              <td className='py-4 pl-8 pr-4 w-0'>
                                <RowLink importId={imp.id} />
                                {imp.importDone
                                  ? <CircleCheckFilledIcon className="t-icon text-semantic-success" />
                                  : <ClockIcon className='t-icon text-semantic-mutedIcon' />
                                }
                              </td>
                              <td className='p-4'>
                                <RowLink importId={imp.id} />
                                <div className='flex items-center gap-4'>
                                  <ColoredBox size='10'>
                                    <RepoImage repoType='github' orgName={imp.source} size="10" />
                                  </ColoredBox>
                                  <div>
                                    <h4 className='font-medium'>
                                      {imp.source}
                                    </h4>
                                    <p className='text-sm text-semantic-mutedText'>
                                      {imp.type === SYNC_REPO_METHOD.GH_USER ? 'GitHub User' : 'GitHub Organization'}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className='text-gray-500 p-4'>
                                <RowLink importId={imp.id} />
                                <RelativeTimeField date={imp.lastSync} />
                              </td>
                              <td className='text-gray-500 py-4 pl-4 pr-8'>
                                <RowLink importId={imp.id} />
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
                      </table>}
                  </Panel.Body>
                </Panel>
              </div>}
          </div>
        </SettingsView>
      </Fragment>
    </>
  )
}

export default AutoImports
