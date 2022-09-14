import { ApolloError, useMutation } from '@apollo/client'
import { Button, Modal, Toolbar } from '@mergestat/blocks'
import { TrashIcon, XIcon } from '@mergestat/icons'
import React, { useCallback } from 'react'
import REMOVE_REPO from 'src/api-logic/graphql/mutations/remove-repo'
import { useRepositoriesContext, useRepositoriesSetState } from 'src/state/contexts'
import { showErrorAlert, showSuccessAlert } from 'src/utils/alerts'
import useRepos from 'src/views/hooks/useRepos'

export const RemoveRepositoryModal: React.FC = () => {
  const [{ repoToRemove, search }] = useRepositoriesContext()
  const { setShowRemoveRepositoryModal } = useRepositoriesSetState()
  const { refetch } = useRepos(search)

  const close = useCallback(() => {
    setShowRemoveRepositoryModal(false)
  }, [setShowRemoveRepositoryModal])

  const [removeRepo] = useMutation(REMOVE_REPO, {
    onError: (error: ApolloError) => {
      showErrorAlert(error.message)
    },
    onCompleted: () => {
      showSuccessAlert('Repository removed successfully')
      refetch()
      close()
    }
  })

  return (
    <Modal open onClose={close} size="sm">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Remove Repository</Modal.Title>
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
        <div className="p-6">¿Are you sure to remove <b>{repoToRemove?.name}</b>?</div>
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
                  variables: { id: repoToRemove?.id }
                })}
                startIcon={<TrashIcon className="t-icon" />}
                className="my-3"
              >
                Delete Repository
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
