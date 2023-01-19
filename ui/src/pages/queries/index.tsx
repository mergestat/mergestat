import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { QueryProvider } from 'src/state/contexts/query.context'
import useCrumbsInit from 'src/views/hooks/useCrumbsInit'
import QueryEditor from 'src/views/sql-query-editor'

const QueryEditorPage: NextPage = () => {
  useCrumbsInit()

  return (
    <Fragment>
      <Head>
        <title>Queries - MergeStat</title>
      </Head>
      <QueryProvider>
        <QueryEditor />
      </QueryProvider>
    </Fragment>
  )
}

export default QueryEditorPage
