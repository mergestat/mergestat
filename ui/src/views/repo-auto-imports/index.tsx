import { Alert, Button, ColoredBox, Panel, Toolbar } from '@mergestat/blocks'
import { CircleCheckFilledIcon, CircleErrorFilledIcon, ClockIcon, TrashIcon } from '@mergestat/icons'
import type { NextPage } from 'next'
import Link from 'next/link'
import { Fragment } from 'react'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import Loading from 'src/components/Loading'
import RepoImage from 'src/components/RepoImage'
import { IMPORT_STATUS_TYPE, SYNC_REPO_METHOD } from 'src/utils/constants'
import useRepoImports from 'src/views/hooks/useRepoImports'
import { RemoveImportModal } from 'src/views/repositories/modals/remove-import-modal'
import SettingsView from 'src/views/settings'

const AutoImports: NextPage = () => {
  const { loading, imports, showRemoveImportModal, prepareToRemove } = useRepoImports()

  return (
    <>
      <Fragment>
        <SettingsView>
          {/* Main content */}
          <div className='flex flex-col flex-1 overflow-hidden'>
            <div className='bg-white h-16 w-full border-b px-8'>
              <Toolbar className='h-full'>
                <Toolbar.Left>
                  <h2 className='t-h2 mb-0'>Repo Auto Imports</h2>
                </Toolbar.Left>
              </Toolbar>
            </div>
            {loading
              ? <Loading />
              : <div className='flex-1 overflow-auto p-8'>
                <Alert type="default" className="mb-10 bg-gray-100">
                  <strong className="font-semibold">Repo auto imports</strong> automatically import repositories from a GitHub org or user, allowing MergeStat to pickup new repositories (and remove deleted ones) as they are added in GitHub.
                </Alert>

                <Panel className='rounded-md w-full shadow-sm'>
                  <Panel.Body className='p-0'>
                    {imports.length < 1
                      ? <div className='flex justify-center items-center bg-white py-5'>
                        No data available!
                      </div>
                      : <table className='t-table-default t-table-hover'>
                        <thead>
                          <tr className='bg-white'>
                            <th scope='col' key='status' className='whitespace-nowrap px-4'>Status</th>
                            <th scope='col' key='name' className='whitespace-nowrap px-4'>Name</th>
                            <th scope='col' key='lastImport' className='whitespace-nowrap px-4'>Last Import</th>
                            <th scope='col' key='remove' className='whitespace-nowrap px-4'></th>
                          </tr>
                        </thead>

                        <tbody className='bg-white'>
                          {imports.map((imp, index) => (
                            <tr key={index}>
                              <td className='py-4 pl-8 pr-4 w-0'>
                                {imp.status === IMPORT_STATUS_TYPE.SUCCESS
                                  ? <CircleCheckFilledIcon className="t-icon t-icon-success" />
                                  : imp.status === IMPORT_STATUS_TYPE.FAILURE
                                    ? <CircleErrorFilledIcon className="t-icon t-icon-danger" />
                                    : <ClockIcon className='t-icon t-icon-muted' />
                                }
                              </td>
                              <td className='p-4'>
                                <div className='flex items-center gap-4'>
                                  <ColoredBox size='10'>
                                    <RepoImage repoType='github' orgName={imp.source} size="10" />
                                  </ColoredBox>
                                  <div>
                                    <Link href={`/repos/repo-auto-imports/${imp.id}`}>
                                      <h4 className='font-medium mb-0.5 t-text-default cursor-pointer hover_text-blue-600'>
                                        {imp.source}
                                      </h4>
                                    </Link>
                                    <p className='text-sm t-text-muted'>
                                      {imp.type === SYNC_REPO_METHOD.GH_USER ? 'GitHub User' : 'GitHub Organization'}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className='text-gray-500 p-4'>
                                <RelativeTimeField date={imp.lastSync} />
                              </td>
                              <td className='text-gray-500 py-4 pl-4 pr-8'>
                                <div className='t-button-toolbar'>
                                  <Button skin="borderless-muted" startIcon={<TrashIcon className="t-icon" />} isIconOnly onClick={() => prepareToRemove(imp.id, imp.source, imp.type)} />
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

      {showRemoveImportModal && <RemoveImportModal />}
    </>
  )
}

export default AutoImports
