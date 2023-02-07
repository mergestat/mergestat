import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import useCrumbsInit from 'src/views/hooks/useCrumbsInit'

const SavedQueryPage: NextPage = () => {
  useCrumbsInit()

  return (
    <Fragment>
      <Head>
        <title>Saved Queries - MergeStat</title>
      </Head>
    </Fragment>
  )
}

export default SavedQueryPage
