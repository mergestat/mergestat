import Head from 'next/head'
import { Fragment } from 'react'
import Loading from 'src/components/Loading'
import { RepositoriesProvider } from 'src/state/contexts'
import useSyncs from 'src/views/hooks/useSyncs'
import RepoDataView from 'src/views/repository-data'

const RepoDetailsPage = () => {
  const { loading, repo, title } = useSyncs(true)

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {loading
        ? <Loading />
        : <RepositoriesProvider>
          <RepoDataView data={repo} />
        </RepositoriesProvider>}
    </Fragment>
  )
}

export default RepoDetailsPage
