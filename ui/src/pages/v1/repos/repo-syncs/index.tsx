import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { ContainerSyncsProvider } from 'src/state/contexts'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import ContainerSyncsView from 'src/views/repo-syncs'

const RepoSyncsPage: NextPage = () => {
  const title = `Repo Syncs ${MERGESTAT_TITLE}`

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <ContainerSyncsProvider>
        <ContainerSyncsView />
      </ContainerSyncsProvider>
    </Fragment>
  )
}

export default RepoSyncsPage
