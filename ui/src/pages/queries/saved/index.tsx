import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { SavedQueryProvider } from 'src/state/contexts/saved-query.context'
import useCrumbsInit from 'src/views/hooks/useCrumbsInit'
import SavedQueryList from 'src/views/saved-queries'

const SavedQueryPage: NextPage = () => {
  useCrumbsInit()

  return (
    <Fragment>
      <Head>
        <title>Saved Queries - MergeStat</title>
      </Head>
      <SavedQueryProvider>
        <SavedQueryList />
      </SavedQueryProvider>
    </Fragment>
  )
}

export default SavedQueryPage
