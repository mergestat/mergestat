import { CHECKBOX_STATES } from '@mergestat/blocks'
import { formatDistance, formatDuration, intervalToDuration } from 'date-fns'
import { RepoSyncStateT } from 'src/@types'

export function checkRepoValidate(repo: string, checkDomain: boolean = true) {
  return checkDomain
    ? /((http|https):\/\/)?(www\.)?[a-z0-9\-\.]{3,}\.[a-zA-Z0-9]+[\/]{1,}.[^\/.*]/.test(
      repo
    )
    : /(((http|https):\/\/)?(www\.)?[a-z0-9\-\.]{3,}\.)?[a-zA-Z0-9]+[\/]{1,}.[^\/.*]/.test(
      repo
    )
}

export function getRepoFromUrl(url: string) {
  return url.replace(
    /((http|https):\/\/)?(www\.)?[a-z0-9\-\.]{3,}\.[a-zA-Z0-9]+[\/]{1,}/,
    ''
  )
}

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function selectAllState(data: Array<any>) {
  const selectedDataLen: number = data.filter(
    (d) => d.isSelected === true
  ).length

  return selectedDataLen === 0
    ? CHECKBOX_STATES.Unchecked
    : selectedDataLen === data.length
      ? CHECKBOX_STATES.Checked
      : CHECKBOX_STATES.Indeterminate
}

/**
 * Method to get time ago respect current date
 * @param baseDate Date to evaluete
 * @returns Date time ago respect current date (e.g.: 'less than 20 seconds ago', '1 minute ago')
 */
export function getTimeAgoFromNow(baseDate: Date): string {
  const distance = formatDistance(new Date(), baseDate, {
    includeSeconds: true,
  })

  return `${distance} ago`
}

/**
 * Method to get duration time abbreviated
 * @param start Date from
 * @param end  Date to
 * @returns  Abbreviated duration time (e.g.: '1h 2m 3s', '2m 3s')
 */
export function getSimpleDurationTime(start: Date, end: Date): string {
  const duration = formatDuration(intervalToDuration({ start, end }))
  return duration.replaceAll(/ hours*/ig, 'h').replaceAll(/ minutes*/ig, 'm').replaceAll(/ seconds*/ig, 's')
}

/**
 * Method to map data base status to table status
 * @param status Data base status
 * @returns Table status (RepoSyncStateT)
 */
export function mapToRepoSyncStateT(status: string): RepoSyncStateT {
  switch (status) {
    case 'DONE':
      return 'succeeded'
    case 'RUNNING':
      return 'running'
    case 'QUEUED':
      return 'queued'
    case 'FAILED':
      return 'failed'
    case 'DISABLED':
      return 'disabled'
    default:
      return 'empty'
  }
}
