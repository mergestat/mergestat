import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { GitSourcesProvider } from 'src/state/contexts/git-sources.context'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import GitSourcesView from 'src/views/repo-containers-git-sources/git-sources'

const GitSourcePage: NextPage = () => {
  const title = `Git Sources ${MERGESTAT_TITLE}`

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <GitSourcesProvider>
        <GitSourcesView />
      </GitSourcesProvider>
    </Fragment>
  )
}

export default GitSourcePage
