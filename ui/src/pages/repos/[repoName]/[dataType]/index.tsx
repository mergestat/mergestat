import { Fragment } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import {  RepositoryDetailsView } from 'src/views'
import { RepositoryDataTypeView } from 'src/views/repository-data-details'

const DataTypePage: NextPage = () => {
  const router = useRouter()
  let { repoName,dataType,repSyncState } = router.query
  if (typeof(repoName)!="string") return <></>
  if (typeof(dataType)!="string") return <></>

  return (
    <Fragment>
      <Head>
        <title>MergeStat | {repoName}</title>
      </Head>
      <RepositoryDataTypeView syncState={repSyncState as any} repoName={repoName} DataType={dataType} />
    </Fragment>
  )
}

export default DataTypePage
