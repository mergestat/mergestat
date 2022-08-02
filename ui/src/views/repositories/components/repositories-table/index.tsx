import { Checkbox, CHECKBOX_STATES, Panel } from '@mergestat/blocks'
import React, { useMemo, useState } from 'react'
import type { RepoDataPropsT } from 'src/@types'
import { sampleRepositoriesData } from 'src/sample-data/repositories-data'
import { mapToRepoData } from 'src/api-logic/mappers/repos'
import { GetReposQuery } from 'src/api-logic/graphql/generated/schema'
import { RepositoryName, RepositoryStatus, RepositoryTagList } from './repositories-table-columns'
import { TimeAgoField } from 'src/components/Fields/time-ago-field'
import { RepositoryAdditionalActionsDropDown } from '../../drop-downs'

type RepositoriesTableProps = {
  data?: GetReposQuery
  children?: React.ReactNode
}

export const RepositoriesTable: React.FC<RepositoriesTableProps> = ({ data }: RepositoriesTableProps) => {
  const [selectedRepos, setSelectedRepos] = useState<RepoDataPropsT[]>([])
  const [isSelectAllRepos, setIsSelectAll] = useState<boolean>(false)

  const selectedRepositoriesCount: number = useMemo(
    () => selectedRepos.length,
    [selectedRepos]
  )

  const repos: Array<RepoDataPropsT> = mapToRepoData(data)

  const checkedState =
    selectedRepositoriesCount === 0
      ? CHECKBOX_STATES.Unchecked
      : selectedRepositoriesCount === sampleRepositoriesData.length
        ? CHECKBOX_STATES.Checked
        : CHECKBOX_STATES.Indeterminate

  return (
    <>
      <Panel className="rounded-md w-full shadow-sm">
        <Panel.Body className="p-0">
          {repos.length < 1 ? (
            <div className='flex justify-center items-center bg-white py-5'>
              No data available!
            </div>
          ) : (
            <div className='overflow-hidden bg-white h-full'>
              <table className='t-table-default'>
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
                    <tr key={Math.random()}>
                      <td className="w-0 pl-6">
                        <Checkbox />
                      </td>

                      <td className=''>
                        <RepositoryName
                          id={repo.id}
                          name={repo.name}
                          type={repo.type}
                          createdAt={repo.createdAt}
                          automaticImport={repo.automaticImport}
                        />
                      </td>

                      <td className='text-gray-500'>
                        <RepositoryTagList tags={repo.tags} />
                      </td>

                      <td className='h-20'>
                        <TimeAgoField date={repo.lastSync} styles={'text-semantic-mutedText px-6'} />
                      </td>

                      <td className='h-20'>
                        <RepositoryStatus status={repo.status} />
                      </td>

                      <td className='px-6 w-4'>
                        <RepositoryAdditionalActionsDropDown />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Panel.Body>
      </Panel>
    </>
  )
}
