import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { SyncTypeData } from 'src/@types'
import { GET_SYNC_HISTORY_LOGS } from 'src/api-logic/graphql/queries/get-sync-history-logs.query'
import { mapToSyncLogsData } from 'src/api-logic/mappers/syncs-logs'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import useSyncNow from './useSyncNow'

const useSyncsLogs = (poll = false) => {
  const router = useRouter()
  const { repository, syncTypeId } = router.query

  const { loading, data } = useQuery(GET_SYNC_HISTORY_LOGS, {
    variables: { repoId: repository, syncId: syncTypeId },
    fetchPolicy: 'no-cache',
    ...(poll && { pollInterval: 5000 }),
  })

  const { updateSchedule, syncNow } = useSyncNow('getSyncHistoryLogs')

  const repoData: SyncTypeData = mapToSyncLogsData(data)
  const title = `${MERGESTAT_TITLE} ${repoData.repo.name}`

  return { loading, repoData, title, syncTypeId, updateSchedule, syncNow }
}

export default useSyncsLogs
