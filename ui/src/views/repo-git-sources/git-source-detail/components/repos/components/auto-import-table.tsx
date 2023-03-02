import { Button, ListItem } from '@mergestat/blocks'
import { CircleCheckFilledIcon, CircleErrorFilledIcon, ClockIcon, TrashIcon } from '@mergestat/icons'
import React from 'react'
import { RepoImportData } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { IMPORT_STATUS_TYPE } from 'src/utils/constants'
import { NoDataFound } from 'src/views/shared/no-data-found'
import { RemoveAutoImportModal } from '../../../modals/remove-auto-import'
import { UpdateAutoImportModal } from '../../../modals/update-auto-import'

type AutoImportTableProps = {
  imports: RepoImportData[]
}

export const AutoImportTable: React.FC<AutoImportTableProps> = ({ imports }: AutoImportTableProps) => {
  const { setShowRemoveImportModal, setShowAutoImportModal, setImportInfo } = useGitSourceDetailSetState()
  const [{ showAutoImportModal, showRemoveImportModal }] = useGitSourceDetailContext()

  const prepareToRemove = (importInfo: RepoImportData) => {
    setImportInfo(importInfo)
    setShowRemoveImportModal(true)
  }

  const prepareToEdit = (importInfo: RepoImportData) => {
    setImportInfo(importInfo)
    setShowAutoImportModal(true)
  }

  return (
    <>
      <div className='flex flex-col flex-1'>
        {imports?.length < 1
          ? <NoDataFound message='Couldn&#39;t find any auto import.' />
          : <>
            <div className='flex flex-col min-w-0 bg-gray-50 h-full'>
              <div className='flex-1 overflow-x-auto overflow-y-hidden'>
                <table className='t-table-default t-table-hover border-b'>
                  <thead>
                    <tr className='bg-white'>
                      <th scope='col' key='status' className='whitespace-nowrap'>Status</th>
                      <th scope='col' key='auto-import' className='whitespace-nowrap'>Auto import</th>
                      <th scope='col' key='repos' className='whitespace-nowrap'>Repos</th>
                      <th scope='col' key='remove' className='whitespace-nowrap px-4'></th>
                    </tr>
                  </thead>

                  <tbody className='bg-white'>
                    {imports.map((imp, index) => (
                      <tr key={imp.id}>
                        <td className='p-3 pl-8 pr-4 w-0'>
                          {imp.status === IMPORT_STATUS_TYPE.SUCCESS
                            ? <CircleCheckFilledIcon className="t-icon t-icon-success m-auto" />
                            : imp.status === IMPORT_STATUS_TYPE.FAILURE
                              ? <CircleErrorFilledIcon className="t-icon t-icon-danger m-auto" />
                              : <ClockIcon className='t-icon t-icon-muted m-auto' />
                          }
                        </td>
                        <td className='p-3'>
                          <ListItem key={`auto-import-${index}`}
                            title={imp.name}
                            subline={imp.type}
                            startIcon={<RepoImage vendor={imp.vendor} vendorUrl={imp.vendorUrl} orgName={imp.name} size="10" />}
                            onClick={() => prepareToEdit(imp)}
                          />
                        </td>
                        <td className='text-gray-500 p-3'>
                          {imp.totalRepos}
                        </td>
                        <td className='text-gray-500 p-3 pr-8'>
                          <div className='t-button-toolbar'>
                            <Button isIconOnly
                              skin="borderless-muted"
                              startIcon={<TrashIcon className="t-icon" />}
                              onClick={() => prepareToRemove(imp)} />
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

      {showAutoImportModal && <UpdateAutoImportModal />}
      {showRemoveImportModal && <RemoveAutoImportModal />}
    </>
  )
}
