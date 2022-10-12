import { Badge, Button, Panel } from '@mergestat/blocks'
import { ChevronRightIcon, CircleInformationFilledIcon, TrashIcon } from '@mergestat/icons'
import React, { PropsWithChildren } from 'react'
import type { RepoDataPropsT } from 'src/@types'
import { GetReposQuery } from 'src/api-logic/graphql/generated/schema'
import { mapToRepoData } from 'src/api-logic/mappers/repos'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import { useRepositoriesSetState } from 'src/state/contexts'
import { SYNC_STATUS, TEST_IDS } from 'src/utils/constants'
import { RepositoryName, RepositoryStatus } from './repositories-table-columns'

type RepositoriesTableProps = PropsWithChildren<{
  data?: GetReposQuery
}>

export type RowLinkProps = {
  id: string
  focusable?: boolean
}

export const RepositoriesTable: React.FC<RepositoriesTableProps> = ({ data }: RepositoriesTableProps) => {
  const repos: Array<RepoDataPropsT> = mapToRepoData(data)
  const { setShowRemoveRepositoryModal, setRepoToRemove } = useRepositoriesSetState()

  const prepareToRemove = (id: string, name: string, autoImported: boolean) => {
    setRepoToRemove({ id, name, autoImported, redirect: false })
    setShowRemoveRepositoryModal(true)
  }

  return (
    <>
      <Panel className='rounded-md w-full shadow-sm block'>
        <Panel.Body className='p-0'>
          {repos.length < 1
            ? <div data-testid={TEST_IDS.repoListEmpty} className='flex justify-center items-center bg-white py-5'>
              No data available!
            </div>
            : <div className='flex flex-col min-w-0 bg-white h-full'>
              <div className='flex-1 overflow-x-auto overflow-y-hidden'>
                <table data-testid={TEST_IDS.repoTableList} className='t-table-default t-table-clickable'>
                  <thead>
                    <tr className='bg-white'>
                      <th scope='col' key='name' className='whitespace-nowrap'>Repository</th>
                      <th scope='col' key='last' className='whitespace-nowrap'>Last sync</th>
                      <th scope='col' key='total' className='whitespace-nowrap w-0 text-center'>Total</th>
                      <th scope='col' key='queued' className='whitespace-nowrap w-0 text-center'>Queued</th>
                      <th scope='col' key='running' className='whitespace-nowrap w-0 text-center'>Running</th>
                      <th scope='col' key='error' className='whitespace-nowrap w-0 text-center'>Error</th>
                      <th scope='col' key='success' className='whitespace-nowrap w-0 text-center'>Success</th>
                      <th scope='col' key='option' className='whitespace-nowrap w-0'></th>
                    </tr>
                  </thead>

                  <tbody className='bg-white'>
                    {repos.map((repo) => (
                      <tr key={repo.id} className={!repo.status.length ? 't-table-row-muted' : ''}>
                        <td className=''>
                          <RepositoryName
                            id={repo.id}
                            name={repo.name}
                            type={repo.type}
                            createdAt={repo.createdAt}
                            autoImportFrom={repo.autoImportFrom}
                          />
                        </td>

                        {repo.status.length
                          ? <>
                            <td className='h-20'>
                              <RelativeTimeField date={repo.lastSync} styles={'text-semantic-mutedText whitespace-nowrap'} />
                            </td>
                            <td className='h-20 w-0'>
                              <div className='flex items-center justify-center'>
                                <Badge
                                  label={(repo.status.reduce((sum, { count }) => sum + count, 0).toString())}
                                  startIcon={
                                    <div className='t-icon t-icon-muted'>
                                      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                        <path d='M18.8823 7.76468V5.11742H6.37701L11.74 11.3063C11.9068 11.499 11.9986 11.7452 11.9986 11.9999C11.9986 12.2546 11.9068 12.5009 11.74 12.6935L6.37701 18.8824H18.8823V16.2351C18.8823 15.8569 19.084 15.5073 19.4116 15.3182C19.7391 15.129 20.1429 15.129 20.4705 15.3182C20.7981 15.5073 20.9998 15.8569 20.9998 16.2351V19.9412C20.9998 20.222 20.8884 20.4914 20.6898 20.69C20.4913 20.8885 20.2219 21 19.9411 21H4.0582C3.7861 20.9998 3.52463 20.8951 3.32787 20.7072C3.13093 20.5194 3.01411 20.2629 3.00117 19.9912C2.98841 19.7195 3.08058 19.4532 3.25873 19.2476L9.53791 12L3.25873 4.75243C3.08058 4.5468 2.98841 4.28057 3.00117 4.00879C3.01411 3.73705 3.13093 3.48053 3.32787 3.29284C3.52463 3.10494 3.78611 3.00018 4.0582 3H19.9411C20.2218 3 20.4913 3.1115 20.6898 3.31003C20.8884 3.50857 20.9998 3.77799 20.9998 4.0588V7.76486C20.9998 8.14314 20.7981 8.4927 20.4705 8.68184C20.143 8.87098 19.7392 8.87098 19.4116 8.68184C19.084 8.4927 18.8823 8.14297 18.8823 7.76468Z' fill='currentColor' />
                                      </svg>
                                    </div>
                                  }
                                />
                              </div>
                            </td>
                            <td className='h-20 text-center'>
                              <div className='flex items-center justify-center'>
                                <RepositoryStatus
                                  idRepo={repo.id}
                                  status={repo.status}
                                  type={SYNC_STATUS.queued}
                                />
                              </div>
                            </td>
                            <td className='h-20 text-center'>
                              <div className='flex items-center justify-center'>
                                <RepositoryStatus
                                  idRepo={repo.id}
                                  status={repo.status}
                                  type={SYNC_STATUS.running}
                                />
                              </div>
                            </td>
                            <td className='h-20 text-center'>
                              <div className='flex items-center justify-center'>
                                <RepositoryStatus
                                  idRepo={repo.id}
                                  status={repo.status}
                                  type={SYNC_STATUS.error}
                                />
                              </div>
                            </td>
                            <td className='h-20 text-center'>
                              <div className='flex items-center justify-center'>
                                <RepositoryStatus
                                  idRepo={repo.id}
                                  status={repo.status}
                                  type={SYNC_STATUS.succeeded}
                                />
                              </div>
                            </td>
                            <td>
                              <div className='t-button-toolbar'>
                                <Button skin="borderless-muted" startIcon={<TrashIcon className="t-icon" />} isIconOnly onClick={() => prepareToRemove(repo.id, repo.name, !!repo.autoImportFrom)} />
                              </div>
                            </td>
                          </>
                          : <td colSpan={7}>
                            <div className='t-button-toolbar gap-6'>
                              <div className='flex items-center justify-center gap-2'>
                                <CircleInformationFilledIcon className='t-icon t-icon-muted' />
                                <span className='text-semantic-mutedText'>Set up sync types</span>
                                <ChevronRightIcon className='t-icon t-icon-muted' />
                              </div>
                              <Button skin="borderless-muted" startIcon={<TrashIcon className="t-icon" />} isIconOnly onClick={() => prepareToRemove(repo.id, repo.name, !!repo.autoImportFrom)} />
                            </div>
                          </td>
                        }
                      </tr>
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
