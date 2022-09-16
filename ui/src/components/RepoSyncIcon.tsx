import { Spinner, Tooltip } from '@mergestat/blocks'
import { CircleCheckFilledIcon, CircleErrorFilledIcon, CircleInformationFilledIcon, ClockIcon, MinusIcon } from '@mergestat/icons'
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
  let icon
  switch (type) {
    case SYNC_STATUS.disabled:
      icon = <CircleInformationFilledIcon className={cx('t-icon text-semantic-mutedIcon', { [className]: className !== '' })} />
      break
    case SYNC_STATUS.succeeded:
      icon = <CircleCheckFilledIcon className={cx('t-icon text-semantic-success', { [className]: className !== '' })} />
      break
    case SYNC_STATUS.failed:
      icon = <CircleErrorFilledIcon className={cx('t-icon text-semantic-danger', { [className]: className !== '' })} />
      break
    case SYNC_STATUS.queued:
      icon = <ClockIcon className={cx('t-icon text-semantic-mutedIcon', { [className]: className !== '' })} />
      break
    case SYNC_STATUS.running:
      icon = <Spinner size="sm" className={className} />
      break
    default:
      icon = <MinusIcon className={cx('t-icon text-semantic-mutedIcon', { [className]: className !== '' })} />
      break
  }
  return <WithTooltip status={`${type.charAt(0).toUpperCase()}${type.slice(1)}`} icon={icon} />
}
