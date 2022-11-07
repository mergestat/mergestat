import { Avatar, Button, Input, Panel, Toolbar } from '@mergestat/blocks'
import { PencilIcon, PlusIcon, SearchIcon, TrashIcon, UserIcon } from '@mergestat/icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import SettingsView from 'src/views/settings'
import { useUserSettingsContext, useUserSettingsSetState } from 'src/state/contexts/user-settings.context'
import { AddUserModal } from 'src/views/settings/modals/add-user-modal'
import { EditUserModal } from 'src/views/settings/modals/edit-user-modal'
import { RemoveUserModal } from 'src/views/settings/modals/remove-user-modal'

const users = [
  {
    name: 'admin',
    role: 'Admin',
    created: '4 minutes ago'
  },
  {
    name: 'username',
    role: 'User',
    created: '4 minutes ago'
  },
  {
    name: 'username',
    role: 'User',
    created: '4 minutes ago'
  },
]

const UserManagement: NextPage = () => {
  const [{ showAddUserModal, showEditUserModal, showRemoveUserModal }] = useUserSettingsContext()
  const { setShowAddUserModal, setShowEditUserModal, setShowRemoveUserModal } = useUserSettingsSetState()

  return (
    <>
      <Fragment>
        <Head>
          <title>MergeStat</title>
        </Head>
        <SettingsView>
          {/* Main content */}
          <div className='flex flex-col flex-1'>
            <div className='bg-white h-16 w-full border-b px-8'>
              <Toolbar className='h-full'>
                <Toolbar.Left>
                  <h2 className='t-h2 mb-0'>User Management</h2>
                </Toolbar.Left>
                <Toolbar.Right>
                  <Button label='Add User' startIcon={<PlusIcon className='t-icon' />} onClick={() => setShowAddUserModal(true)} />
                </Toolbar.Right>
              </Toolbar>
            </div>
            <div className='flex-1 overflow-auto p-8'>
              <div className='mb-6'>
                <Input
                  placeholder="Search..."
                  startIcon={<SearchIcon className="t-icon t-icon-muted" />}
                  className="xl_w-3/5"
                />
              </div>
              <Panel className='rounded-md w-full shadow-sm'>
                <Panel.Body className='p-0'>
                    <table className='t-table-default'>
                      <thead>
                        <tr className='bg-white'>
                          <th scope='col' key='status' className='whitespace-nowrap'>Name</th>
                          <th scope='col' key='name' className='whitespace-nowrap'>Role</th>
                          <th scope='col' key='lastImport' className='whitespace-nowrap'>Created</th>
                          <th scope='col' key='actions' className='whitespace-nowrap'></th>
                        </tr>
                      </thead>

                      <tbody className='bg-white'>
                        {users.map((user, index) => (
                          <tr key={index}>
                            <td>
                              <div className='flex items-center gap-4'>
                                <Avatar icon={<UserIcon className='t-icon' />} />
                                <span className='whitespace-nowrap font-medium'>{user.name}</span>
                              </div>
                            </td>
                            <td className='whitespace-nowrap'>
                              {user.role}
                            </td>
                            <td className='t-text-muted whitespace-nowrap'>
                              {user.created}
                            </td>
                            <td className='text-gray-500 py-4'>
                              <div className='t-button-toolbar'>
                                <Button
                                  skin='borderless-muted'
                                  className='mr-5'
                                  startIcon={<PencilIcon className='t-icon'
                                  onClick={() => setShowEditUserModal(true)} />}
                                  isIconOnly
                                />
                                <Button
                                  skin='borderless-muted'
                                  startIcon={<TrashIcon className='t-icon' />}
                                  isIconOnly
                                  onClick={() => setShowRemoveUserModal(true)} />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                </Panel.Body>
              </Panel>
            </div>
          </div>
        </SettingsView>
      </Fragment>
      {showAddUserModal && <AddUserModal />}
      {showEditUserModal && <EditUserModal />}
      {showRemoveUserModal && <RemoveUserModal />}
    </>
  )
}

export default UserManagement
