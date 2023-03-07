import { Alert, Button, Dropdown, Input, Label, Menu, Panel } from '@mergestat/blocks'
import { CaretDownIcon, PlusIcon } from '@mergestat/icons'
import cx from 'classnames'
import { useState } from 'react'
import Loading from 'src/components/Loading'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { getVendor } from 'src/utils'
import { SYNC_REPO_METHOD, VENDOR_TYPE } from 'src/utils/constants'
import useRepoImports from 'src/views/hooks/gitSources/useRepoImports'
import useSyncTypes from 'src/views/hooks/useSyncTypes'
import { FilterHeader } from 'src/views/shared/filter-header'
import { AddRepoImportModal } from '../../../modals/add-repo-import'
import { AutoImportTable } from '../components/auto-import-table'

const ReposAuto: React.FC = () => {
  const { syncsTypesArray } = useSyncTypes()
  const [{ showAddRepoModal, searchImport, gsDetail: { vendor } }] = useGitSourceDetailContext()
  const { setImportAuto, setShowAddRepoModal, setSearchImport } = useGitSourceDetailSetState()

  const { loading, imports, records } = useRepoImports()

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
          {`Auto imports run on a schedule and bring in all repos from a ${getVendor(vendor)} organization or user.`}
        </Alert>

        {vendor === VENDOR_TYPE.BITBUCKET && <Label className='text-gray-500'>Owner</Label>}
        <div className='flex items-center gap-2 mb-2'>
          <div className={cx('flex-1', { 't-input-with-prepend': vendor !== VENDOR_TYPE.BITBUCKET })}>
            {vendor !== VENDOR_TYPE.BITBUCKET && <Dropdown
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
            />}
            <Input
              id='orgName'
              type='text'
              value={userOrOrg}
              onChange={(e) => setUserOrOrg(e.target.value)}
              placeholder={vendor !== VENDOR_TYPE.BITBUCKET ? (importType === SYNC_REPO_METHOD.GH_ORG ? 'organization-name' : 'user-name') : 'user or organization'}
              onKeyPress={(e) => (e.key === 'Enter' && addImport())}
            />
          </div>
          <Button
            label='Add'
            disabled={!userOrOrg}
            className='whitespace-nowrap'
            startIcon={<PlusIcon className='t-icon' />}
            onClick={addImport}
          />
        </div>
      </div>

      {/** Auto Import Table */}
      {records && <FilterHeader initValue={searchImport} setSearch={setSearchImport} />}

      {loading
        ? <Loading />
        : records
          ? <AutoImportTable imports={imports} />
          : <div className='bg-white p-6 pt-0'>
            <Panel className='rounded-md shadow-sm'>
              <Panel.Body className='p-12 m-auto'>
                <span className='text-gray-500'>
                  {`Enter ${getVendor(vendor)} organization or username`}
                </span>
              </Panel.Body>
            </Panel>
          </div>
      }

      {showAddRepoModal && <AddRepoImportModal />}
    </>
  )
}

export default ReposAuto
