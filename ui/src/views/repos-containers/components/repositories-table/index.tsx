import { Badge, Button, Tooltip } from '@mergestat/blocks'
import { ChevronRightIcon, CircleInformationFilledIcon, SumIcon, TrashIcon } from '@mergestat/icons'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'
import type { RepoContainerData, RepoStats } from 'src/@types'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import { useRepoContainersSetState } from 'src/state/contexts/repo-containers.context'
import { SYNC_CONTAINER_STATUS, TEST_IDS } from 'src/utils/constants'
import { NoDataFound } from 'src/views/shared/no-data-found'
import { RepositoryName, RepositoryStatus } from './repositories-table-columns'

type RepositoriesTableProps = PropsWithChildren<{
  repos: RepoContainerData[]
}>

export type RowLinkProps = {
  id: string
  focusable?: boolean
}

export const RepositoriesTable: React.FC<RepositoriesTableProps> = ({ repos }: RepositoriesTableProps) => {
  const { setShowRemoveRepositoryModal, setRepoToRemove, setReposQuantity } = useRepoContainersSetState()

  const prepareToRemove = (id: string, name: string, autoImported: boolean) => {
    setReposQuantity(repos.length)
    setRepoToRemove({ id, name, autoImported, redirect: false })
    setShowRemoveRepositoryModal(true)
  }

  const statsAreAllZeros = (stats: RepoStats) => {
    return stats.syncCount === 0 && stats.pending === 0 && stats.running === 0 && stats.warning === 0 && stats.error === 0 && stats.success === 0
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
                  <th scope='col' key='last' className='w-0'>
                    <div className='flex items-center'>
                      <span className='whitespace-nowrap mr-2'>Last completed sync</span>
                      <Tooltip placement='top' offset={[0, 10]}
                        content={<div className='w-56 font-thin pb-1'>
                          Time since last sync completed with or without errors
                        </div>}>
                        <CircleInformationFilledIcon className='t-icon t-icon-muted' />
                      </Tooltip>
                    </div>
                  </th>
                  <th scope='col' key='total' className='whitespace-nowrap w-0 text-center'>Scheduled</th>
                  <th scope='col' key='pending' className='whitespace-nowrap w-0 text-center'>Pending</th>
                  <th scope='col' key='running' className='whitespace-nowrap w-0 text-center'>Running</th>
                  <th scope='col' key='warning' className='whitespace-nowrap w-0 text-center'>Warning</th>
                  <th scope='col' key='error' className='whitespace-nowrap w-0 text-center'>Error</th>
                  <th scope='col' key='success' className='whitespace-nowrap w-0 text-center'>Success</th>
                  <th scope='col' key='option' className='whitespace-nowrap w-0'></th>
                </tr>
              </thead>

              <tbody className='bg-white'>
                {repos.map((repo) => (
                  <tr key={repo.id} className={repo.stats.syncCount === 0 ? 't-table-row-muted' : ''}>
                    <td className=''>
                      <RepositoryName
                        id={repo.id}
                        name={repo.name}
                        provider={repo.provider}
                        createdAt={repo.createdAt}
                        autoImportFrom={repo.autoImportFrom}
                      />
                    </td>

                    {statsAreAllZeros(repo.stats)
                      ? <td colSpan={8}>
                        <div className='t-button-toolbar gap-6'>
                          <div className='flex items-center justify-center gap-2'>
                            <CircleInformationFilledIcon className='t-icon t-icon-muted' />
                            <Link href={`/repos-containers/${repo.id}`}>
                              <a href={`/repos-containers/${repo.id}`} className='t-text-muted'>Set up sync types</a>
                            </Link>
                            <ChevronRightIcon className='t-icon t-icon-muted' />
                          </div>
                          <Button skin="borderless-muted" startIcon={<TrashIcon className="t-icon" />} isIconOnly onClick={() => prepareToRemove(repo.id, repo.name, !!repo.autoImportFrom)} />
                        </div>
                      </td>
                      : <>
                        <td className='h-20'>
                          <RelativeTimeField date={repo.stats.lastSyncTime} styles={'t-text-muted whitespace-nowrap'} />
                        </td>
                        <td className='h-20 w-0'>
                          <div className='flex items-center justify-center'>
                            <Badge
                              label={`${repo.stats.syncCount}`}
                              startIcon={<SumIcon className='t-icon t-icon-muted' />}
                            />
                          </div>
                        </td>
                        <td className='h-20 text-center'>
                          <div className='flex items-center justify-center'>
                            <RepositoryStatus
                              repoId={repo.id}
                              status={SYNC_CONTAINER_STATUS.pending}
                              count={repo.stats.pending}
                            />
                          </div>
                        </td>
                        <td className='h-20 text-center'>
                          <div className='flex items-center justify-center'>
                            <RepositoryStatus
                              repoId={repo.id}
                              status={SYNC_CONTAINER_STATUS.running}
                              count={repo.stats.running}
                            />
                          </div>
                        </td>
                        <td className='h-20 text-center'>
                          <div className='flex items-center justify-center'>
                            <RepositoryStatus
                              repoId={repo.id}
                              status={SYNC_CONTAINER_STATUS.warning}
                              count={repo.stats.warning}
                            />
                          </div>
                        </td>
                        <td className='h-20 text-center'>
                          <div className='flex items-center justify-center'>
                            <RepositoryStatus
                              repoId={repo.id}
                              status={SYNC_CONTAINER_STATUS.errored}
                              count={repo.stats.error}
                            />
                          </div>
                        </td>
                        <td className='h-20 text-center'>
                          <div className='flex items-center justify-center'>
                            <RepositoryStatus
                              repoId={repo.id}
                              status={SYNC_CONTAINER_STATUS.success}
                              count={repo.stats.success}
                            />
                          </div>
                        </td>
                        <td>
                          <div className='t-button-toolbar'>
                            <Button skin="borderless-muted" startIcon={<TrashIcon className="t-icon" />} isIconOnly onClick={() => prepareToRemove(repo.id, repo.name, !!repo.autoImportFrom)} />
                          </div>
                        </td>
                      </>
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
