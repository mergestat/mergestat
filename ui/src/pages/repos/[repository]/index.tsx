import { Fragment, useState } from 'react'
import Head from 'next/head'
import RepoDataView from 'src/views/repository-data'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import GET_REPO_SYNCS from 'src/api-logic/graphql/queries/getRepoSyncs.query'
import { mapToSyncsData } from 'src/api-logic/mappers/repo-syncs'
import Loading from 'src/components/Loading'


const RepoDetailsPage = () => {
  const router = useRouter()
  const { repository } = router.query

  const { loading, error, data } = useQuery(GET_REPO_SYNCS, {
    variables: { id: repository },
  })

  const repo = mapToSyncsData(data)

  return (
    <Fragment>
      <Head>
        <title>MergeStat | {repo?.name}</title>
      </Head>
      {loading ? <Loading /> : <RepoDataView data={repo} />}
    </Fragment>
  )
}

export default RepoDetailsPage
