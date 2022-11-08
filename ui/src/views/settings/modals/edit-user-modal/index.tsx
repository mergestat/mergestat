import { Avatar, Button, Input, Label, Modal, Panel, Toolbar } from '@mergestat/blocks'
import { UserIcon, XIcon } from '@mergestat/icons'
import cx from 'classnames'
import React, { ChangeEvent, useCallback, useState } from 'react'
import { useUserSettingsSetState } from 'src/state/contexts/user-settings.context'

const roles = [
  {
    name: 'Admin',
    desc: 'Admins have access to everything',
  },
  {
    name: 'User',
    desc: 'Users can create, read and update data, but can’t delete any data ',
  },
  {
    name: 'Read-Only',
    desc: 'Read-Only users can only read data',
  },
]

export const EditUserModal: React.FC = () => {
  const { setShowEditUserModal } = useUserSettingsSetState()

  const close = useCallback(() => {
    setShowEditUserModal(false)
  }, [setShowEditUserModal])

  const [Role, setRole] = useState('Admin')

  function onChangeValue(event: ChangeEvent<HTMLInputElement>) {
    setRole(event.target.value)
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
                  <h4 className='font-medium mb-0.5'>johndoe</h4>
                  <p className='t-text-muted text-sm'>Created 4 days ago</p>
                </div>
              </div>
            </Panel.Body>
          </Panel>
          <form className='space-y-6'>
            <div>
              <Label>Password</Label>
              <Input type='password' />
            </div>
            <div>
              <Label>Confirm password</Label>
              <Input type='password' />
            </div>
            <div>
              <Label>Role</Label>
              <div className='space-y-3'>
                {roles.map((role, index) => (
                  <div key={index} onChange={onChangeValue}>
                    <label htmlFor={`radio-role-${index}`} className='t-radio space-x-4'>
                      <div className={cx('t-radio-card w-full', { 't-radio-card-selected': Role === role.name })}>
                        <div className='self-start'>
                          <input id={`radio-role-${index}`} type='radio' name='role' value={role.name} checked={role ? Role === role.name : undefined} />
                        </div>
                        <div>
                          <h4 className='font-medium mb-0.5'>{role.name}</h4>
                          <p className='font-normal text-sm t-text-muted'>{role.desc}</p>
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
              <Button label='Save' />
            </div>
          </Toolbar.Right>
        </Toolbar>
      </Modal.Footer>
    </Modal>
  )
}
