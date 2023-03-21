import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { MERGESTAT_TITLE } from 'src/utils/constants'

const RepoSyncPage: NextPage = () => {
  const router = useRouter()
  const { repoSyncId } = router.query

  const title = `Repo Sync ${MERGESTAT_TITLE}`

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
    </Fragment>
  )
}

export default RepoSyncPage
