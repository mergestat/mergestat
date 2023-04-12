import { useQuery } from '@apollo/client'
import { LogBox, Panel } from '@mergestat/blocks'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ContainerSyncLogData, RepoBasicData, SyncContainerLogsType } from 'src/@types'
import { GET_LOGS_OF_A_CONTAINER_SYNC } from 'src/api-logic/graphql/queries/get-sync-history-logs'
import { mapToContainerSyncLogsData } from 'src/api-logic/mappers/repo-container/container-syncs-logs'
import Loading from 'src/components/Loading'
import { copyArrayToClipboard } from 'src/utils'
import { SYNC_STATUS } from 'src/utils/constants'
import useContainerSyncLogsCrumb from 'src/views/hooks/repoContainerSyncs/useContainerSyncLogsCrumb'
import { RepoContainerSyncIcon } from 'src/views/repos-containers/components/repo-container-sync-icon'
import { GetLogsOfContainerSyncQuery } from '../../../api-logic/graphql/generated/schema'
import { LogsInfo } from './components'

type RepoDataLogsDetailsViewProps = {
  repo: RepoBasicData
}

const RepoDataLogsDetailsView: React.FC<RepoDataLogsDetailsViewProps> = ({ repo }: RepoDataLogsDetailsViewProps) => {
  const router = useRouter()
  const { repository, syncId, jobId } = router.query

  const [logInfo, setLogInfo] = useState<SyncContainerLogsType>()

  const { loading, data } = useQuery<GetLogsOfContainerSyncQuery>(GET_LOGS_OF_A_CONTAINER_SYNC, {
    variables: { repoId: repository, syncId, jobId },
    fetchPolicy: 'no-cache',
    pollInterval: 5000,
  })

  const repoData: ContainerSyncLogData = mapToContainerSyncLogsData(data)

  useContainerSyncLogsCrumb(repo, repoData?.sync, data)

  useEffect(() => {
    repoData && setLogInfo(repoData.logs && repoData.logs.length > 0 ? repoData.logs[0] : undefined)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <>
      {loading
        ? <Loading />
        : <>
          <div className="bg-white h-16 w-full flex justify-between px-8 items-center border-b border-gray-200">
            <div className="text-xl font-semibold flex items-center space-x-1">
              <RepoContainerSyncIcon type={logInfo?.syncType || SYNC_STATUS.empty} />
              <span className='pl-1'>{logInfo?.syncStartText || ''}</span>
            </div>
          </div>

          <div className="flex-1 overflow-auto p-8 space-y-8">
            <LogsInfo id={logInfo?.id || ''} syncStart={logInfo?.syncStart || ''} duration={logInfo?.duration || ''} />
            {logInfo?.logs?.length
              ? <LogBox logs={logInfo?.logs || []} onCopy={() => copyArrayToClipboard(logInfo?.logs)} />
              : (
                <Panel>
                  <Panel.Body className="flex items-center justify-center py-8">
                    <span className='t-text-muted text-sm'>No log entries yet</span>
                  </Panel.Body>
                </Panel>)}
          </div>
        </>
      }</>
  )
}

export default RepoDataLogsDetailsView
