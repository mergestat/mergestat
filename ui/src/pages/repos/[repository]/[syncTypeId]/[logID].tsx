import { Fragment } from 'react'
import type { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import RepoDataLogsDetailsView from 'src/views/repository-data-logs-details'
import type { RepoDataLogsDetailsProps } from 'src/views/repository-data-logs-details'

import { sampleRepositoriesData } from 'src/sample-data/repositories-data'
import { sampleRepositoryData } from 'src/sample-data/repository-data'
import { sampleData } from 'src/sample-data/repo-data-logs'

const LogsDetailsPage = (props: RepoDataLogsDetailsProps) => {
  return (
    <Fragment>
      <Head>
        <title>MergeStat | {props.repoData.name}</title>
      </Head>
      <RepoDataLogsDetailsView {...props} />
    </Fragment>
  )
}

export async function getServerSideProps({ params }: GetServerSidePropsContext) {
  const repoData = sampleRepositoriesData.find(data => data.id === '1')

  if (!repoData) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  const dataType = sampleRepositoryData.find(d => d.data.id === '1')

  if (!dataType) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  const data = sampleData.find(d => d.id === 'd41ffc09-5254-4fa8-adcf-5aa0b0a00955')

  if (!data) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    props: {
      repoData: {
        name: repoData.name,
        type: repoData.type
      },
      syncData: {
        title: dataType.data.title,
        syncState: dataType.status.syncState,
      },
      data: data,
    },
  }
}

export default LogsDetailsPage
