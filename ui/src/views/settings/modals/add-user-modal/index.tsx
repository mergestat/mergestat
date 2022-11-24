import { useMutation } from '@apollo/client'
import { Button, HelpText, Input, Label, Modal, Toolbar } from '@mergestat/blocks'
import { XIcon } from '@mergestat/icons'
import cx from 'classnames'
import React, { ChangeEvent, useCallback, useState } from 'react'
import { AddUserMutation } from 'src/api-logic/graphql/generated/schema'
import { ADD_USER } from 'src/api-logic/graphql/mutations/manage-users'
import { useUserSettingsSetState } from 'src/state/contexts/user-settings.context'
import { showSuccessAlert } from 'src/utils/alerts'
import { TEST_IDS, USER_ROLES } from 'src/utils/constants'

export const AddUserModal: React.FC = () => {
  const { setShowAddUserModal } = useUserSettingsSetState()

  const [addUser] = useMutation(ADD_USER, {
    errorPolicy: 'all',
    onCompleted: (data: AddUserMutation) => {
      data.userMgmtAddUser && showSuccessAlert('User added')
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getUsers']
  })

  const close = useCallback(() => {
    setShowAddUserModal(false)
  }, [setShowAddUserModal])

  const [role, setRole] = useState<string>()
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [passwordConfirm, setPasswordConfirm] = useState<string>()
  const [error, setError] = useState<boolean>(false)

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value)
  }

  const handleAddUser = () => {
    if (password !== passwordConfirm) {
      setError(true)
    } else {
      addUser({ variables: { username, password, role } })
      setError(false)
      close()
    }
  }

  return (
    <Modal open onClose={close} size='md'>
      <Modal.Header>
        <Toolbar className='h-16 px-6'>
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Add User</Modal.Title>
            </Toolbar.Item>
          </Toolbar.Left>
          <Toolbar.Right>
            <Toolbar.Item>
              <Button
                skin='borderless-muted'
                startIcon={<XIcon className='t-icon' />}
                onClick={close}
              />
            </Toolbar.Item>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Header>
      <Modal.Body>
        <div className='p-6'>
          <form className='space-y-6'>
            <div>
              <Label>Username</Label>
              <Input value={username} placeholder="username"
                data-testid={TEST_IDS.usersAddUsername}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter' && handleAddUser())}
              />
            </div>
            <div>
              <Label>Password</Label>
              <Input type='password' value={password} placeholder="username"
                data-testid={TEST_IDS.usersAddPassword}
                variant={error ? 'error' : 'default'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter' && handleAddUser())}
              />
            </div>
            <div>
              <Label>Confirm password</Label>
              <Input type='password' value={passwordConfirm} placeholder="username"
                data-testid={TEST_IDS.usersAddPasswordConfirm}
                variant={error ? 'error' : 'default'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordConfirm(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter' && handleAddUser())}
              />
              {error && (
                <HelpText variant="error">{'Passwords don\'t match'}</HelpText>
              )}
            </div>
            <div>
              <Label>Role</Label>
              <div className='space-y-3'>
                {USER_ROLES.map((r, index) => (
                  <div key={index} onChange={onChangeValue}>
                    <label htmlFor={`radio-role-${index}`} className='t-radio space-x-4'>
                      <div className={cx('t-radio-card w-full', { 't-radio-card-selected': role === r.key })}>
                        <div className='self-start'>
                          <input id={`radio-role-${index}`}
                            readOnly
                            type='radio'
                            name='role'
                            value={r.key}
                            checked={r ? role === r.key : undefined}
                            data-testid={`${TEST_IDS.usersAddRole}-${index}`}
                          />
                        </div>
                        <div>
                          <h4 className='font-medium mb-0.5'>{r.name}</h4>
                          <p className='font-normal text-sm t-text-muted'>{r.desc}</p>
                        </div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className='h-16 px-6'>
          <Toolbar.Right>
            <div className='t-button-toolbar'>
              <Button skin='secondary' label='Cancel' onClick={close} />
              <Button label='Add User'
                data-testid={TEST_IDS.usersAddButton}
                onClick={handleAddUser}
              />
            </div>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
