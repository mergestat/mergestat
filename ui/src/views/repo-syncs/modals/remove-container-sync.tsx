import { useMutation } from '@apollo/client'
import { Button, Modal, Toolbar } from '@mergestat/blocks'
import { TrashIcon, XIcon } from '@mergestat/icons'
import React, { useCallback } from 'react'
import { REMOVE_CONTAINER_SYNC } from 'src/api-logic/graphql/mutations/repo-syncs'
import { useContainerSyncsContext, useContainerSyncsSetState } from 'src/state/contexts'
import { showSuccessAlert } from 'src/utils/alerts'

export const RemoveContainerSyncModal: React.FC = () => {
  const [{ containerSyncToRemove }] = useContainerSyncsContext()
  const { setShowRemoveContainerSyncModal } = useContainerSyncsSetState()

  const close = useCallback(() => {
    setShowRemoveContainerSyncModal(false)
  }, [setShowRemoveContainerSyncModal])

  const [removeRepo] = useMutation(REMOVE_CONTAINER_SYNC, {
    onCompleted: () => {
      showSuccessAlert('Repo Sync removed successfully')
      close()
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getContainerSyncs']
  })

  return (
    <Modal open onClose={close} size="sm">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Remove Repo Sync</Modal.Title>
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
      <Modal.Body className='p-6'>
        <div>
          Are you sure you want to remove <strong className="font-semibold text-gray-800">{containerSyncToRemove?.name}</strong> repo sync?
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
                  variables: { id: containerSyncToRemove?.id }
                })}
                startIcon={<TrashIcon className="t-icon" />}
                className="my-3"
              >
                Remove Repo Sync
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
