import { Badge, Dropdown, Spinner } from '@mergestat/blocks'
import { CircleCheckFilledIcon, CircleErrorFilledIcon, ClockIcon, WarningFilledIcon } from '@mergestat/icons'
import { PropsWithChildren } from 'react'
import { RepoContainerSyncState } from 'src/@types'
import { SYNC_CONTAINER_STATUS } from 'src/utils/constants'
import { JobsDropDownContent } from './jobs-drop-down-content'

type JobsDropDownProps = {
  repoId: string
  status: RepoContainerSyncState
  count: number
}

export const JobsDropDown: React.FC<JobsDropDownProps> = ({ repoId, status, count }: JobsDropDownProps) => {
  return (
    <Dropdown
      overlay={() => (
        <JobsDropDownContent repoId={repoId} status={status} />
      )}
      trigger={getStatusBadge(status, count)}
    />
  )
}

function getStatusBadge(status: RepoContainerSyncState, count: number): React.ReactNode {
  switch (status) {
    case SYNC_CONTAINER_STATUS.errored:
      return <IconAndQuantity count={count}>
        <CircleErrorFilledIcon className="t-icon t-icon-danger" />
      </IconAndQuantity>
    case SYNC_CONTAINER_STATUS.pending:
      return <IconAndQuantity count={count}>
        <ClockIcon className='t-icon t-icon-muted' />
      </IconAndQuantity>
    case SYNC_CONTAINER_STATUS.running:
      return <IconAndQuantity count={count}>
        <Spinner size="sm" className="mr-2" />
      </IconAndQuantity>
    case SYNC_CONTAINER_STATUS.success:
      return <IconAndQuantity count={count}>
        <CircleCheckFilledIcon className="t-icon t-icon-success" />
      </IconAndQuantity>
    case SYNC_CONTAINER_STATUS.warning:
      return <IconAndQuantity count={count}>
        <WarningFilledIcon className="t-icon t-icon-warning" />
      </IconAndQuantity>
    default:
      return <></>
  }
}

type RepositoryStatusProps = PropsWithChildren<{
  count: number
}>

const IconAndQuantity: React.FC<RepositoryStatusProps> = ({ count, children }: RepositoryStatusProps) => {
  return (
    <Badge
      className='interactive'
      label={'' + count}
      startIcon={children}
      action={true}
    />
  )
}
