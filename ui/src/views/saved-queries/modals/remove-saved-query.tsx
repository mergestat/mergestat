import { useMutation } from '@apollo/client'
import { Button, Modal, Toolbar } from '@mergestat/blocks'
import { TrashIcon, XIcon } from '@mergestat/icons'
import React, { useCallback } from 'react'
import { REMOVE_SAVED_QUERY } from 'src/api-logic/graphql/mutations/saved-query'
import { useSavedQueryContext, useSavedQuerySetState } from 'src/state/contexts/saved-query.context'
import { showSuccessAlert } from 'src/utils/alerts'

export const RemoveSavedQueryModal: React.FC = () => {
  const [{ sqToRemove }] = useSavedQueryContext()
  const { setShowRemoveSQModal } = useSavedQuerySetState()

  const close = useCallback(() => {
    setShowRemoveSQModal(false)
  }, [setShowRemoveSQModal])

  const [removeImport] = useMutation(REMOVE_SAVED_QUERY, {
    onCompleted: () => {
      showSuccessAlert('Saved query removed')
      close()
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getSavedQueryList']
  })

  return (
    <Modal open onClose={close} size="sm">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Remove Saved Query</Modal.Title>
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
          Are you sure you want to remove <strong className="font-semibold text-gray-800">{sqToRemove?.name}</strong> query?
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
                onClick={() => removeImport({
                  variables: { id: sqToRemove?.id }
                })}
                startIcon={<TrashIcon className="t-icon" />}
                className="my-3"
              >
                Remove
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
