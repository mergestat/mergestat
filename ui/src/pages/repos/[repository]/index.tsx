import Head from 'next/head'
import { Fragment } from 'react'
import Loading from 'src/components/Loading'
import useSyncs from 'src/views/hooks/useSyncs'
import RepoDataView from 'src/views/repository-data'

const RepoDetailsPage = () => {
  const { loading, repo, title } = useSyncs()

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {loading ? <Loading /> : <RepoDataView data={repo} />}
    </Fragment>
  )
}

export default RepoDetailsPage
