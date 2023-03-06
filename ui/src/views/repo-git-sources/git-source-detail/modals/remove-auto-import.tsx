import { useMutation } from '@apollo/client'
import { Button, Modal, Spinner, Toolbar } from '@mergestat/blocks'
import { TrashIcon, XIcon } from '@mergestat/icons'
import React, { useCallback } from 'react'
import { REMOVE_IMPORT } from 'src/api-logic/graphql/mutations/repos'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { showSuccessAlert } from 'src/utils/alerts'
import { TEST_IDS } from 'src/utils/constants'

export const RemoveAutoImportModal: React.FC = () => {
  const { setShowRemoveImportModal } = useGitSourceDetailSetState()
  const [{ importInfo }] = useGitSourceDetailContext()

  const close = useCallback(() => {
    setShowRemoveImportModal(false)
  }, [setShowRemoveImportModal])

  const [removeImport, { loading }] = useMutation(REMOVE_IMPORT, {
    onCompleted: () => {
      showSuccessAlert('Repo auto import removed')
      close()
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getGitSource', 'getRepoImports']
  })

  return (
    <Modal open onClose={close} size="sm">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Remove Auto Import</Modal.Title>
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
        <div className='px-6 py-6'>
          Are you sure you want to remove the repo auto import for the <strong className="font-semibold text-gray-800">{importInfo?.name}</strong> {importInfo?.type}?
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className="h-16 px-6">
          <Toolbar.Right>
            <Toolbar.Item>
              <Button
                skin="secondary"
                onClick={close}
                className="my-3 mr-3"
              >
                Cancel
              </Button>
              <Button
                skin="danger"
                disabled={loading}
                onClick={() => removeImport({
                  variables: { id: importInfo?.id }
                })}
                startIcon={loading ? <Spinner size="sm" className='mr-2' /> : <TrashIcon className="t-icon" />}
                data-testid={TEST_IDS.removeRepoButtonModal}
                className="my-3"
              >
                { loading ? 'Removing...' : 'Remove Auto Import' }
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
