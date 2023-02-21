import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import { MERGESTAT_TITLE } from 'src/utils/constants'

const GitHubSourcePage: NextPage = () => {
  const title = `GitHub Source ${MERGESTAT_TITLE}`

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
    </Fragment>
  )
}

export default GitHubSourcePage
