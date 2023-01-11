import { useQuery } from '@apollo/client'
import { Avatar, Button, Input, Panel, Toolbar } from '@mergestat/blocks'
import { PencilIcon, PlusIcon, SearchIcon, TrashIcon, UserIcon } from '@mergestat/icons'
import { debounce } from 'lodash'
import type { NextPage } from 'next'
import { Fragment, useEffect, useState } from 'react'
import { UserData, UserTypeUI } from 'src/@types'
import { GetUsersQuery } from 'src/api-logic/graphql/generated/schema'
import { LIST_USERS } from 'src/api-logic/graphql/queries/get-users'
import { mapToUserData } from 'src/api-logic/mappers/users'
import Loading from 'src/components/Loading'
import { useUserSettingsContext, useUserSettingsSetState } from 'src/state/contexts/user-settings.context'
import { mapToUserType } from 'src/utils'
import { TEST_IDS } from 'src/utils/constants'
import useCurrentUser from 'src/views/hooks/useCurrentUser'
import SettingsView from 'src/views/settings'
import { AddUserModal } from 'src/views/settings/modals/add-user-modal'
import { EditUserModal } from 'src/views/settings/modals/edit-user-modal'
import { RemoveUserModal } from 'src/views/settings/modals/remove-user-modal'

const UserManagement: NextPage = () => {
  const [{ showAddUserModal, showEditUserModal, showRemoveUserModal }] = useUserSettingsContext()
  const { setShowAddUserModal, setShowEditUserModal, setShowRemoveUserModal, setUsernameEdit, setRolEdit } = useUserSettingsSetState()
  const [users, setUsers] = useState<UserData[]>([])
  const [search, setSearch] = useState<string>('')

  const { data: currentUserData } = useCurrentUser()

  const { loading, data, refetch } = useQuery<GetUsersQuery>(LIST_USERS, {
    variables: { search },
    fetchPolicy: 'no-cache'
  })

  const handleUserEdition = (name: string, role: UserTypeUI) => {
    setUsernameEdit(name)
    setRolEdit(mapToUserType(role))
    setShowEditUserModal(true)
  }

  const handleUserDeletion = (name: string) => {
    setUsernameEdit(name)
    setShowRemoveUserModal(true)
  }

  const onChange = debounce((e) => setSearch(e.target.value), 300)

  useEffect(() => {
    setUsers(mapToUserData(data))
  }, [data])

  useEffect(() => {
    refetch({ search })
  }, [refetch, search])

  return (
    <>
      <Fragment>
        <SettingsView>
          {/* Main content */}
          <div className='flex flex-col flex-1 overflow-hidden'>
            <div className='bg-white h-16 w-full border-b px-8'>
              <Toolbar className='h-full'>
                <Toolbar.Left>
                  <h2 className='t-h2 mb-0'>User Management</h2>
                </Toolbar.Left>
                <Toolbar.Right>
                  <Button className='whitespace-nowrap'
                    data-testid={TEST_IDS.usersTableListAddUser}
                    label='Add User'
                    startIcon={<PlusIcon className='t-icon' />}
                    onClick={() => setShowAddUserModal(true)}
                  />
                </Toolbar.Right>
              </Toolbar>
            </div>
            <div className='flex-1 overflow-auto p-8'>
              <div className='mb-6'>
                <Input
                  data-testid={TEST_IDS.inputUserSearch}
                  placeholder="Search..."
                  startIcon={<SearchIcon className="t-icon t-icon-muted" />}
                  className="xl_w-3/5"
                  onChange={onChange}
                />
              </div>
              {loading
                ? <Loading />
                : users.length < 1
                  ? <div data-testid={TEST_IDS.usersListEmpty} className='flex justify-center items-center bg-white py-5'>
                    No data available!
                  </div>
                  : <Panel className='rounded-md w-full shadow-sm'>
                    <Panel.Body className='p-0 overflow-hidden'>
                      <div className='flex-1 overflow-x-auto overflow-y-hidden'>
                        <table className='t-table-default' data-testid={TEST_IDS.usersTableList}>
                          <thead>
                            <tr className='bg-white'>
                              <th scope='col' key='status' className='whitespace-nowrap w-1'>Name</th>
                              <th scope='col' key='name' className='whitespace-nowrap w-1'>Role</th>
                              <th scope='col' key='actions' className='whitespace-nowrap  w-1'></th>
                            </tr>
                          </thead>

                          <tbody className='bg-white'>
                            {users.map((user, index) => (
                              <tr key={index}>
                                <td>
                                  <div className='flex items-center gap-4'>
                                    <Avatar icon={<UserIcon className='t-icon' />} />
                                    <span className='whitespace-nowrap font-medium' data-testid={TEST_IDS.usersNameTable}>
                                      {user.name}
                                    </span>
                                  </div>
                                </td>
                                <td className='whitespace-nowrap'>
                                  {user.role}
                                </td>
                                <td className='text-gray-500 text-right py-4'>
                                  <Button
                                    skin='borderless-muted'
                                    className='mr-5'
                                    startIcon={<PencilIcon className='t-icon' />}
                                    onClick={() => handleUserEdition(user.name, user.role)}
                                    data-testid={`${TEST_IDS.usersEditUser}-${index}`}
                                    isIconOnly
                                  />
                                  <Button
                                    skin='borderless-muted'
                                    startIcon={<TrashIcon className='t-icon' />}
                                    onClick={() => handleUserDeletion(user.name)}
                                    data-testid={`${TEST_IDS.usersRemoveUser}-${index}`}
                                    style={{ visibility: currentUserData?.currentMergeStatUser === user.name ? 'hidden' : 'unset' }}
                                    isIconOnly
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Panel.Body>
                  </Panel>
              }
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
