import { Button, ListItem } from '@mergestat/blocks'
import { TrashIcon } from '@mergestat/icons'
import React from 'react'
import { RepoManualImportData } from 'src/@types'
import RepoImage from 'src/components/RepoImage'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { NoDataFound } from 'src/views/shared/no-data-found'
import { RemoveManualImportModal } from '../../../modals/remove-manual-import'

type ManualImportTableProps = {
  repos: RepoManualImportData[]
}

export const ManualImportTable: React.FC<ManualImportTableProps> = ({ repos }: ManualImportTableProps) => {
  const { setShowRemoveImportModal, setRepoInfo } = useGitSourceDetailSetState()
  const [{ showRemoveImportModal }] = useGitSourceDetailContext()

  const prepareToRemove = (repoInfo: RepoManualImportData) => {
    setRepoInfo(repoInfo)
    setShowRemoveImportModal(true)
  }

  return (
    <>
      <div className='flex flex-col flex-1'>
        {repos?.length < 1
          ? <NoDataFound message='Couldn&#39;t find any repo.' />
          : <>
            <div className='flex flex-col min-w-0 bg-gray-50 h-full'>
              <div className='flex-1 overflow-x-auto overflow-y-hidden'>
                <table className='t-table-default t-table-hover border-b'>
                  <thead>
                    <tr className='bg-white'>
                      <th scope='col' key='repo' className='whitespace-nowrap'>Repo</th>
                      <th scope='col' key='remove' className='whitespace-nowrap px-4'></th>
                    </tr>
                  </thead>

                  <tbody className='bg-white'>
                    {repos.map((repo, index) => (
                      <tr key={repo.id}>
                        <td className='p-3'>
                          <ListItem key={`repo-manual-${index}`}
                            title={repo.name}
                            startIcon={<RepoImage vendor={repo.vendor} vendorUrl={repo.vendorUrl} orgName={repo.name.split('/')[0]} size="10" />}
                          />
                        </td>
                        <td className='text-gray-500 p-3 pr-8'>
                          <div className='t-button-toolbar'>
                            <Button isIconOnly
                              skin="borderless-muted"
                              startIcon={<TrashIcon className="t-icon" />}
                              onClick={() => prepareToRemove(repo)} />
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

      {showRemoveImportModal && <RemoveManualImportModal />}
    </>
  )
}
