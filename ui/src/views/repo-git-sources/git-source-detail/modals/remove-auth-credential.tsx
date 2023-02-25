import { useMutation } from '@apollo/client'
import { Button, Modal, Toolbar } from '@mergestat/blocks'
import { TrashIcon, XIcon } from '@mergestat/icons'
import React, { useCallback } from 'react'
import { REMOVE_CREDENTIAL } from 'src/api-logic/graphql/mutations/auth-credentials'
import { showSuccessAlert } from 'src/utils/alerts'
import { TEST_IDS } from 'src/utils/constants'

type RemoveAuthModalProps = {
  id?: string
  setShowRemoveAuthModal: (e: boolean) => void
}

export const RemoveAuthModal: React.FC<RemoveAuthModalProps> = ({ id, setShowRemoveAuthModal }: RemoveAuthModalProps) => {
  const close = useCallback(() => {
    setShowRemoveAuthModal(false)
  }, [setShowRemoveAuthModal])

  const [removeCredential] = useMutation(REMOVE_CREDENTIAL, {
    onCompleted: () => {
      showSuccessAlert('Auth credential removed')
      close()
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getGitSource']
  })

  return (
    <Modal open onClose={close} size="sm">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Remove Auth Credential</Modal.Title>
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
          Are you sure you want to remove the setted credential?
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
                onClick={() => removeCredential({
                  variables: { id }
                })}
                startIcon={<TrashIcon className="t-icon" />}
                data-testid={TEST_IDS.removeRepoButtonModal}
                className="my-3"
              >
                Remove Auth
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
