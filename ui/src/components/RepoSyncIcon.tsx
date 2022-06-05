import React from 'react'
import cx from 'classnames'
import { Spinner } from '@mergestat/blocks'
import {
  CircleCheckFilledIcon,
  CircleErrorFilledIcon,
  CircleInformationFilledIcon,
} from '@mergestat/icons'
import type { RepSyncStateT } from 'src/@types'

type RepoSyncIconPropsT = {
  type: RepSyncStateT
  className?: string
}

export const RepoSyncIcon = ({ type, className="" }: RepoSyncIconPropsT) => {
  switch (type) {
    case 'disabled':
      return <CircleInformationFilledIcon className={cx('t-icon text-samantic-mutedIcon', {[className]: className !== ""})} />
    case 'succeeded':
      return <CircleCheckFilledIcon className={cx('t-icon text-samantic-success', {[className]: className !== ""})} />
    case 'failed':
      return <CircleErrorFilledIcon className={cx('t-icon text-samantic-danger', {[className]: className !== ""})} />
    case 'running':
    default:
      return <Spinner size="sm" className={className} />
  }
}
