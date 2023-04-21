import { Alert, Button, Dropdown, Input, Label, Menu, Panel } from '@mergestat/blocks'
import { CaretDownIcon, PlusIcon } from '@mergestat/icons'
import cx from 'classnames'
import { useEffect, useState } from 'react'
import Loading from 'src/components/Loading'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { capitalize, getVendor, getVendorLabelType } from 'src/utils'
import { SYNC_REPO_METHOD, VENDOR_TYPE } from 'src/utils/constants'
import useRepoImports from 'src/views/hooks/gitSources/useRepoImports'
import useContainerImages from 'src/views/hooks/gitSourcesContainers/useSyncTypes'
import { FilterHeader } from 'src/views/shared/filter-header'
import { AddRepoImportModal } from '../../../modals/add-repo-import'
import { AutoImportTable } from '../components/auto-import-table'

const ReposAuto: React.FC = () => {
  const { containerImages } = useContainerImages()
  const [{ showAddRepoModal, searchImport, gsDetail: { vendor } }] = useGitSourceDetailContext()
  const { setImportAutoContainer, setShowAddRepoModal, setSearchImport } = useGitSourceDetailSetState()

  const { loading, imports, records } = useRepoImports()

  const [importType, setImportType] = useState('')
  const [userOrOrg, setUserOrOrg] = useState('')

  const addImport = () => {
    setImportAutoContainer({ name: userOrOrg, type: importType, defaultSyncs: containerImages })
    setImportType(vendor === VENDOR_TYPE.GITHUB ? SYNC_REPO_METHOD.GH_ORG : SYNC_REPO_METHOD.GL_GROUP)
    setUserOrOrg('')
    setShowAddRepoModal(true)
  }

  useEffect(() => {
    setImportType(vendor === VENDOR_TYPE.GITHUB ? SYNC_REPO_METHOD.GH_ORG : SYNC_REPO_METHOD.GL_GROUP)
  }, [vendor])

  return (
    <>
      <div className='bg-white p-6'>
        <Alert type="default" className="bg-gray-50 mb-6">
          {`Auto imports run on a schedule and bring in all repos from a ${getVendor(vendor)} ${getVendorLabelType(vendor)} or user.`}
        </Alert>

        {vendor === VENDOR_TYPE.BITBUCKET && <Label className='text-gray-500'>Owner</Label>}
        <div className='flex items-center gap-2 mb-2'>
          <div className={cx('flex-1', { 't-input-with-prepend': vendor !== VENDOR_TYPE.BITBUCKET })}>
            {vendor !== VENDOR_TYPE.BITBUCKET && <Dropdown
              alignEnd
              trigger={
                <Button isBlockBetween
                  label={(importType === SYNC_REPO_METHOD.GH_ORG || importType === SYNC_REPO_METHOD.GL_GROUP) ? capitalize(getVendorLabelType(vendor)) : 'User'}
                  endIcon={<CaretDownIcon className='t-icon' />}
                  className='w-40'
                  skin='secondary'
                />
              }
              overlay={(close) => (
                <Menu className='whitespace-nowrap w-full'>
                  <Menu.Item text={capitalize(getVendorLabelType(vendor))} onClick={() => {
                    vendor === VENDOR_TYPE.GITHUB ? setImportType(SYNC_REPO_METHOD.GH_ORG) : setImportType(SYNC_REPO_METHOD.GL_GROUP)
                    close()
                  }} />
                  <Menu.Item text='User' onClick={() => {
                    vendor === VENDOR_TYPE.GITHUB ? setImportType(SYNC_REPO_METHOD.GH_USER) : setImportType(SYNC_REPO_METHOD.GL_USER)
                    close()
                  }} />
                </Menu>
              )}
            />}
            <Input
              id='orgName'
              type='text'
              value={userOrOrg}
              onChange={(e) => setUserOrOrg(e.target.value)}
              placeholder={vendor !== VENDOR_TYPE.BITBUCKET ? ((importType === SYNC_REPO_METHOD.GH_ORG || importType === SYNC_REPO_METHOD.GL_GROUP) ? `${getVendorLabelType(vendor)}-name` : 'user-name') : 'user or organization'}
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
