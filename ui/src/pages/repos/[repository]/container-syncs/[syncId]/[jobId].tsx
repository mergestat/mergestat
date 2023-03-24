import { useQuery } from '@apollo/client'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { ContainerSyncLogData } from 'src/@types'
import { GET_LOGS_OF_A_CONTAINER_SYNC } from 'src/api-logic/graphql/queries/get-sync-history-logs'
import { mapToContainerSyncLogsData } from 'src/api-logic/mappers/repo-container/container-syncs-logs'
import Loading from 'src/components/Loading'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import RepoDataLogsDetailsView from 'src/views/repo-data-container/repository-data-logs-details'

const LogsDetailsPage = () => {
  const router = useRouter()
  const { repository, syncId, jobId } = router.query

  const { loading, data } = useQuery(GET_LOGS_OF_A_CONTAINER_SYNC, {
    variables: { repoId: repository, syncId, jobId },
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  const repoData: ContainerSyncLogData = mapToContainerSyncLogsData(data)
  const title = `${repoData.logs?.[0].syncStartText} - ${repoData.sync?.name} - ${repoData.repo.name} - Repos ${MERGESTAT_TITLE}`

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
