import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { RepositoriesProvider } from 'src/state/contexts'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import RepositoriesView from 'src/views/repos-containers'

const ReposContainersPage: NextPage = () => {
  const title = `Repos ${MERGESTAT_TITLE}`

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

export default ReposContainersPage
