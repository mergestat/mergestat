import { useMutation } from '@apollo/client'
import { Button, Modal, Toolbar } from '@mergestat/blocks'
import { TrashIcon, XIcon } from '@mergestat/icons'
import React, { useCallback } from 'react'
import { REMOVE_REPO } from 'src/api-logic/graphql/mutations/repos'
import { useGitSourceDetailContext, useGitSourceDetailSetState } from 'src/state/contexts/git-source-detail.context'
import { showSuccessAlert } from 'src/utils/alerts'

export const RemoveManualImportModal: React.FC = () => {
  const { setShowRemoveImportModal } = useGitSourceDetailSetState()
  const [{ repoInfo }] = useGitSourceDetailContext()

  const close = useCallback(() => {
    setShowRemoveImportModal(false)
  }, [setShowRemoveImportModal])

  const [removeRepo] = useMutation(REMOVE_REPO, {
    onCompleted: () => {
      showSuccessAlert('Repo removed successfully')
      close()
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getGitSource', 'getAllRepoManualImports', 'getRepoManualImports']
  })

  return (
    <Modal open onClose={close} size="sm">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Remove repo</Modal.Title>
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
          Are you sure you want to remove the repo <strong className="font-semibold text-gray-800">{repoInfo?.name}</strong>?
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
                onClick={() => removeRepo({
                  variables: { id: repoInfo?.id }
                })}
                startIcon={<TrashIcon className="t-icon" />}
                className="my-3"
              >
                Remove Repo
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
