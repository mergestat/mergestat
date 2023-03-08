import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import AddSourceView from 'src/views/repo-git-sources/add-source'

const AddSourcePage: NextPage = () => {
  const title = `Add Source ${MERGESTAT_TITLE}`

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <AddSourceView />
    </Fragment>
  )
}

export default AddSourcePage
