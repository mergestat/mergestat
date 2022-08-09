import { Spinner } from '@mergestat/blocks'
import { CircleCheckFilledIcon, CircleErrorFilledIcon, CircleInformationFilledIcon, ClockIcon } from '@mergestat/icons'
import cx from 'classnames'
import type { RepoSyncStateT } from 'src/@types'

type RepoSyncIconPropsT = {
  type: RepoSyncStateT
  className?: string
}

export const RepoSyncIcon = ({ type, className = '' }: RepoSyncIconPropsT) => {
  switch (type) {
    case 'disabled':
      return <CircleInformationFilledIcon className={cx('t-icon text-semantic-mutedIcon', { [className]: className !== '' })} />
    case 'succeeded':
      return <CircleCheckFilledIcon className={cx('t-icon text-semantic-success', { [className]: className !== '' })} />
    case 'failed':
      return <CircleErrorFilledIcon className={cx('t-icon text-semantic-danger', { [className]: className !== '' })} />
    case 'queued':
      return <ClockIcon className={cx('t-icon text-semantic-mutedIcon', { [className]: className !== '' })} />
    case 'running':
      return <Spinner size="sm" className={className} />
    default:
      return <></>
  }
}
