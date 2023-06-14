import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { RepoExploreProvider } from 'src/state/contexts/repo-explore.context'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import RepoExplorerView from 'src/views/explore'

const RepoExplorePage: NextPage = () => {
  const title = `Repo Explore ${MERGESTAT_TITLE}`

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <RepoExploreProvider>
        <RepoExplorerView />
      </RepoExploreProvider>
    </Fragment>
  )
}

export default RepoExplorePage
