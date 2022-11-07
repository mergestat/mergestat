import { Button, HelpText, Input, Label, Modal, Toolbar } from '@mergestat/blocks'
import { XIcon } from '@mergestat/icons'
import React, { useCallback } from 'react'
import { useUserSettingsSetState } from 'src/state/contexts/user-settings.context'

export const ChangePasswordModal: React.FC = () => {
  const { setShowChangePasswordModal } = useUserSettingsSetState()

  const close = useCallback(() => {
    setShowChangePasswordModal(false)
  }, [setShowChangePasswordModal])

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
            <div>
              <Label>Current password</Label>
              <Input type='password' />
            </div>
            <div>
              <Label>Password</Label>
              <Input type='password' />
              <HelpText>Password must be at least 10 characters</HelpText>
            </div>
            <div>
              <Label>Confirm password</Label>
              <Input type='password' />
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Toolbar className='h-16 px-6'>
          <Toolbar.Right>
            <div className='t-button-toolbar'>
              <Button skin='secondary' label='Cancel' onClick={close} />
              <Button label='Change Password' />
            </div>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
