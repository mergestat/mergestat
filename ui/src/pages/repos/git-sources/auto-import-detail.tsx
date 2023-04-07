import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import AutoImportDetailView from 'src/views/auto-import-detail'
import { RepoSyncsProvider } from 'src/state/contexts/repo-syncs.context'

const AutoImportDetailPage: NextPage = () => {
  const title = `Auto Import ${MERGESTAT_TITLE}`

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
        <RepoSyncsProvider>
          <AutoImportDetailView />
        </RepoSyncsProvider>
    </Fragment>
  )
}

export default AutoImportDetailPage
