import { Badge, Button, Panel } from '@mergestat/blocks'
import { ChevronRightIcon, CogIcon, TableIcon } from '@mergestat/icons'
import React, { PropsWithChildren } from 'react'
import type { RepoDataPropsT } from 'src/@types'
import { GetReposQuery } from 'src/api-logic/graphql/generated/schema'
import { mapToRepoData } from 'src/api-logic/mappers/repos'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import { SYNC_STATUS, TEST_IDS } from 'src/utils/constants'
import { RepositoryName, RepositoryStatus } from './repositories-table-columns'
import { RepositoryAdditionalActionsDropDown } from 'src/views/repositories/drop-downs'
import Link from 'next/link'

type RepositoriesTableProps = PropsWithChildren<{
  data?: GetReposQuery
}>

export type RowLinkProps = {
  id: string
}

const RowLink : React.FC<RowLinkProps> = (props) => {
  return (
    <Link href={`/repos/${props.id}`} passHref>
      <a href='foo' className="t-table-row-link">
          <span className='t-sr-only'>Go to detail</span>
      </a>
    </Link>
  )
}

export const RepositoriesTable: React.FC<RepositoriesTableProps> = ({ data }: RepositoriesTableProps) => {
  const repos: Array<RepoDataPropsT> = mapToRepoData(data)

  return (
    <>
      <Panel className='rounded-md w-full shadow-sm'>
        <Panel.Body className='p-0'>
          {repos.length < 1
            ? <div data-testid={TEST_IDS.repoListEmpty} className='flex justify-center items-center bg-white py-5'>
              No data available!
            </div>
            : <div className='bg-white overflow-x-auto overflow-y-hidden w-full h-full'>
              <table data-testid={TEST_IDS.repoTableList} className='t-table-default t-table-clickable'>
                <thead>
                  <tr className='bg-white'>
                    <th scope='col' key='name' className='whitespace-nowrap px-6'>Repository</th>
                    <th scope='col' key='last' className='whitespace-nowrap px-6'>Last sync</th>
                    <th scope='col' key='status' className='whitespace-nowrap px-6 text-center'>Total</th>
                    <th scope='col' key='status' className='whitespace-nowrap px-6 text-center'>Errors</th>
                    <th scope='col' key='status' className='whitespace-nowrap px-6 text-center'>Loading</th>
                    <th scope='col' key='status' className='whitespace-nowrap px-6 text-center'>Success</th>
                    <th scope='col' key='option' className='whitespace-nowrap px-6'></th>
                  </tr>
                </thead>

                <tbody className='bg-white'>
                  {repos.map((repo) => (
                    <tr key={repo.id} className={!repo.status.length ? 'bg-gray-50' : ''}>
                      <td className=''>
                        <RowLink id={repo.id}/>
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
                              <RowLink id={repo.id}/>
                              <RelativeTimeField date={repo.lastSync} styles={'text-semantic-mutedText px-6'} />
                            </td>
                            <td className='h-20 pl-8 pr-6 w-0'>
                              <div className='flex items-center justify-center'>
                                <RowLink id={repo.id}/>
                                <Badge
                                  label="0"
                                  startIcon={<TableIcon className="t-icon t-icon-muted" />}
                                />
                              </div>
                            </td>
                            <td className='h-20 px-6 w-0 text-center'>
                              <RowLink id={repo.id}/>
                              <div className='flex items-center justify-center'>
                                <RepositoryStatus
                                  idRepo={repo.id}
                                  status={repo.status}
                                  type={SYNC_STATUS.error}
                                />
                              </div>
                            </td>
                            <td className='h-20 px-6 w-0 text-center'>
                              <RowLink id={repo.id}/>
                              <div className='flex items-center justify-center'>
                                <RepositoryStatus
                                  idRepo={repo.id}
                                  status={repo.status}
                                  type={SYNC_STATUS.running}
                                />
                              </div>
                            </td>
                            <td className='h-20 px-6 w-0 text-center'>
                              <RowLink id={repo.id}/>
                              <div className='flex items-center justify-center'>
                                <RepositoryStatus
                                  idRepo={repo.id}
                                  status={repo.status}
                                  type={SYNC_STATUS.succeeded}
                                />
                              </div>
                            </td>
                            <td className='pl-6 pr-8'>
                              <RowLink id={repo.id}/>
                              <div className="t-button-toolbar">
                                <RepositoryAdditionalActionsDropDown
                                  id={repo.id}
                                  name={repo.name}
                                  autoImported={!!repo.autoImportFrom}
                                />
                              </div>
                            </td>
                          </>
                        : <td className='pl-6 pr-8' colSpan={6}>
                            <RowLink id={repo.id}/>
                            <div className="t-button-toolbar gap-4">
                                <Button
                                  skin="secondary"
                                  startIcon={<CogIcon className="t-icon" />}
                                  endIcon={<ChevronRightIcon className="t-icon" />}
                                  label="Set up sync types"
                                />
                                <div className="t-button-toolbar">
                                  <RepositoryAdditionalActionsDropDown
                                    id={repo.id}
                                    name={repo.name}
                                    autoImported={!!repo.autoImportFrom}
                                  />
                                </div>
                          </div>
                      </td>
                      }
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>}
        </Panel.Body>
      </Panel>
    </>
  )
}
