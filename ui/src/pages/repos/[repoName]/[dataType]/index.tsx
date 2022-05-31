import { Fragment } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import {  RepositoryDetailsView } from 'src/views'
import { RepositoryDataTypeView } from 'src/views/repository-data-details'

const DataTypePage: NextPage = () => {
  const router = useRouter()
  const { repoName, dataType, RepSyncStateT } = router.query

  if (typeof repoName != 'string' || typeof dataType != 'string') return <></>

  return (
    <Fragment>
      <Head>
        <title>MergeStat | {repoName}</title>
      </Head>
      <RepositoryDataTypeView
        syncState={RepSyncStateT as any}
        repoName={repoName}
        DataType={dataType}
      />
    </Fragment>
  )
}

export default DataTypePage
