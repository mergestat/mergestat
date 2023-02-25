import { useMutation } from '@apollo/client'
import { Alert, Button, Checkbox, Modal, Toolbar } from '@mergestat/blocks'
import { XIcon } from '@mergestat/icons'
import React, { useCallback } from 'react'
import { AUTO_IMPORT_REPOS } from 'src/api-logic/graphql/mutations/add-repo'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { showSuccessAlert } from 'src/utils/alerts'
import { SYNC_REPO_METHOD } from 'src/utils/constants'

export const AddRepoImportModal: React.FC = () => {
  const { setImportAuto, setShowAddRepoModal } = useGitSourceDetailSetState()
  const [{ gsDetail: { id }, importAuto }] = useGitSourceDetailContext()

  const close = useCallback(() => {
    setShowAddRepoModal(false)
  }, [setShowAddRepoModal])

  const [autoImportRepos] = useMutation(AUTO_IMPORT_REPOS, {
    onCompleted: () => {
      showSuccessAlert('Repo auto import added')
      close()
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getGitSource']
  })

  const handleCheckBox = (type: string) => {
    const newDefaults = importAuto.defaultSyncs.map((st) => {
      if (st.type === type) {
        return { ...st, checked: !st.checked }
      }
      return st
    })
    setImportAuto({ ...importAuto, defaultSyncs: newDefaults })
  }

  const addImport = () => {
    const defaultSyncs = importAuto.defaultSyncs.filter(ds => ds.checked).map(ds => ds.type)
    const settings = {
      [importAuto.type === SYNC_REPO_METHOD.GH_ORG ? 'org' : 'user']: importAuto.name,
      defaultSyncTypes: defaultSyncs
    }

    autoImportRepos({ variables: { settings, provider: id } })
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
        <Alert type='info' className='m-6' title='Default syncs are enabled for repos this auto-import brings in.'>
          These syncs are automatically enabled for all repos that are imported from this GitHub organization or user. <a className='font-medium cursor-pointer' target='_blank' rel='noreferrer' href='https://docs.mergestat.com/mergestat/setup/repo-auto-imports'>Learn more</a>.
        </Alert>

        <table className='t-table-default t-table-hover'>
          <tbody className='bg-white'>
            {importAuto.defaultSyncs.map((syncType, index) => (
              <tr key={index} onClick={() => handleCheckBox(syncType.type)}>
                <td className='py-3 pl-8 pr-4 w-0'>
                  <Checkbox
                    checked={syncType.checked}
                    onChange={() => handleCheckBox(syncType.type)}
                  />
                </td>
                <td className='py-3 pl-4 pr-8'>
                  <h4 className='font-medium mb-0.5'>{syncType.shortName}</h4>
                  <p className='t-text-muted text-sm'>{syncType.description}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className="h-16 px-6">
          <Toolbar.Right>
            <Toolbar.Item>
              <Button label='Cancel' className="my-3 mr-3" skin="secondary" onClick={close} />
              <Button label='Add Repo' className="my-3" skin="primary" onClick={addImport} />
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
