import { Spinner, Tooltip } from '@mergestat/blocks'
import { CircleCheckFilledIcon, CircleErrorFilledIcon, ClockIcon, MinusIcon, WarningFilledIcon } from '@mergestat/icons'
import cx from 'classnames'
import type { RepoContainerSyncState } from 'src/@types'
import { SYNC_CONTAINER_STATUS } from 'src/utils/constants'

type RepoContainerSyncIconProps = {
  type: RepoContainerSyncState
  className?: string
}

type WithTooltipProps = {
  status: string
  icon: JSX.Element
}

const WithTooltip: React.FC<WithTooltipProps> = ({ status, icon }: WithTooltipProps) => {
  return (
    <Tooltip content={status} placement='bottom'>
      {icon}
    </Tooltip>
  )
}

export const RepoContainerSyncIcon = ({ type, className = '' }: RepoContainerSyncIconProps) => {
  let icon, text
  switch (type) {
    case SYNC_CONTAINER_STATUS.success:
      text = 'Last sync was successful'
      icon = <CircleCheckFilledIcon className={cx('t-icon t-icon-success', { [className]: className !== '' })} />
      break
    case SYNC_CONTAINER_STATUS.warning:
      text = 'Last sync had a warning'
      icon = <WarningFilledIcon className={cx('t-icon t-icon-warning', { [className]: className !== '' })} />
      break
    case SYNC_CONTAINER_STATUS.errored:
      text = 'Last sync had an error'
      icon = <CircleErrorFilledIcon className={cx('t-icon t-icon-danger', { [className]: className !== '' })} />
      break
    case SYNC_CONTAINER_STATUS.pending:
      text = 'Sync is pending to run'
      icon = <ClockIcon className={cx('t-icon t-icon-muted', { [className]: className !== '' })} />
      break
    case SYNC_CONTAINER_STATUS.running:
      text = 'Sync is currently running'
      icon = <Spinner size="sm" className={className} />
      break
    default:
      text = 'No sync history'
      icon = <MinusIcon className={cx('t-icon t-icon-muted', { [className]: className !== '' })} />
      break
  }
  return <WithTooltip status={text} icon={icon} />
}
