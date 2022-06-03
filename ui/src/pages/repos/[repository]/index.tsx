import { Fragment } from 'react'
import type { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { RepositoryDetailsView } from 'src/views'

import { sampleRepositoriesData } from 'src/sample-data/repository-data'

const RepoDetailsPage = ({ repoData }: { repoData: any }) => {
  return (
    <Fragment>
      <Head>
        <title>MergeStat | {repoData.name}</title>
      </Head>
      <RepositoryDetailsView />
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
