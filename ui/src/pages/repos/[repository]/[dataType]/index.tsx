import { Fragment } from 'react'
import type { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { RepositoryDataTypeView } from 'src/views/repository-data-details'

import type { RepoDetailsPropsT } from 'src/views/repository-data'

import { sampleRepositoriesData } from 'src/sample-data/repositories-data'
import { sampleRepositoryData } from 'src/sample-data/repository-data'

const DataTypePage = (props: RepoDetailsPropsT) => {
  return (
    <Fragment>
      <Head>
        <title>MergeStat | {props.repoData.name}</title>
      </Head>
      <RepositoryDataTypeView {...props} />
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

  const data = sampleRepositoryData.find(d =>
    d.data.title.replace(/ /g, '-') === params?.dataType)

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
      data: data,
    },
  }
}

export default DataTypePage
