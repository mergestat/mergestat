import { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { RepositoryDetailsView } from 'src/views'

const RepoDetailsPage: NextPage = () => {
  const router = useRouter()
  const { repoName } = router.query

  if (typeof repoName != 'string') return <></>

  return (
    <Fragment>
      <Head>
        <title>MergeStat | {repoName}</title>
      </Head>
      <RepositoryDetailsView repoName={repoName} />
    </Fragment>
  )
}

export default RepoDetailsPage
