import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { ContainerSyncDetailProvider } from 'src/state/contexts/container-sync-detail.context'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import RepoSyncDetailView from 'src/views/repo-sync-detail'

const RepoSyncPage: NextPage = () => {
  const router = useRouter()
  const { repoSyncId } = router.query

  const title = `Repo Sync ${MERGESTAT_TITLE}`

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <ContainerSyncDetailProvider>
        <RepoSyncDetailView containerSyncId={repoSyncId} />
      </ContainerSyncDetailProvider>
    </Fragment>
  )
}

export default RepoSyncPage
