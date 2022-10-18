import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import QueryEditor from 'src/views/sql-query-editor'

const QueryEditorPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>MergeStat</title>
      </Head>
      <QueryEditor />
    </Fragment>
  )
}

export default QueryEditorPage
