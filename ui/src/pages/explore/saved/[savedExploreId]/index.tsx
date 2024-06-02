import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { ExploreProvider } from 'src/state/contexts/repo-explore.context'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import ExploreView from 'src/views/explore'
import useCrumbsInit from 'src/views/hooks/useCrumbsInit'

const SavedExplorePage: NextPage = () => {
  const title = `Explore ${MERGESTAT_TITLE}`
  useCrumbsInit()

  const router = useRouter()
  const { savedExploreId } = router.query

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <ExploreProvider>
        <ExploreView savedExploreId={savedExploreId} />
      </ExploreProvider>
    </Fragment>
  )
}

export default SavedExplorePage
