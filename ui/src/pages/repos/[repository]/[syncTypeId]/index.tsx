import { useQuery } from '@apollo/client'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { SyncTypeData } from 'src/@types'
import { GET_SYNC_HISTORY_LOGS } from 'src/api-logic/graphql/queries/get-sync-history-logs.query'
import { mapToSyncLogsData } from 'src/api-logic/mappers/syncs-logs'
import Loading from 'src/components/Loading'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import useSyncNow from 'src/views/hooks/useSyncNow'
import RepoDataTypeView from 'src/views/repository-data-details'

const DataTypePage = () => {
  const router = useRouter()
  const { repository, syncTypeId } = router.query

  const { loading, data, refetch } = useQuery(GET_SYNC_HISTORY_LOGS, {
    variables: { repoId: repository, syncId: syncTypeId },
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  const { syncNow } = useSyncNow(refetch)

  const repoData: SyncTypeData = mapToSyncLogsData(data)
  const title = `${MERGESTAT_TITLE} ${repoData.repo.name}`

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      {loading
        ? <Loading />
        : <RepoDataTypeView {...repoData}
          syncNow={async () => await syncNow({
            variables: { syncId: syncTypeId }
          })}
        />
      }
    </Fragment>
  )
}

export default DataTypePage
