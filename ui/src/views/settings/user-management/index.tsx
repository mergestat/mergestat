import { useQuery } from '@apollo/client'
import { Avatar, Button, Input, Panel, Toolbar } from '@mergestat/blocks'
import { PencilIcon, PlusIcon, SearchIcon, TrashIcon, UserIcon } from '@mergestat/icons'
import { debounce } from 'lodash'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import { UserData } from 'src/@types'
import { UsersQuery } from 'src/api-logic/graphql/generated/schema'
import { LIST_USERS } from 'src/api-logic/graphql/queries/users'
import { mapToUserData } from 'src/api-logic/mappers/users'
import Loading from 'src/components/Loading'
import { useUserSettingsContext, useUserSettingsSetState } from 'src/state/contexts/user-settings.context'
import { TEST_IDS } from 'src/utils/constants'
import SettingsView from 'src/views/settings'
import { AddUserModal } from 'src/views/settings/modals/add-user-modal'
import { EditUserModal } from 'src/views/settings/modals/edit-user-modal'
import { RemoveUserModal } from 'src/views/settings/modals/remove-user-modal'

const UserManagement: NextPage = () => {
  const [{ showAddUserModal, showEditUserModal, showRemoveUserModal }] = useUserSettingsContext()
  const { setShowAddUserModal, setShowEditUserModal, setShowRemoveUserModal } = useUserSettingsSetState()
  const [users, setUsers] = useState<UserData[]>([])
  const [search, setSearch] = useState<string>('')

  const { loading, data, refetch } = useQuery<UsersQuery>(LIST_USERS, {
    variables: { search },
    fetchPolicy: 'no-cache'
  })

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
        <Head>
          <title>MergeStat</title>
        </Head>
        <SettingsView>
          {/* Main content */}
          <div className='flex flex-col flex-1 overflow-hidden'>
            <div className='bg-white h-16 w-full border-b px-8'>
              <Toolbar className='h-full'>
                <Toolbar.Left>
                  <h2 className='t-h2 mb-0'>User Management</h2>
                </Toolbar.Left>
                <Toolbar.Right>
                  <Button className='whitespace-nowrap' label='Add User' startIcon={<PlusIcon className='t-icon' />} onClick={() => setShowAddUserModal(true)} />
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
                              <th scope='col' key='status' className='whitespace-nowrap'>Name</th>
                              <th scope='col' key='name' className='whitespace-nowrap'>Role</th>
                              <th scope='col' key='actions' className='whitespace-nowrap'></th>
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
