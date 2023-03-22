import { Button, Dropdown, ListItem, Menu } from '@mergestat/blocks'
import { DotsHorizontalIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React from 'react'
import { useContainerSyncDetailSetState } from 'src/state/contexts/container-sync-detail.context'
import { getGitSourceIcon } from 'src/utils'
import { NoDataFound } from 'src/views/shared/no-data-found'

type GitSourcesTableProps = {
  gitSources: any[]
}

export const GitSourcesTable: React.FC<GitSourcesTableProps> = ({ gitSources }: GitSourcesTableProps) => {
  const router = useRouter()
  const { setGitSourceToEnable, setShowEnableAllReposModal } = useContainerSyncDetailSetState()

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
                        <td className='p-3 pl-8 pr-4 w-0'>
                          <ListItem key={`git-source-${index}`}
                            title={gs.name}
                            subline={gs.description || ''}
                            className={'px-4 py-2'}
                            startIcon={getGitSourceIcon(gs.vendor)}
                            onClick={() => router.push(`/repos/git-sources/${gs.id}`)}
                          />
                        </td>
                        <td className='p-3 text-gray-400'>
                          {'0/50'}
                        </td>
                        <td className='p-3'>
                          <Button skin='secondary'
                            label='Enable For All'
                            onClick={() => {
                              setGitSourceToEnable(gs)
                              setShowEnableAllReposModal(true)
                            }}
                          />
                        </td>
                        <td className='text-gray-500 p-3 pr-8'>
                          <Dropdown
                            alignEnd
                            trigger={<Button skin="borderless-muted" startIcon={<DotsHorizontalIcon className="t-icon" />} isIconOnly />}
                            overlay={(close) => (
                              <Menu className='whitespace-nowrap'>
                                <Menu.Item
                                  text="Disable For All"
                                  onClick={close}
                                />
                                <Menu.Item
                                  text="Edit Git source"
                                  onClick={close}
                                />
                              </Menu>
                            )}
                          />
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
