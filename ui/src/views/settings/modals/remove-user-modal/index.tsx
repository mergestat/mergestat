import { useMutation } from '@apollo/client'
import { Button, Modal, Toolbar } from '@mergestat/blocks'
import { TrashIcon, XIcon } from '@mergestat/icons'
import React, { useCallback } from 'react'
import { RemoveUserMutation } from 'src/api-logic/graphql/generated/schema'
import { REMOVE_USER } from 'src/api-logic/graphql/mutations/add-users'
import { useUserSettingsContext, useUserSettingsSetState } from 'src/state/contexts'
import { showSuccessAlert } from 'src/utils/alerts'
import { TEST_IDS } from 'src/utils/constants'

export const RemoveUserModal: React.FC = () => {
  const [{ usernameEdit }] = useUserSettingsContext()
  const { setShowRemoveUserModal } = useUserSettingsSetState()

  const [removeUser] = useMutation(REMOVE_USER, {
    errorPolicy: 'all',
    onCompleted: (data: RemoveUserMutation) => {
      data.userMgmtRemoveUser && showSuccessAlert('User removed')
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getUsers']
  })

  const close = useCallback(() => {
    setShowRemoveUserModal(false)
  }, [setShowRemoveUserModal])

  const handleRemoveUser = () => {
    removeUser({ variables: { username: usernameEdit } })
    close()
  }

  return (
    <Modal open onClose={close} size="sm">
      <Modal.Header>
        <Toolbar className="h-16 px-6">
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Remove User</Modal.Title>
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
          Are you sure you want to remove <strong>{usernameEdit}</strong>?
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className="h-16 px-6">
          <Toolbar.Right>
            <Toolbar.Item>
              <Button skin="secondary" onClick={close} className="my-3 mr-3" >
                Cancel
              </Button>
              <Button
                skin="danger"
                startIcon={<TrashIcon className="t-icon" />}
                className="my-3"
                data-testid={TEST_IDS.usersRemoveUserButton}
                onClick={handleRemoveUser}
              >
                Remove User
              </Button>
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
