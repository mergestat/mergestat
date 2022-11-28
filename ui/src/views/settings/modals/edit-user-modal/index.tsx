import { useMutation } from '@apollo/client'
import { Avatar, Button, HelpText, Input, Label, Modal, Panel, Toolbar } from '@mergestat/blocks'
import { UserIcon, XIcon } from '@mergestat/icons'
import cx from 'classnames'
import React, { ChangeEvent, useCallback, useState } from 'react'
import { UpdateUserPasswordMutation, UpdateUserRoleMutation } from 'src/api-logic/graphql/generated/schema'
import { UPDATE_USER_PASSWORD, UPDATE_USER_ROLE } from 'src/api-logic/graphql/mutations/manage-users'
import { useUserSettingsContext, useUserSettingsSetState } from 'src/state/contexts/user-settings.context'
import { showSuccessAlert } from 'src/utils/alerts'
import { TEST_IDS, USER_ROLES } from 'src/utils/constants'

export const EditUserModal: React.FC = () => {
  const [{ usernameEdit, roleEdit }] = useUserSettingsContext()
  const { setShowEditUserModal } = useUserSettingsSetState()

  const [updatePassword] = useMutation(UPDATE_USER_PASSWORD, {
    errorPolicy: 'all',
    onCompleted: (data: UpdateUserPasswordMutation) => {
      role === roleEdit && data.userMgmtUpdateUserPassword && showSuccessAlert('User updated')
    },
    awaitRefetchQueries: true,
    refetchQueries: () => {
      return role === roleEdit ? (['getUsers']) : ([])
    }
  })

  const [updateRole] = useMutation(UPDATE_USER_ROLE, {
    errorPolicy: 'all',
    onCompleted: (data: UpdateUserRoleMutation) => {
      data.userMgmtSetUserRole && showSuccessAlert('User updated')
    },
    awaitRefetchQueries: true,
    refetchQueries: () => ['getUsers']
  })

  const close = useCallback(() => {
    setShowEditUserModal(false)
  }, [setShowEditUserModal])

  const [role, setRole] = useState<string | null>(roleEdit)
  const [password, setPassword] = useState<string>()
  const [passwordConfirm, setPasswordConfirm] = useState<string>()
  const [error, setError] = useState<boolean>(false)

  function onChangeValue(event: ChangeEvent<HTMLInputElement>) {
    setRole(event.target.value)
  }

  const handleUpdateUser = () => {
    setError(false)

    // If password or confirm password are typed
    if (password || passwordConfirm) {
      if (password !== passwordConfirm) {
        setError(true)
      } else { // Update password and/or role
        updatePassword({ variables: { username: usernameEdit, password } })
        role !== roleEdit && updateRole({ variables: { username: usernameEdit, role } })
        close()
      }
    } else { // Just update the role
      updateRole({ variables: { username: usernameEdit, role } })
      close()
    }
  }

  return (
    <Modal open onClose={close} size='md'>
      <Modal.Header>
        <Toolbar className='h-16 px-6'>
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Edit User</Modal.Title>
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
          <Panel className='mb-6'>
            <Panel.Body>
              <div className='flex items-center space-x-4'>
                <Avatar size='lg' icon={<UserIcon className='t-icon' />} />
                <div>
                  <h4 className='font-medium mb-0.5'>{usernameEdit}</h4>
                  {/* <p className='t-text-muted text-sm'>Created 4 days ago</p> */}
                </div>
              </div>
            </Panel.Body>
          </Panel>
          <form className='space-y-6'>
            <div>
              <Label>Password</Label>
              <Input type='password' value={password} placeholder="password"
                data-testid={TEST_IDS.usersEditPassword}
                variant={error ? 'error' : 'default'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter' && handleUpdateUser())}
              />
            </div>
            <div>
              <Label>Confirm password</Label>
              <Input type='password' value={passwordConfirm} placeholder="confirm password"
                data-testid={TEST_IDS.usersEditPasswordConfirm}
                variant={error ? 'error' : 'default'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordConfirm(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter' && handleUpdateUser())}
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
                            data-testid={`${TEST_IDS.usersEditRole}-${index}`}
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
              <Button label='Save'
                data-testid={TEST_IDS.usersEditButton}
                disabled={!password || !passwordConfirm || !role}
                onClick={handleUpdateUser}
              />
            </div>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
