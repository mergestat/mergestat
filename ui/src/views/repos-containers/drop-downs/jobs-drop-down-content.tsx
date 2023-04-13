import { useQuery } from '@apollo/client'
import { Menu, Spinner } from '@mergestat/blocks'
import { ChevronRightIcon } from '@mergestat/icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { RepoContainerSyncState } from 'src/@types'
import { GetContainerSyncsByStatusQuery } from 'src/api-logic/graphql/generated/schema'
import { GET_CONTAINERS_SYNCS_BY_STATUS } from 'src/api-logic/graphql/queries/get-repos'
import { RelativeTimeText } from 'src/components/Fields/relative-time-text'
import { SYNC_CONTAINER_STATUS, TEST_IDS } from 'src/utils/constants'
import { RepoContainerSyncIcon } from '../components/repo-container-sync-icon'

type JobsDropDownContentProps = {
  repoId: string
  status: RepoContainerSyncState
}

interface JobsData {
  [key: string]: {
    container_sync_id: string,
    container_image_name: string,
    sync_last_completed_at: string
  }
}

const getLastSync = (status: RepoContainerSyncState, lastSync: string) => {
  return status === SYNC_CONTAINER_STATUS.running
    ? SYNC_CONTAINER_STATUS.running
    : status === SYNC_CONTAINER_STATUS.pending
      ? SYNC_CONTAINER_STATUS.pending
      : lastSync ? <RelativeTimeText date={lastSync} prefix='Last sync' /> : ''
}

export const JobsDropDownContent: React.FC<JobsDropDownContentProps> = ({ repoId, status }: JobsDropDownContentProps) => {
  const [jobs, setJobs] = useState<JobsData>()

  const { loading, data } = useQuery<GetContainerSyncsByStatusQuery>(GET_CONTAINERS_SYNCS_BY_STATUS, {
    variables: { repoId, status },
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    data && setJobs(data?.getReposSyncsByStatus as JobsData)
  }, [data])

  return (
    <Menu className="rounded w-100 flex flex-col max-h-80 overflow-auto">
      {loading
        ? <div className='flex justify-center items-center h-16'>
          <Spinner size='sm' />
        </div>
        : jobs && Object.keys(jobs).map(jobId => (
          jobs[jobId] && <Link key={jobId} href={`/repos-containers/${repoId}/${jobs[jobId].container_sync_id}/${jobId}`}>
            <div data-testid={TEST_IDS.repoDataDropdown}
              className="hover_bg-gray-50 py-3 px-4 flex items-center justify-between gap-3 focus-within_ text-base cursor-pointer">
              <div className="flex items-center gap-3">
                <RepoContainerSyncIcon type={status} className="t-icon" />
                <div className='flex flex-col text-left'>
                  <span className='text-sm font-medium t-text-default mb-0.5'>{jobs[jobId].container_image_name}</span>
                  <span className='text-sm t-text-muted'>{getLastSync(status, jobs[jobId].sync_last_completed_at)}</span>
                </div>
              </div>
              <ChevronRightIcon className='t-icon t-icon-default' />
            </div>
          </Link>
        ))}
    </Menu>
  )
}
