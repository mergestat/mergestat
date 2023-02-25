import { Alert, Button, Dropdown, Input, Menu } from '@mergestat/blocks'
import { CaretDownIcon, PlusIcon } from '@mergestat/icons'
import { useState } from 'react'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { SYNC_REPO_METHOD } from 'src/utils/constants'
import useSyncTypes from 'src/views/hooks/useSyncTypes'
import { AddRepoImportModal } from '../../../modals/add-repo-import'

const ReposAuto: React.FC = () => {
  const { syncsTypesArray } = useSyncTypes()
  const [{ showAddRepoModal }] = useGitSourceDetailContext()
  const { setImportAuto, setShowAddRepoModal } = useGitSourceDetailSetState()

  const [importType, setImportType] = useState(SYNC_REPO_METHOD.GH_ORG)
  const [userOrOrg, setUserOrOrg] = useState('')

  const addImport = () => {
    setImportAuto({ name: userOrOrg, type: importType, defaultSyncs: syncsTypesArray })
    setImportType(SYNC_REPO_METHOD.GH_ORG)
    setUserOrOrg('')
    setShowAddRepoModal(true)
  }

  return (
    <>
      <div className='bg-white p-6'>
        <Alert type="default" className="bg-gray-50 mb-6">
          Automatic repo imports run on a schedule and bring in all repos from a Github organization or user.
        </Alert>

        <div className='flex items-center gap-2 mb-2'>
          <div className='t-input-with-prepend flex-1'>
            <Dropdown
              alignEnd
              trigger={
                <Button
                  label={importType === SYNC_REPO_METHOD.GH_ORG ? 'Organization' : 'User'}
                  endIcon={<CaretDownIcon className='t-icon' />}
                  skin='secondary'
                />
              }
              overlay={() => (
                <Menu className='whitespace-nowrap w-full'>
                  <Menu.Item text='Organization' onClick={() => setImportType(SYNC_REPO_METHOD.GH_ORG)} />
                  <Menu.Item text='User' onClick={() => setImportType(SYNC_REPO_METHOD.GH_USER)} />
                </Menu>
              )}
            />
            <Input
              id='orgName'
              type='text'
              value={userOrOrg}
              onChange={(e) => setUserOrOrg(e.target.value)}
              placeholder={importType === SYNC_REPO_METHOD.GH_ORG ? 'organization-name' : 'user-name'}
              onKeyPress={(e) => (e.key === 'Enter' && addImport())}
            />
          </div>
          <Button
            label='Add'
            disabled={!userOrOrg}
            className='whitespace-nowrap font-thin'
            startIcon={<PlusIcon className='t-icon' />}
            onClick={addImport}
          />
        </div>
      </div>

      <div>

      </div>

      {showAddRepoModal && <AddRepoImportModal />}
    </>
  )
}

export default ReposAuto
