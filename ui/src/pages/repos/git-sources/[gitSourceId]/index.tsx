import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { GitSourceDetailProvider } from 'src/state/contexts/git-source-detail.context'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import GitSourceDetailView from 'src/views/repo-git-sources/git-source-detail'

const GitSourceDetailPage: NextPage = () => {
  const router = useRouter()
  const { gitSourceId } = router.query

  const title = `Git Source ${MERGESTAT_TITLE}`

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <GitSourceDetailProvider>
        <GitSourceDetailView gitSourceId={gitSourceId} />
      </GitSourceDetailProvider>
    </Fragment>
  )
}

export default GitSourceDetailPage
