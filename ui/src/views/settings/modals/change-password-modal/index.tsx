import { useMutation } from '@apollo/client'
import { Button, HelpText, Input, Label, Modal, Toolbar } from '@mergestat/blocks'
import { XIcon } from '@mergestat/icons'
import React, { ChangeEvent, useCallback, useState } from 'react'
import { UpdateUserPasswordMutation } from 'src/api-logic/graphql/generated/schema'
import { UPDATE_USER_PASSWORD } from 'src/api-logic/graphql/mutations/manage-users'
import { useUserSettingsContext, useUserSettingsSetState } from 'src/state/contexts/user-settings.context'
import { showSuccessAlert } from 'src/utils/alerts'
import { TEST_IDS } from 'src/utils/constants'

export const ChangePasswordModal: React.FC = () => {
  const [{ usernameEdit }] = useUserSettingsContext()
  const { setShowChangePasswordModal } = useUserSettingsSetState()

  const [password, setPassword] = useState<string>()
  const [passwordConfirm, setPasswordConfirm] = useState<string>()
  const [error, setError] = useState<string>('')

  const [updatePassword] = useMutation(UPDATE_USER_PASSWORD, {
    errorPolicy: 'all',
    onCompleted: (data: UpdateUserPasswordMutation) => {
      data.userMgmtUpdateUserPassword && showSuccessAlert('Password changed')
    }
  })

  const close = useCallback(() => {
    setShowChangePasswordModal(false)
  }, [setShowChangePasswordModal])

  const handleChangePassword = () => {
    if (!password || !passwordConfirm) return

    setError('')

    if (password !== passwordConfirm) {
      setError('Passwords don\'t match')
    } else { // Update password and/or role
      updatePassword({ variables: { username: usernameEdit, password } })
      close()
    }
  }

  return (
    <Modal open onClose={close} size='md'>
      <Modal.Header>
        <Toolbar className='h-16 px-6'>
          <Toolbar.Left>
            <Toolbar.Item>
              <Modal.Title>Change password</Modal.Title>
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
          <form className='space-y-4'>
            {/* <div>
              <Label>Current password</Label>
              <Input type='password' />
            </div> */}
            <div>
              <Label>Password</Label>
              <Input type='password' value={password} placeholder="password"
                data-testid={TEST_IDS.usersSettingsPassword}
                variant={error ? 'error' : 'default'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter' && handleChangePassword())}
              />
              {/* <HelpText>Password must be at least 10 characters</HelpText> */}
            </div>
            <div>
              <Label>Confirm password</Label>
              <Input type='password' value={passwordConfirm} placeholder="confirm password"
                data-testid={TEST_IDS.usersSettingsPasswordConfirm}
                variant={error ? 'error' : 'default'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordConfirm(e.target.value)}
                onKeyPress={(e) => (e.key === 'Enter' && handleChangePassword())}
              />
              {error && (
                <HelpText variant="error">{error}</HelpText>
              )}
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className='h-16 px-6'>
          <Toolbar.Right>
            <div className='t-button-toolbar'>
              <Button skin='secondary' label='Cancel' onClick={close} />
              <Button label='Change Password'
                onClick={handleChangePassword}
                disabled={!password || !passwordConfirm}
                data-testid={TEST_IDS.usersSettingsChangeButton}
              />
            </div>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
