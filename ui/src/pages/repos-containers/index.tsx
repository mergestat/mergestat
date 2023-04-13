import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { RepoContainersProvider } from 'src/state/contexts/repo-containers.context'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import RepositoriesView from 'src/views/repos-containers'

const ReposContainersPage: NextPage = () => {
  const title = `Repos ${MERGESTAT_TITLE}`

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <RepoContainersProvider>
        <RepositoriesView />
      </RepoContainersProvider>
    </Fragment>
  )
}

export default ReposContainersPage
