import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { QueryProvider } from 'src/state/contexts/query.contex'
import QueryEditor from 'src/views/sql-query-editor'

const QueryEditorPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>MergeStat</title>
      </Head>
      <QueryProvider>
        <QueryEditor />
      </QueryProvider>
    </Fragment>
  )
}

export default QueryEditorPage
