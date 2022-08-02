import { Fragment } from 'react'
import Head from 'next/head'
import RepoDataLogsDetailsView from 'src/views/repository-data-logs-details'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_LOGS_OF_A_SYNC } from 'src/api-logic/graphql/queries/get-sync-history-logs.query'
import { mapToSyncLogsData } from 'src/api-logic/mappers/syncs-logs'
import { SyncTypeData } from 'src/@types'
import Loading from 'src/components/Loading'
import { showErrorAlert } from 'src/utils/alerts'

const LogsDetailsPage = () => {
  const router = useRouter()
  const { repository, syncTypeId, logId } = router.query

  const { loading, error, data } = useQuery(GET_LOGS_OF_A_SYNC, {
    variables: { repoId: repository, syncId: syncTypeId, logId },
    pollInterval: 5000,
  })

  const repoData: SyncTypeData = mapToSyncLogsData(data)

  if (error) {
    showErrorAlert(error.message)
  }

  return (
    <Fragment>
      <Head>
        <title>MergeStat | {repoData.repo.name}</title>
      </Head>
      {loading ? <Loading /> : <RepoDataLogsDetailsView {...repoData} />}
    </Fragment>
  )
}

export default LogsDetailsPage
