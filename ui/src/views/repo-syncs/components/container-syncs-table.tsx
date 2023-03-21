import { Button, ListItem } from '@mergestat/blocks'
import { TableIcon, TrashIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React, { PropsWithChildren } from 'react'
import { ContainerSyncData } from 'src/@types'
import { useContainerSyncsSetState } from 'src/state/contexts'
import { NoDataFound } from 'src/views/shared/no-data-found'

type ContainerSyncsTableProps = PropsWithChildren<{
  containerSyncs: ContainerSyncData[]
}>

export const ContainerSyncsTable: React.FC<ContainerSyncsTableProps> = ({ containerSyncs }: ContainerSyncsTableProps) => {
  const router = useRouter()

  const { setContainerSyncToRemove, setShowRemoveContainerSyncModal } = useContainerSyncsSetState()

  const prepareToRemove = (cs: ContainerSyncData) => {
    setContainerSyncToRemove(cs)
    setShowRemoveContainerSyncModal(true)
  }

  return (
    <div className='flex flex-col flex-1 overflow-hidden'>
      {containerSyncs.length < 1
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
                  {containerSyncs.map((cs, index) => (
                    <tr key={cs.id}>
                      <td className='w-4/6'>
                        <ListItem key={`container-sync-${index}`}
                          title={cs.name}
                          subline={''}
                          className={'px-4 py-2'}
                          startIcon={<TableIcon className='t-icon' />}
                          onClick={() => null}
                        />
                      </td>
                      <td className='text-gray-500 py-5'>
                        <span className='ml-1'>{ }</span>
                      </td>
                      <td className='text-gray-500 py-5'>
                        <span className='ml-1'>{cs.repos.totalCount}</span>
                      </td>
                      <td className='text-gray-500 py-5'>
                        <span className='ml-1'>{cs.version}</span>
                      </td>
                      <td className='text-gray-500 pl-4 pr-8'>
                        <div className='t-button-toolbar'>
                          <Button skin="borderless-muted"
                            startIcon={<TrashIcon className="t-icon" />}
                            isIconOnly
                            onClick={() => prepareToRemove(cs)}
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
