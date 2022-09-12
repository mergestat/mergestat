import { Spinner } from '@mergestat/blocks'
import { CircleCheckFilledIcon, CircleErrorFilledIcon, CircleInformationFilledIcon, ClockIcon, MinusIcon } from '@mergestat/icons'
import cx from 'classnames'
import type { RepoSyncStateT } from 'src/@types'
import { SYNC_STATUS } from 'src/utils/constants'

type RepoSyncIconPropsT = {
  type: RepoSyncStateT
  className?: string
}

export const RepoSyncIcon = ({ type, className = '' }: RepoSyncIconPropsT) => {
  switch (type) {
    case SYNC_STATUS.disabled:
      return <CircleInformationFilledIcon className={cx('t-icon text-semantic-mutedIcon', { [className]: className !== '' })} />
    case SYNC_STATUS.succeeded:
      return <CircleCheckFilledIcon className={cx('t-icon text-semantic-success', { [className]: className !== '' })} />
    case SYNC_STATUS.failed:
      return <CircleErrorFilledIcon className={cx('t-icon text-semantic-danger', { [className]: className !== '' })} />
    case SYNC_STATUS.queued:
      return <ClockIcon className={cx('t-icon text-semantic-mutedIcon', { [className]: className !== '' })} />
    case SYNC_STATUS.running:
      return <Spinner size="sm" className={className} />
    default:
      return <MinusIcon className={cx('t-icon text-semantic-mutedIcon', { [className]: className !== '' })} />
  }
}
