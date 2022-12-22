import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { MERGESTAT_TITLE } from 'src/utils/constants'

import { UserSettingsProvider } from 'src/state/contexts'
import UserSettings from 'src/views/settings/user-settings'

const UserSettingsPage: NextPage = () => {
  const title = `User Settings - Settings ${MERGESTAT_TITLE}`

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <UserSettingsProvider>
        <UserSettings />
      </UserSettingsProvider>
    </Fragment>
  )
}

export default UserSettingsPage
