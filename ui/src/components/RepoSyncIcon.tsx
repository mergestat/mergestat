import { Spinner, Tooltip } from '@mergestat/blocks'
import { CircleCheckFilledIcon, CircleErrorFilledIcon, CircleInformationFilledIcon, ClockIcon, MinusIcon, WarningFilledIcon } from '@mergestat/icons'
import cx from 'classnames'
import type { RepoSyncStateT } from 'src/@types'
import { SYNC_STATUS } from 'src/utils/constants'

type RepoSyncIconPropsT = {
  type: RepoSyncStateT
  className?: string
}

type WithTooltipPropsT = {
  status: string
  icon: JSX.Element
}

const WithTooltip: React.FC<WithTooltipPropsT> = ({ status, icon }: WithTooltipPropsT) => {
  return (
    <Tooltip content={status} placement='bottom'>
      {icon}
    </Tooltip>
  )
}

export const RepoSyncIcon = ({ type, className = '' }: RepoSyncIconPropsT) => {
  let icon, text
  switch (type) {
    case SYNC_STATUS.disabled:
      text = 'Sync is disabled'
      icon = <CircleInformationFilledIcon className={cx('t-icon t-icon-muted', { [className]: className !== '' })} />
      break
    case SYNC_STATUS.succeeded:
      text = 'Last sync was successful'
      icon = <CircleCheckFilledIcon className={cx('t-icon t-icon-success', { [className]: className !== '' })} />
      break
    case SYNC_STATUS.warning:
      text = 'Last sync had a warning'
      icon = <WarningFilledIcon className={cx('t-icon t-icon-warning', { [className]: className !== '' })} />
      break
    case SYNC_STATUS.error:
      text = 'Last sync had an error'
      icon = <CircleErrorFilledIcon className={cx('t-icon t-icon-danger', { [className]: className !== '' })} />
      break
    case SYNC_STATUS.queued:
      text = 'Sync is queued to run'
      icon = <ClockIcon className={cx('t-icon t-icon-muted', { [className]: className !== '' })} />
      break
    case SYNC_STATUS.running:
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
