import Head from 'next/head'
import { Fragment } from 'react'
import Loading from 'src/components/Loading'
import useContainerBasicData from 'src/views/hooks/repoContainerSyncs/useContainerBasicData'
import RepoDataLogsDetailsView from 'src/views/repo-data-container/repository-data-logs-details'

const LogsDetailsPage = () => {
  const { loading, title, basicData } = useContainerBasicData()

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {loading ? <Loading /> : <RepoDataLogsDetailsView repo={basicData.repo} />}
    </Fragment>
  )
}

export default LogsDetailsPage
