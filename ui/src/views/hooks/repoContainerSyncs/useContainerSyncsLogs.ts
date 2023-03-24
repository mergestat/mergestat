import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { ContainerSyncLogData } from 'src/@types'
import { GET_CONTAINER_SYNC_HISTORY_LOGS } from 'src/api-logic/graphql/queries/get-sync-history-logs'
import { mapToContainerSyncLogsData } from 'src/api-logic/mappers/repo-container/container-syncs-logs'
import { MERGESTAT_TITLE } from 'src/utils/constants'
import { GetContainerSyncHistoryLogsQuery } from '../../../api-logic/graphql/generated/schema'
import useContainerSyncNow from './useContainerSyncNow'

const useContainerSyncsLogs = (poll = false) => {
  const router = useRouter()
  const { repository, syncId } = router.query

  const { loading, data } = useQuery<GetContainerSyncHistoryLogsQuery>(GET_CONTAINER_SYNC_HISTORY_LOGS, {
    variables: { repoId: repository, syncId },
    fetchPolicy: 'no-cache',
    ...(poll && { pollInterval: 5000 }),
  })

  const { addSchedule, removeSchedule, syncNow } = useContainerSyncNow('getContainerSyncHistoryLogs')

  const repoData: ContainerSyncLogData = mapToContainerSyncLogsData(data)
  const title = `${repoData.sync?.name} - ${repoData.repo.name} - Repos  ${MERGESTAT_TITLE}`

  return { loading, repoData, title, syncId, addSchedule, removeSchedule, syncNow }
}

export default useContainerSyncsLogs
