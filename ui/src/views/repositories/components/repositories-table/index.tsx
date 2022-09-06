import { Checkbox, Panel } from '@mergestat/blocks'
import React, { PropsWithChildren } from 'react'
import type { RepoDataPropsT } from 'src/@types'
import { GetReposQuery } from 'src/api-logic/graphql/generated/schema'
import { mapToRepoData } from 'src/api-logic/mappers/repos'
import { RelativeTimeField } from 'src/components/Fields/relative-time-field'
import { TEST_IDS } from 'src/utils/constants'
import { RepositoryAdditionalActionsDropDown } from '../../drop-downs'
import { RepositoryName, RepositoryStatus, RepositoryTagList } from './repositories-table-columns'

type RepositoriesTableProps = PropsWithChildren<{
  data?: GetReposQuery
}>

export const RepositoriesTable: React.FC<RepositoriesTableProps> = ({ data }: RepositoriesTableProps) => {
  const repos: Array<RepoDataPropsT> = mapToRepoData(data)

  return (
    <>
      <Panel className="rounded-md w-full shadow-sm">
        <Panel.Body className="p-0">
          {repos.length < 1
            ? <div data-testid={TEST_IDS.repoListEmpty} className='flex justify-center items-center bg-white py-5'>
              No data available!
            </div>
            : <div className='overflow-hidden bg-white h-full'>
              <table data-testid={TEST_IDS.repoTableList} className='t-table-default'>
                <thead>
                  <tr className='bg-white'>
                    <th className="w-0 pl-6">
                      <Checkbox />
                    </th>

                    <th scope="col" key='name' className='whitespace-nowrap px-6'>
                      <span className='mr-1 select-none'>Repository</span>
                    </th>

                    <th scope="col" key='tags' className='whitespace-nowrap px-6'>
                      <span className='mr-1 select-none'>Tags</span>
                    </th>

                    <th scope="col" key='last' className='whitespace-nowrap px-6'>
                      <span className='mr-1 select-none'>Last sync</span>
                    </th>

                    <th scope="col" key='status' className='whitespace-nowrap px-6'>
                      <span className='mr-1 select-none'></span>
                    </th>

                    <th scope="col" key='option' className='whitespace-nowrap px-6'>
                      <span className='mr-1 select-none'></span>
                    </th>
                  </tr>
                </thead>

                <tbody className='bg-white'>
                  {repos.map((repo) => (
                    <tr key={repo.id}>
                      <td className="w-0 pl-6">
                        <Checkbox />
                      </td>

                      <td className=''>
                        <RepositoryName
                          id={repo.id}
                          name={repo.name}
                          type={repo.type}
                          createdAt={repo.createdAt}
                          autoImportFrom={repo.autoImportFrom}
                        />
                      </td>

                      <td className='text-gray-500'>
                        <RepositoryTagList tags={repo.tags} />
                      </td>

                      <td className='h-20'>
                        <RelativeTimeField date={repo.lastSync} styles={'text-semantic-mutedText px-6'} />
                      </td>

                      <td className='h-20'>
                        <RepositoryStatus idRepo={repo.id} status={repo.status} />
                      </td>

                      <td className='px-6 w-4'>
                        <RepositoryAdditionalActionsDropDown />
                      </td>
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
