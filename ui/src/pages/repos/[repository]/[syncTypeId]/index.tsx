import { Fragment } from 'react'
import Head from 'next/head'
import RepoDataTypeView from 'src/views/repository-data-details'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import GET_SYNC_HISTORY_LOGS from 'src/api-logic/graphql/queries/getSyncHistoryLogs.query'
import { mapToSyncLogsData } from 'src/api-logic/mappers/syncs-logs'
import Loading from 'src/components/Loading'
import { SyncTypeData } from 'src/@types'

const DataTypePage = () => {
  const router = useRouter()
  const { repository, syncTypeId } = router.query

  const { loading, error, data } = useQuery(GET_SYNC_HISTORY_LOGS, {
    variables: { repoId: repository, syncId: syncTypeId },
    pollInterval: 5000,
  })

  const repoData: SyncTypeData = mapToSyncLogsData(data)

  return (
    <Fragment>
      <Head>
        <title>MergeStat | {repoData.repo.name}</title>
      </Head>
      {loading ? <Loading /> : <RepoDataTypeView {...repoData} />}
    </Fragment>
  )
}

export default DataTypePage
