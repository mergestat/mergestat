import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { SyncTypeData } from 'src/@types'
import { GET_SYNC_HISTORY_LOGS } from 'src/api-logic/graphql/queries/get-sync-history-logs'
import { mapToSyncLogsData } from 'src/api-logic/mappers/repo/syncs-logs'
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

  const repoData: SyncTypeData = useMemo(() => mapToSyncLogsData(data), [data])
  const title = `${repoData.sync?.title} - ${repoData.repo.name} - Repos  ${MERGESTAT_TITLE}`

  return { loading, repoData, title, syncTypeId, updateSchedule, syncNow }
}

export default useSyncsLogs
