import { useMutation } from '@apollo/client'
import { Alert, Button, Checkbox, Modal, Toolbar } from '@mergestat/blocks'
import { CogIcon, TableIcon, XIcon } from '@mergestat/icons'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { AUTO_IMPORT_REPOS_CONTAINER } from 'src/api-logic/graphql/mutations/add-repo'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { showSuccessAlert } from 'src/utils/alerts'
import { EmptyData } from 'src/views/shared/empty-data'

export const AddRepoImportModal: React.FC = () => {
  const router = useRouter()

  const { setImportAutoContainer, setShowAddRepoModal } = useGitSourceDetailSetState()
  const [{ gsDetail: { id }, importAutoContainer }] = useGitSourceDetailContext()

  const close = useCallback(() => {
    setShowAddRepoModal(false)
  }, [setShowAddRepoModal])

  const [autoImportRepos] = useMutation(AUTO_IMPORT_REPOS_CONTAINER, {
    onCompleted: () => {
      showSuccessAlert('Repo auto import added')
      close()
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getGitSource', 'getRepoImports']
  })

  const handleCheckBox = (id: string) => {
    const newDefaults = importAutoContainer.defaultSyncs.map((ci) => {
      if (ci.id === id) {
        return { ...ci, checked: !ci.checked }
      }
      return ci
    })
    setImportAutoContainer({ ...importAutoContainer, defaultSyncs: newDefaults })
  }

  const addImport = () => {
    const defaultSyncs = importAutoContainer.defaultSyncs.filter(ds => ds.checked).map(ds => ds.id)

    autoImportRepos({
      variables: {
        providerId: id,
        importType: importAutoContainer.type,
        importTypeName: importAutoContainer.name,
        defaultContainerImageIds: defaultSyncs
      }
    })
  }

  return (
    <Modal open onClose={close} size="lg">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Default syncs</Modal.Title>
            </Toolbar.Item>
          </Toolbar.Left>
          <Toolbar.Right>
            <Toolbar.Item>
              <Button
                skin="borderless-muted"
                onClick={close}
                startIcon={<XIcon className="t-icon" />}
              />
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Header>
      <Modal.Body>
        {importAutoContainer.defaultSyncs.length > 0 &&
          <>
            <Alert type='info' className='m-6' title='Default syncs are enabled for repos this auto-import brings in.'>
              These syncs are automatically enabled for all repos that are imported from this GitHub organization or user. <a className='font-medium cursor-pointer' target='_blank' rel='noreferrer' href='https://docs.mergestat.com/mergestat/setup/repo-auto-imports'>Learn more</a>.
            </Alert>

            <table className='t-table-default t-table-hover'>
              <tbody className='bg-white'>
                {importAutoContainer.defaultSyncs.map((ci, index) => (
                  <tr key={index} onClick={() => handleCheckBox(ci.id)}>
                    <td className='py-3 pl-8 pr-4 w-0'>
                      <Checkbox
                        checked={ci.checked}
                        onChange={() => handleCheckBox(ci.id)}
                      />
                    </td>
                    <td className='py-3 pl-4 pr-8'>
                      <h4 className='font-medium mb-0.5'>{ci.name}</h4>
                      <p className='t-text-muted text-sm'>{ci.description}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        }

        {importAutoContainer.defaultSyncs.length === 0 &&
          <div className='my-12'>
            <EmptyData
              message='No repo syncs yet'
              icon={<TableIcon className="t-icon" />}
              bottomElements={
                <Button
                  skin="borderless"
                  label='Manage Syncs'
                  startIcon={<CogIcon className="t-icon" />}
                  onClick={() => router.push('/repos/repo-syncs')}
                />
              }
            />
          </div>
        }
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className="h-16 px-6">
          <Toolbar.Right>
            <Toolbar.Item>
              <Button label='Cancel' className="my-3 mr-3" skin="secondary" onClick={close} />
              <Button label='Add Auto Import' className="my-3" skin="primary" onClick={addImport} />
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
