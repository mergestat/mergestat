import { Button, ListItem } from '@mergestat/blocks'
import { TableIcon, TrashIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React, { PropsWithChildren } from 'react'
import { ContainerImageData } from 'src/@types'
import { useContainerSyncsSetState } from 'src/state/contexts'
import { NoDataFound } from 'src/views/shared/no-data-found'

type ContainerSyncsTableProps = PropsWithChildren<{
  containerImages: ContainerImageData[]
}>

export const ContainerSyncsTable: React.FC<ContainerSyncsTableProps> = ({ containerImages }: ContainerSyncsTableProps) => {
  const router = useRouter()

  const { setContainerSyncToRemove, setShowRemoveContainerSyncModal } = useContainerSyncsSetState()

  const prepareToRemove = (ci: ContainerImageData) => {
    setContainerSyncToRemove(ci)
    setShowRemoveContainerSyncModal(true)
  }

  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      {containerImages.length < 1
        ? <NoDataFound message='Couldn&#39;t find any repo syncs.' />
        : <>
          <div className='flex flex-col min-w-0 bg-gray-50 h-full'>
            <div className='flex-1 overflow-auto'>
              <table className='t-table-default t-table-sticky-header t-table-hover border-b'>
                <thead>
                  <tr className='bg-white'>
                    <th scope='col' key='name' className='whitespace-nowrap'>Name</th>
                    <th scope='col' key='git-sources' className='whitespace-nowrap'>Git Sources</th>
                    <th scope='col' key='repos' className='whitespace-nowrap'>Repos</th>
                    <th scope='col' key='version' className='whitespace-nowrap'>Version</th>
                    <th scope='col' key='remove' className='whitespace-nowrap px-4'></th>
                  </tr>
                </thead>

                <tbody className='bg-white'>
                  {containerImages.map((ci, index) => (
                    <tr key={ci.id}>
                      <td className='w-4/6'>
                        <ListItem key={`container-sync-${index}`}
                          title={ci.name}
                          subline={ci.description || ''}
                          className={'px-4 py-2'}
                          startIcon={<TableIcon className='t-icon' />}
                          onClick={() => router.push(`/repos/repo-syncs/${ci.id}`)}
                        />
                      </td>
                      <td className='text-gray-500 py-5'>
                        <span className='ml-1'>{ci.totalGitSources}</span>
                      </td>
                      <td className='text-gray-500 py-5'>
                        <span className='ml-1'>{ci.totalRepos}</span>
                      </td>
                      <td className='text-gray-500 py-5'>
                        <span className='ml-1'>{ci.version}</span>
                      </td>
                      <td className='text-gray-500 pl-4 pr-8'>
                        <div className='t-button-toolbar'>
                          <Button skin="borderless-muted"
                            startIcon={<TrashIcon className="t-icon" />}
                            isIconOnly
                            onClick={() => prepareToRemove(ci)}
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
  )
}
