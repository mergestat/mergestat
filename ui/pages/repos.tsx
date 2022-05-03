import { Fragment } from "react"
import type { NextPage } from "next"
import dynamic from 'next/dynamic'
import Head from "next/head"

const Repos = dynamic(() => import('src/views/Repos'))

const ReposPage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>MergeStat | Repos</title>
      </Head>

      <Repos />
    </Fragment>
  )
}

export default ReposPage
