import { useQuery } from '@apollo/client'
import { Avatar, Button, Label, Panel, Toolbar } from '@mergestat/blocks'
import { UserIcon } from '@mergestat/icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { CurrentUserQuery } from 'src/api-logic/graphql/generated/schema'
import { CURRENT_USER } from 'src/api-logic/graphql/queries/auth'
import { useUserSettingsContext, useUserSettingsSetState } from 'src/state/contexts/user-settings.context'
import { TEST_IDS } from 'src/utils/constants'
import SettingsView from 'src/views/settings'
import { ChangePasswordModal } from 'src/views/settings/modals/change-password-modal'

const UserSettings: NextPage = () => {
  const [{ showChangePasswordModal }] = useUserSettingsContext()
  const { setShowChangePasswordModal, setUsernameEdit } = useUserSettingsSetState()

  const { data } = useQuery<CurrentUserQuery>(CURRENT_USER, { fetchPolicy: 'no-cache' })

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
                  <h2 className='t-h2 mb-0'>User Settings</h2>
                </Toolbar.Left>
              </Toolbar>
            </div>
            <div className='flex-1 overflow-auto p-8'>
              <Panel className='rounded-md w-full shadow-sm mb-6'>
                <Panel.Header>
                  <h3 className='t-panel-title'>Settings</h3>
                </Panel.Header>
                <Panel.Body className='py-8'>
                  <div className='lg_flex items-start lg_space-x-8'>
                    <div className='flex-none mb-6 lg_mb-0'>
                      <Avatar icon={<UserIcon className='t-icon' />} size='xl' />
                    </div>
                    <div className='space-y-6'>
                      <div className='space-y-0.5'>
                        <Label>Username</Label>
                        <p>{data?.currentMergeStatUser}</p>
                      </div>
                      <div className='space-y-0.5'>
                        <Label>Password</Label>
                        <Button skin='secondary' label='Change Password'
                          onClick={() => {
                            setUsernameEdit(data?.currentMergeStatUser || null)
                            setShowChangePasswordModal(true)
                          }}
                          data-testid={TEST_IDS.usersSettingsChangeModal}
                        />
                      </div>
                      {/* <div className='space-y-0.5'>
                        <Label>Role</Label>
                        <p className='mb-0.5'>User</p>
                        <p className='text-sm t-text-muted'>
                          Your role is set to user which means you can create, read and update data inside MergeStat.
                          <br /> Please contact the administrator in case you need additional rights.
                        </p>
                      </div> */}
                    </div>
                  </div>
                </Panel.Body>
              </Panel>
            </div>
          </div>
        </SettingsView>
      </Fragment>
      {showChangePasswordModal && <ChangePasswordModal />}
    </>
  )
}

export default UserSettings
