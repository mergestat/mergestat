import Head from 'next/head'
import { Fragment } from 'react'
import Loading from 'src/components/Loading'
import useRepoData from 'src/views/hooks/repoSyncs/useRepoData'
import RepoDataView from 'src/views/repo-data/repository-data'

const RepoDetailsPage = () => {
  const { loading, repo, title } = useRepoData()

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {loading
        ? <Loading />
        : <RepoDataView data={repo} />
      }
    </Fragment>
  )
}

export default RepoDetailsPage
