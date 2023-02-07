import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { QueryTabsProvider } from 'src/state/contexts/query-tabs.context'
import { QueryProvider } from 'src/state/contexts/query.context'
import useCrumbsInit from 'src/views/hooks/useCrumbsInit'
import QueryEditor from 'src/views/sql-query-editor'

const SavedQueryEditionPage: NextPage = () => {
  useCrumbsInit()

  const router = useRouter()
  const { savedQueryId } = router.query

  return (
    <Fragment>
      <Head>
        <title>Saved Query Edition - MergeStat</title>
      </Head>
      <QueryProvider>
        <QueryTabsProvider>
          <QueryEditor savedQueryId={savedQueryId} />
        </QueryTabsProvider>
      </QueryProvider>
    </Fragment>
  )
}

export default SavedQueryEditionPage
