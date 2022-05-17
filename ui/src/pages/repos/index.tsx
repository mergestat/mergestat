import { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { RepositoriesView } from 'src/views'
import { RepositoriesProvider } from 'src/state/contexts'

const ReposPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>MergeStat | Repos</title>
      </Head>
      <RepositoriesProvider>
        <RepositoriesView />
      </RepositoriesProvider>
    </Fragment>
  )
}

export default ReposPage
