import { useMutation } from '@apollo/client'
import { Button, Dropdown, ListItem, Menu } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React from 'react'
import { GitSourceCSData } from 'src/@types'
import { DISABLE_CONTAINER_SYNC_FOR_ALL } from 'src/api-logic/graphql/mutations/syncs'
import { useContainerSyncDetailContext, useContainerSyncDetailSetState } from 'src/state/contexts/container-sync-detail.context'
import { getGitSourceIcon } from 'src/utils'
import { showSuccessAlert } from 'src/utils/alerts'
import { NoDataFound } from 'src/views/shared/no-data-found'

type GitSourcesTableProps = {
  gitSources: GitSourceCSData[]
}

export const GitSourcesTable: React.FC<GitSourcesTableProps> = ({ gitSources }: GitSourcesTableProps) => {
  const router = useRouter()
  const [{ idContainerSync }] = useContainerSyncDetailContext()
  const { setGitSourceToEnable, setShowEnableAllReposModal } = useContainerSyncDetailSetState()

  const [disableForAll] = useMutation(DISABLE_CONTAINER_SYNC_FOR_ALL, {
    onCompleted: () => {
      showSuccessAlert('Disabled for all')
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getContainerImage', 'getGitSourcesListCS']
  })

  return (
    <>
      <div className='flex flex-col flex-1'>
        {gitSources?.length < 1
          ? <NoDataFound message='Couldn&#39;t find any git source.' />
          : <>
            <div className='flex flex-col min-w-0 bg-gray-50 h-full'>
              <div className='flex-1 overflow-x-auto overflow-y-hidden'>
                <table className='t-table-default t-table-hover border-b'>
                  <thead>
                    <tr className='bg-white'>
                      <th scope='col' key='git-source' className='whitespace-nowrap w-4/6'>Git source</th>
                      <th scope='col' key='repos' className='whitespace-nowrap'>Repos</th>
                      <th scope='col' key='schedule' className='whitespace-nowrap'>Schedule</th>
                      <th scope='col' key='remove' className='whitespace-nowrap px-4'></th>
                    </tr>
                  </thead>

                  <tbody className='bg-white'>
                    {gitSources.map((gs, index) => (
                      <tr key={gs.id}>
                        <td className='w-0 h-20'>
                          <ListItem key={`git-source-${index}`}
                            title={gs.name}
                            subline={gs.description || ''}
                            className={'py-2'}
                            startIcon={getGitSourceIcon(gs.vendor)}
                          />
                        </td>
                        <td className='t-text-muted'>
                          {`${gs.totalEnabledRepos}/${gs.totalRepos}`}
                        </td>
                        <td>
                          <Button skin='secondary'
                            size='small'
                            className='whitespace-nowrap'
                            label='Enable For All'
                            disabled={gs.totalEnabledRepos === gs.totalRepos}
                            onClick={() => {
                              setGitSourceToEnable(gs)
                              setShowEnableAllReposModal(true)
                            }}
                          />
                        </td>
                        <td>
                          <div className='t-button-toolbar'>
                            <Dropdown
                              alignEnd
                              trigger={<Button skin="borderless-muted" startIcon={<DotsHorizontalIcon className="t-icon" />} isIconOnly />}
                              overlay={(close) => (
                                <Menu className='whitespace-nowrap'>
                                  <Menu.Item
                                    text="Disable For All"
                                    disabled={gs.totalRepos === 0}
                                    onClick={() => {
                                      disableForAll({ variables: { imageId: idContainerSync, providerId: gs.id } })
                                      close()
                                    }}
                                  />
                                  <Menu.Item
                                    text="Edit Git source"
                                    onClick={() => router.push(`/repos/git-sources/${gs.id}`)}
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
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}
