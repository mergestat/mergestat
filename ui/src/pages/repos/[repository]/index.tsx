import { Fragment } from 'react'
import type { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import type { RepoDataPropsT } from 'src/@types'
import RepoDataView from 'src/views/repository-data'

import { sampleRepositoriesData } from 'src/sample-data/repositories-data'

const RepoDetailsPage = ({ repoData }: { repoData: RepoDataPropsT }) => {
  return (
    <Fragment>
      <Head>
        <title>MergeStat | {repoData.name}</title>
      </Head>
      <RepoDataView data={repoData} />
    </Fragment>
  )
}

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const repoData = sampleRepositoriesData.find(data =>
    data.name.replace(/\//g, '-') === params?.repository)

  if (!repoData) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: { repoData },
  }
}

export default RepoDetailsPage
