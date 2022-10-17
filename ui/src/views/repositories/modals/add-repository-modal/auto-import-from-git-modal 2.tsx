import { Alert, Button, Checkbox, Dropdown, Input, ListItem, Menu, Panel, Sidebar } from '@mergestat/blocks'
import { CaretDownIcon, ChevronDownIcon, ChevronRightIcon, PlusIcon } from '@mergestat/icons'
import React, { Fragment } from 'react'
import RepoImage from 'src/components/RepoImage'
import { SYNC_REPO_METHOD } from 'src/utils/constants'
import useImports from 'src/views/hooks/useImports'

const EmptyState: React.FC = () => {
  return (
    <div className='h-80'>
      <div className='flex items-center justify-center h-20 p-10 border border-gray-200 rounded'>
        <p className='text-semantic-mutedText text-center text-sm'>
          Enter GitHub organization or username to configure the auto import settings.
        </p>
      </div>
    </div>
  )
}

export const AutoImportFromGitModal: React.FC = () => {
  const {
    imports, importType, orgUserText,
    addImport, removeURL, updateImports, handleCheckBox, setImportType, setOrgUserText
  } = useImports()

  return (
    <div className='w-full flex flex-col'>
      <div className='p-6 flex-1 overflow-auto'>
        <div className='mb-6'>
          <h3 className='t-h3'>Auto import from GitHub</h3>
          <p className='text-semantic-mutedText'>This will automatically import all repos from your GitHub organization or GitHub User.</p>
        </div>
        <div className='flex items-center gap-2 mb-6'>
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
              value={orgUserText}
              onChange={(e) => setOrgUserText(e.target.value)}
              placeholder={importType === SYNC_REPO_METHOD.GH_ORG ? 'organization-name' : 'user-name'}
            />
          </div>
          <Button
            skin='secondary'
            className='whitespace-nowrap'
            startIcon={<PlusIcon className='t-icon' />}
            onClick={addImport}
          >
            Add
          </Button>
        </div>

        {imports.length === 0 && <EmptyState />}

        {imports.map((imp, index) => (
          <Fragment key={index}>
            <div className='border border-gray-200 rounded mt-6 mb-3'>
              <ListItem
                title={imp.name}
                subline={imp.type === SYNC_REPO_METHOD.GH_ORG ? 'GitHub organization' : 'GitHub user'}
                className={'px-4 py-2'}
                startIcon={<RepoImage repoType='github' orgName={imp.name} size="10" />}
                onClick={() => false}
                onTrashClick={() => removeURL(imp.name)}
              />
            </div>
            <Panel className='rounded-md w-full shadow-sm'>
              <div onClick={() => updateImports(imp.name, { key: 'opened', value: imp.opened })} aria-hidden="true">
                <Panel.Header className='flex justify-between cursor-pointer'>
                  <h4 className='t-h4 mb-0'>Select default syncs</h4>
                  {!imp.opened && <ChevronRightIcon className='t-icon t-icon-heroicons-chevron-right' />}
                  {imp.opened && <ChevronDownIcon className='t-icon t-icon-heroicons-chevron-down' />}
                </Panel.Header>
              </div>
              {imp.opened && <Panel.Body className='p-0'>
                <Alert type='info' className='m-3' title='Default syncs are enabled for repos that are imported.' />
                <table className='t-table-default t-table-clickable'>
                  <tbody className='bg-white'>
                    {imp.defaultSyncs.map((syncType, index) => (
                      <tr key={index} onClick={() => handleCheckBox(imp.name, imp.defaultSyncs, syncType.type)}>
                        <td className='py-3 pl-8 pr-4 w-0'>
                          <Checkbox
                            checked={syncType.checked}
                            onChange={() => handleCheckBox(imp.name, imp.defaultSyncs, syncType.type)}
                          />
                        </td>
                        <td className='py-3 pl-4 pr-8'>
                          <h4 className='font-medium mb-0.5'>{syncType.shortName}</h4>
                          <p className='text-semantic-mutedText text-sm'>{syncType.description}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Panel.Body>}
            </Panel>
            {index !== imports.length - 1 && <div className='mt-6 mb-3'>
              <Sidebar.Divider />
            </div>}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
