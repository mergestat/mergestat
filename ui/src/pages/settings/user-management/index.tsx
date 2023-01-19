import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { MERGESTAT_TITLE } from 'src/utils/constants'

import { UserSettingsProvider } from 'src/state/contexts'
import useCrumbsInit from 'src/views/hooks/useCrumbsInit'
import UserManagement from 'src/views/settings/user-management'

const UserManagementPage: NextPage = () => {
  const title = `User Management - Settings ${MERGESTAT_TITLE}`
  useCrumbsInit()

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <UserSettingsProvider>
        <UserManagement />
      </UserSettingsProvider>
    </Fragment>
  )
}

export default UserManagementPage
