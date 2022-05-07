import { Fragment } from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { RepositoriesProvider } from '../src/state/contexts/repositories.context'

const Repos = dynamic(() => import('src/views/repositories'))


const ReposPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>MergeStat | Repos</title>
      </Head>
      <RepositoriesProvider>
        <Repos />
      </RepositoriesProvider>
    </Fragment>
  )
}

export default ReposPage
