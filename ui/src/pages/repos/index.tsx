import { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import RepositoriesView from 'src/views/repositories/repositories-view'
import { RepositoriesProvider } from 'src/state/contexts'
import { MERGESTAT_TITLE } from 'src/utils/constants'

const ReposPage: NextPage = () => {
  const title = `${MERGESTAT_TITLE} Repos`

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <RepositoriesProvider>
        <RepositoriesView />
      </RepositoriesProvider>
    </Fragment>
  )
}

export default ReposPage
