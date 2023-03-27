import { Badge, Button } from '@mergestat/blocks'
import { ChevronRightIcon, CircleInformationFilledIcon, SumIcon, TrashIcon } from '@mergestat/icons'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import type { RepoDataPropsT } from 'src/@types'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import { useRepositoriesSetState } from 'src/state/contexts'
import { SYNC_STATUS, TEST_IDS } from 'src/utils/constants'
import { NoDataFound } from 'src/views/shared/no-data-found'
import { RepositoryName, RepositoryStatus } from './repositories-table-columns'

type RepositoriesTableProps = PropsWithChildren<{
  repos: Array<RepoDataPropsT>
}>

export type RowLinkProps = {
  id: string
  focusable?: boolean
}

export const RepositoriesTable: React.FC<RepositoriesTableProps> = ({ repos }: RepositoriesTableProps) => {
  const { setShowRemoveRepositoryModal, setRepoToRemove, setReposQuantity } = useRepositoriesSetState()

  const prepareToRemove = (id: string, name: string, autoImported: boolean) => {
    setReposQuantity(repos.length)
    setRepoToRemove({ id, name, autoImported, redirect: false })
    setShowRemoveRepositoryModal(true)
  }

  return (
    <div className='flex flex-col flex-1'>
      {repos.length < 1
        ? <NoDataFound message='Couldn&#39;t find any repos.' />
        : <div className='flex flex-col min-w-0 h-full'>
          <div className='flex-1 overflow-x-auto overflow-y-hidden'>
            <table data-testid={TEST_IDS.repoTableList} className='t-table-default t-table-hover border-b'>
              <thead>
                <tr className='bg-white'>
                  <th scope='col' key='name' className='whitespace-nowrap'>Repository</th>
                  <th scope='col' key='last' className='whitespace-nowrap'>Last sync</th>
                  <th scope='col' key='total' className='whitespace-nowrap w-0 text-center'>Total</th>
                  <th scope='col' key='queued' className='whitespace-nowrap w-0 text-center'>Queued</th>
                  <th scope='col' key='running' className='whitespace-nowrap w-0 text-center'>Running</th>
                  <th scope='col' key='warning' className='whitespace-nowrap w-0 text-center'>Warning</th>
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
                        provider={repo.provider}
                        createdAt={repo.createdAt}
                        autoImportFrom={repo.autoImportFrom}
                      />
                    </td>

                    {repo.status.length
                      ? <>
                        <td className='h-20'>
                          <RelativeTimeField date={repo.lastSync} styles={'t-text-muted whitespace-nowrap'} />
                        </td>
                        <td className='h-20 w-0'>
                          <div className='flex items-center justify-center'>
                            <Badge
                              label={(repo.status.reduce((sum, { count }) => sum + count, 0).toString())}
                              startIcon={<SumIcon className='t-icon t-icon-muted' />}
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
                              type={SYNC_STATUS.warning}
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
                      : <td colSpan={8}>
                        <div className='t-button-toolbar gap-6'>
                          <div className='flex items-center justify-center gap-2'>
                            <CircleInformationFilledIcon className='t-icon t-icon-muted' />
                            <Link href={`/repos/${repo.id}`}>
                              <a href={`/repos/${repo.id}`} className='t-text-muted'>Set up sync types</a>
                            </Link>
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
    </div>
  )
}
