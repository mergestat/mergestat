import { useQuery } from '@apollo/client'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { SyncTypeData } from 'src/@types'
import { GET_LOGS_OF_A_SYNC } from 'src/api-logic/graphql/queries/get-sync-history-logs.query'
import { mapToSyncLogsData } from 'src/api-logic/mappers/syncs-logs'
import Loading from 'src/components/Loading'
import { showErrorAlert } from 'src/utils/alerts'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import RepoDataLogsDetailsView from 'src/views/repository-data-logs-details'

const LogsDetailsPage = () => {
  const router = useRouter()
  const { repository, syncTypeId, logID } = router.query

  const { loading, error, data } = useQuery(GET_LOGS_OF_A_SYNC, {
    variables: { repoId: repository, syncId: syncTypeId, logId: logID },
    pollInterval: 5000,
  })

  const repoData: SyncTypeData = mapToSyncLogsData(data)
  const title = `${MERGESTAT_TITLE} ${repoData.repo.name}`

  if (error) {
    showErrorAlert(error.message)
  }

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {loading ? <Loading /> : <RepoDataLogsDetailsView {...repoData} />}
    </Fragment>
  )
}

export default LogsDetailsPage
